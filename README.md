<h1 align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
  <br>plantation-vegetation-web-app
</h1>
<h4 align="center">A React web application for promoting plantation and vegetation initiatives globally.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<p align="center">
  <img src="https://img.shields.io/badge/Framework-React-blue" alt="Framework: React">
  <img src="https://img.shields.io/badge/Frontend-Javascript,_Html,_Css-red" alt="Frontend: Javascript, Html, Css">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend: Node.js">
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="LLMs: Custom, Gemini, OpenAI">
</p>
<p align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/plantation-vegetation-web-app?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/plantation-vegetation-web-app?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/plantation-vegetation-web-app?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</p>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository contains the source code for "A Greener Future", a web application designed to empower individuals, communities, and organizations to actively participate in plantation and vegetation efforts globally. The application provides tools for:

- Plantation Planning: Planning, scheduling, and tracking plantation projects.
- Resource Management: Connecting users with funding opportunities, seed suppliers, and expert consultants.
- Community Engagement: Fostering collaboration through forums, project-specific groups, and expert networks.
- Knowledge Sharing:  Providing comprehensive information on plant species, planting techniques, and environmental benefits.
- Environmental Awareness: Raising awareness about the importance of vegetation for sustainability.

## 📦 Features

|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| 🌱 | Plant Database   | A searchable database featuring a wide range of plant species, categorized by climate, region, and ecological benefits.  |
| 🌳 | Plant Profiles  | Detailed profiles for each species, including planting techniques, care requirements, and environmental benefits.     |
| 🗺️ | Interactive Maps  | Real-time maps showcasing ongoing plantation projects worldwide, highlighting project locations and progress.           |
| 👥 | User Profiles   | Users can create profiles, personalize their interests, and connect with other members based on location and expertise.|
| 💬 | Forums & Groups  | Interactive forums and project-specific groups for knowledge sharing, discussions, and collaborations.           |
| 🔨 | Project Management| Tools for planning, tracking, and collaborating on plantation projects, including task management and progress monitoring.|
| 💰 | Funding Opportunities| A curated list of government schemes, NGO grants, and corporate social responsibility programs supporting plantation initiatives. |
| 🎓 | Educational Content | Engaging educational modules on the importance of trees, deforestation, and reforestation, including videos, quizzes, and case studies.  |
| 🤖 | AI Plant Identification | An image recognition feature using AI to help users identify plant species in the field.                           |
| 🌍 | Global Impact     | The platform aims to make a significant contribution to global environmental efforts by promoting sustainable practices and increasing environmental awareness.  |

## 📂 Structure

```
plantation-vegetation-web-app/
├── public
│   ├── favicon.ico
│   └── logo.png
├── .env
├── src
│   ├── components
│   │   ├── PlantCard.js
│   │   ├── PlantInfo.js
│   │   ├── ProjectCard.js
│   │   ├── ProjectDetails.js
│   │   ├── ProjectList.js
│   │   ├── UserCard.js
│   │   ├── UserList.js
│   │   ├── UserProfile.js
│   │   ├── Forum.js
│   │   ├── Map.js
│   │   ├── Navigation.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── LandingPage.js
│   │   ├── ProjectForm.js
│   │   ├── ProjectManagement.js
│   │   ├── ResourceDirectory.js
│   │   ├── FundingOpportunities.js
│   │   ├── EducationalContent.js
│   │   ├── AboutUs.js
│   │   ├── ContactUs.js
│   │   └── ErrorPage.js
│   ├── pages
│   │   ├── index.js
│   │   ├── plant-database.js
│   │   ├── project.js
│   │   ├── projects.js
│   │   ├── user.js
│   │   ├── users.js
│   │   ├── forum.js
│   │   ├── map.js
│   │   ├── [projectId].js
│   │   ├── [userId].js
│   │   ├── login.js
│   │   ├── signup.js
│   │   ├── resources.js
│   │   ├── funding.js
│   │   ├── education.js
│   │   ├── about.js
│   │   ├── contact.js
│   │   └── api
│   │       ├── species.js
│   │       ├── projects.js
│   │       ├── users.js
│   │       ├── forum.js
│   │       ├── resources.js
│   │       └── funding.js
│   ├── services
│   │   ├── plantService.js
│   │   ├── projectService.js
│   │   ├── userService.js
│   │   ├── forumService.js
│   │   ├── resourceService.js
│   │   ├── fundingService.js
│   │   ├── mapService.js
│   │   └── authService.js
│   ├── utils
│   │   ├── constants.js
│   │   ├── helperFunctions.js
│   │   ├── validation.js
│   │   ├── errorHandling.js
│   │   └── api.js
│   ├── styles
│   │   ├── global.css
│   │   ├── components.css
│   │   ├── pages.css
│   │   ├── theme.js
│   │   └── index.js
│   └── data
│       ├── plantData.json
│       ├── projectData.json
│       ├── userData.json
│       ├── forumData.json
│       ├── resourceData.json
│       └── fundingData.json
├── package.json
└── README.md

```

  ## 💻 Installation
  ### 🔧 Prerequisites
  - Node.js (LTS version recommended)
  - npm or yarn
  - A code editor (VS Code recommended)

  ### 🚀 Setup Instructions
  1. Clone the repository:
     ```bash
     git clone https://github.com/coslynx/plantation-vegetation-web-app.git
     ```
  2. Navigate to the project directory:
     ```bash
     cd plantation-vegetation-web-app
     ```
  3. Install dependencies:
     ```bash
     npm install
     ```

  ## 🏗️ Usage
  ### 🏃‍♂️ Running the Project
  1. Start the development server:
     ```bash
     npm run dev
     ```
  2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

  ## 🌐 Hosting
  ### 🚀 Deployment Instructions
  1. Build the application:
     ```bash
     npm run build
     ```
  2. Deploy the built application to your preferred hosting platform.

  ### 🔑 Environment Variables
  - `NEXT_PUBLIC_API_URL`: The base URL of your backend API.

  ## 📜 API Documentation
  ### 🔍 Endpoints
  - `/api/plants`: Retrieves a list of plants.
  - `/api/plants/:id`: Retrieves a specific plant by ID.
  - `/api/projects`: Retrieves a list of projects.
  - `/api/projects/:id`: Retrieves a specific project by ID.
  - `/api/users`: Retrieves a list of users.
  - `/api/users/:id`: Retrieves a specific user by ID.
  - `/api/forums`: Retrieves a list of forums.
  - `/api/forums/:id`: Retrieves a specific forum by ID.

  ### 🔒 Authentication
  - The application uses [Auth0](https://auth0.com/) for user authentication and authorization.
  -  You will need to configure Auth0 with your application and set up the appropriate API permissions.

  ## 📜 License
  This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

  ## 👥 Authors
  - Author Name - [Spectra.codes](https://spectra.codes)
  - Creator Name - [DRIX10](https://github.com/Drix10)

  <p align="center">
    <h1 align="center">🌐 Spectra.Codes</h1>
  </p>
  <p align="center">
    <em>Why only generate Code? When you can generate the whole Repository!</em>
  </p>
  <p align="center">
	<img src="https://img.shields.io/badge/Developer-Drix10-red" alt="">
	<img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="">
	<img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
	<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="">
  <p>