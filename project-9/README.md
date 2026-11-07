# Project-9 Documentation

## Overview
This project is a simple full-stack application built using Vite for the frontend and Express for the backend. The application allows users to view a list of items retrieved from the backend API.

## Project Structure
- **Backend**: Contains the Express server logic.
- **Frontend**: Contains the Vite React application.

## Backend
### Dependencies
- `express`: For setting up the server.

### Directory Structure
- `server.js`: Entry point for the Express server.
- `.env.example`: Example environment variables file.

### Running the Backend
1. Set up the environment variables in `.env`.
2. Install dependencies: `npm install`.
3. Start the server: `node server.js` (or use `PORT` to specify a different port).

## Frontend
### Dependencies
- `react`: For building the React application.
- `react-dom`: For rendering React components.
- `@vitejs/plugin-react`: Vite plugin for React.
- `vite`: For building and serving the frontend.

### Directory Structure
- `vite.config.js`: Vite configuration file.
- `src/main.jsx`: Entry point for the React application.
- `src/App.jsx`: Main application component.
- `src/components/ItemList.jsx`: Component to display the list of items.
- `src/components/Item.jsx`: Component to display individual items.
- `src/services/api.js`: Service file to fetch items from the backend.

### Running the Frontend
1. Install dependencies: `npm install`.
2. Start the development server: `npm run dev`.

## API Endpoints
### Backend
- **GET /api/items**
  - **Response**: `{ items: [...] }`

### Frontend
- **fetchItems()**: Fetches items from the backend API.

## Usage
1. Start the backend server.
2. Start the frontend development server.
3. Open the application in the browser.

## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License
This project is licensed under the MIT License.
