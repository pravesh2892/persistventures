# React News Portal
![image](https://github.com/pravesh2892/persistventures/assets/112716122/3ff8f8b3-847f-486f-bb1a-b0fdae2b8846)
![image](https://github.com/pravesh2892/persistventures/assets/112716122/10f26687-a8a6-44a6-b870-01611f5aaf03)

## Overview

The React News Portal is a responsive web application built with React.js that allows users to browse and read news articles from various categories. It fetches news data from a public API and provides features like category filtering, pagination, search functionality, favorites management, and a dark mode toggle.

## Features

- **News Article List**: Displays a list of news articles with titles, images, and summaries.
- **Category Filtering**: Users can filter articles by selecting different categories like -General, Business, Technology, Entertainment,Favorites .
 ![image](https://github.com/pravesh2892/persistventures/assets/112716122/da3e0538-690c-4511-ba9f-6477ff2dc50c)

- **Pagination**: Navigation through multiple pages of articles using pagination controls.
- **Detailed Article View**: Clicking on an article summary opens a detailed view with the full article content and any associated media.
  ![image](https://github.com/pravesh2892/persistventures/assets/112716122/08cb33a2-b315-4daa-be3b-473edba1d6d6)

- **Search Functionality**: Users can search for articles by keywords.
- **Favorites Management**: Users can add articles to their favorites list, which persists between sessions using local storage.
- **Dark Mode Toggle**: Users can switch between light and dark mode.
- **Loading and Error**: This application handles loading states and errors during API calls.

  ![image](https://github.com/pravesh2892/persistventures/assets/112716122/596d72a1-fd1f-4e97-98b3-971e09a30556)


## Technologies Used

- React.js
- React Router
- Redux Toolkit
- Fetch API (for API calls)
- NewsAPI (Public News API)
- CSS/CSS  (for styling)
- Local Storage (for storing favorites)

## Project Structure
- `src/components`: React components (Navbar.js, ArticleDetails.js, FavoritesList.js, Logo.js, NewsList.js).
- `src/utils`: Redux files(store.js, newsSlice.js, favoritesSlice.js, themeSlice.js).
- `src/Assets`: Store required images.
- `src/App.js`: Main application component.
- `src/App.css`: CSS module  for styling components.
  
### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. Clone the repository:
2. Navigate to the project directory:
3. Install dependencies:
4. Obtain an API key from [NewsAPI](https://newsapi.org/) and replace the placeholder in the appropriate file or environment variable.

