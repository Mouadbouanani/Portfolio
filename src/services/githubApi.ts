import axios from 'axios';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  language: string;
  stargazers_count: number;
  topics: string[];
  fork: boolean;
}

const GITHUB_API_BASE = 'https://api.github.com';

const githubApi = axios.create({
  baseURL: GITHUB_API_BASE,
  headers: {
    'Accept': 'application/vnd.github.v3+json',
  },
});

/**
 * Fetch all public repositories for a specific GitHub user
 * @param username The GitHub username to fetch repositories for
 * @returns Promise resolving to array of GitHubRepo objects
 */
export const fetchUserRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    // GitHub API endpoint for user repositories
    // This will fetch up to 100 repos per page, with a maximum of 300 repos (3 pages)
    const repos: GitHubRepo[] = [];
    let page = 1;
    let hasMorePages = true;

    while (hasMorePages && page <= 10) { // Safety limit of 10 pages to prevent too many requests
      const response = await githubApi.get(`/users/${username}/repos`, {
        params: {
          type: 'all',
          sort: 'updated',
          direction: 'desc',
          per_page: 100,
          page: page,
        }
      });

      const pageRepos = response.data as GitHubRepo[];
      repos.push(...pageRepos);

      // Check if there are more pages
      if (pageRepos.length < 100) {
        hasMorePages = false;
      }

      page++;
    }

    // Filter out forks and only return repositories owned by the user
    return repos.filter(repo => !repo.fork);
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw new Error(`Failed to fetch repositories for user: ${username}`);
  }
};

/**
 * Fetch repositories for authenticated user (if personal access token is provided)
 * @param token GitHub personal access token
 * @returns Promise resolving to array of GitHubRepo objects
 */
export const fetchAuthenticatedUserRepos = async (token: string): Promise<GitHubRepo[]> => {
  try {
    const response = await githubApi.get('/user/repos', {
      headers: {
        'Authorization': `token ${token}`,
        'Accept': 'application/vnd.github.v3+json',
      },
      params: {
        type: 'all',
        sort: 'updated',
        direction: 'desc',
        per_page: 100,
      }
    });

    return response.data as GitHubRepo[];
  } catch (error) {
    console.error('Error fetching authenticated user repositories:', error);
    throw new Error('Failed to fetch authenticated user repositories');
  }
};

/**
 * Get repository details by name and owner
 * @param owner Repository owner
 * @param repoName Repository name
 * @returns Promise resolving to GitHubRepo object
 */
export const fetchRepoDetails = async (owner: string, repoName: string): Promise<GitHubRepo> => {
  try {
    const response = await githubApi.get(`/repos/${owner}/${repoName}`);
    return response.data as GitHubRepo;
  } catch (error) {
    console.error(`Error fetching details for repo ${owner}/${repoName}:`, error);
    throw new Error(`Failed to fetch repository details: ${owner}/${repoName}`);
  }
};