const axios = require('axios');
const fs = require('fs');
const path = require('path');

const GITHUB_USERNAME = 'Mouadbouanani';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const PORTFOLIO_TOPIC = 'Portfolio';

// const OUTPUT_PATH = `${import.meta.env.BASE_URL}public/projects.json`;
const OUTPUT_PATH = path.join(__dirname, 'public', 'projects.json');

// const OUTPUT_PATH = './public/projects.json';


const getProjects = async () => {
  try {
    const { data: repos } = await axios.get(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    const portfolioProjects = repos
      .filter(repo => repo.topics.includes(PORTFOLIO_TOPIC))
      .map(repo => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        topics: repo.topics,
      }));

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(portfolioProjects, null, 2));
    console.log(`Successfully wrote ${portfolioProjects.length} projects to ${OUTPUT_PATH}`);

  } catch (error) {
    console.error('Error fetching projects:', error.message);
    process.exit(1);
  }
};

getProjects();
