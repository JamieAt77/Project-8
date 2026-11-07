# Project-8

This project is a full-stack application built using Vite for the frontend and Express for the backend. The application consists of a simple homepage that displays a list of items retrieved from an API endpoint.

## Project Structure

### Backend
- `backend/server.js`: The main server file that sets up the Express application and API routes.
- `backend/.env.example`: Example environment variables for the backend.

### Frontend
- `frontend/vite.config.js`: Configuration for the Vite build process.
- `frontend/index.html`: The entry point for the frontend application.
- `frontend/src/main.jsx`: The main component that sets up the React application.
- `frontend/src/App.jsx`: The root component.
- `frontend/src/components/ItemList.jsx`: The component that displays the list of items.
- `frontend/src/services/api.js`: The service module that handles API requests.

## API Contract

### Backend
- **GET /api/items**
  - **Response**: `{ items: [...] }`

### Frontend
- The frontend API service `frontend/src/services/api.js` exports a function `fetchItems` that fetches the list of items from the backend API.

## Setup and Running

1. **Backend**
   - Install dependencies: `npm install` in the `backend` directory.
   - Run the server: `node server.js`.

2. **Frontend**
   - Install dependencies: `npm install` in the `frontend` directory.
   - Start the development server: `npm run dev`.

## Environment Variables

- `PORT`: The port on which the backend server listens (default 4000).

## Usage

- The frontend proxies requests to the backend API at `http://localhost:4000/api/items`.

## Notes

- The frontend uses Vite for development and React for the UI.
- The backend uses Express and serves the API endpoint `/api/items`.

## License

This project is licensed under the MIT License.
