# Mouad El Bouanani - Portfolio

This is the source code for my personal portfolio website, built with React, Vite, and Tailwind CSS.

## Features

- **Modern UI:** A clean, modern design with smooth animations and a dark mode.
- **Auto-updating Projects:** A GitHub Actions workflow automatically fetches my latest projects tagged with "portfolio" and updates the website.
- **Responsive Design:** The website is fully responsive and works on all devices.
- **Interactive:** Features like project filtering, click-to-copy, and smooth scrolling make the website interactive and user-friendly.

## Tech Stack

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **SEO:** React Helmet Async

## Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Mouadbouanani/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The website will be available at `http://localhost:5173`.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Lints the project files.
- `npm run preview`: Serves the production build locally.

## GitHub Actions

This project uses a GitHub Actions workflow (`.github/workflows/update-projects.yml`) to automatically update the `public/projects.json` file.

This workflow runs on a schedule, on push to the `main` branch, and can be triggered manually. It fetches repositories from my GitHub profile that are tagged with the `portfolio` topic.