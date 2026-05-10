# Plantshop

A React-based plant shop application that allows users to browse, search, and manage plant inventory. This application demonstrates core React concepts including state management, hooks (useState, useEffect), and API integration.

## Features

- **Display All Plants**: Automatically fetches and displays all plants from the backend on page load
- **Add New Plants**: Users can submit a form to add new plants to the inventory, which persists to the backend
- **Mark as Out of Stock**: Users can toggle plants to mark them as out of stock (non-persisting)
- **Search Functionality**: Filter plants by name with real-time search input

## Technology Stack

- **React 18.3.1**: UI library for building interactive components
- **Vite**: Fast build tool for modern web development
- **JSON Server**: Mock backend API for plant data storage
- **Vitest**: Testing framework for unit and integration tests

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-hooks-plantshop-cr-vite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Setup

Before running the application, you need to start both the backend server and the development server:

1. **Start the backend server** (in one terminal):
   ```bash
   npm run server
   ```
   This runs the JSON Server on port 6001. Verify it's working by visiting: `http://localhost:6001/plants`

2. **Start the development server** (in another terminal):
   ```bash
   npm run dev
   ```
   This runs the Vite dev server. Open your browser and navigate to the provided URL.

## Project Structure

```
src/
├── components/
│   ├── App.jsx              # Main application component with state management
│   ├── Header.jsx           # Header with search input
│   ├── NewPlantForm.jsx     # Form for adding new plants
│   ├── PlantCard.jsx        # Individual plant card component
│   ├── PlantList.jsx        # List of plant cards
│   ├── PlantPage.jsx        # (Currently unused)
│   └── Search.jsx           # (Currently unused)
├── __tests__/
│   ├── App.test.jsx         # Test file
│   ├── setup.jsx            # Test configuration and mock data
│   └── test_suites/         # Individual test suites for each feature
├── main.jsx                 # Application entry point
└── index.css                # Global styling
db.json                       # Mock backend database
```

## API Endpoints

The application communicates with a JSON Server backend running on `http://localhost:6001`:

### GET /plants
Fetches all plants from the database.

**Response:**
```json
[
  {
    "id": 1,
    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99,
    "inStock": true
  }
]
```

### POST /plants
Adds a new plant to the database.

**Request Body:**
```json
{
  "name": "New Plant",
  "image": "./images/plant.jpg",
  "price": 19.99
}
```

## How It Works

### Data Fetching
- The `App` component uses the `useEffect` hook to fetch plants from the backend when the component mounts
- This happens only once due to the empty dependency array

### Adding Plants
- The `NewPlantForm` component captures user input and sends a POST request to the backend
- Upon successful response, the new plant is added to the application state

### Out of Stock Status
- Users can click the "In Stock" button to mark a plant as out of stock
- This updates the local state only (non-persisting) - the button changes to "Out of Stock" and becomes disabled
- To persist this change to the backend, additional implementation would be needed

### Search Filtering
- The search input in the `Header` component updates the application state
- The filtered plants list is computed using the `filter()` method with case-insensitive matching

## Running Tests

Run the test suite to verify all functionality is working:

```bash
npm test
```

The test suite verifies:
1. ✅ All plants render on page load
2. ✅ New plants can be added via form submission
3. ✅ Plants can be marked as out of stock
4. ✅ Search filtering works correctly

## Code Quality

The codebase includes:
- Clear comments explaining the purpose and logic of each component
- Descriptive variable and function names for better code readability
- Proper React patterns and hooks usage
- Comprehensive test coverage

## Future Enhancements

- Persist out of stock status to the backend
- Add plant details/edit functionality
- Implement pagination for large plant lists
- Add plant categories or filtering options
- Implement user authentication for inventory management

## License

This project is part of a React learning curriculum.

    "name": "Aloe",
    "image": "./images/aloe.jpg",
    "price": 15.99
  },
  {
    "id": 2,
    "name": "ZZ Plant",
    "image": "./images/zz-plant.jpg",
    "price": 25.98
  }
]
```

#### POST `/plants`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "name": "string",
  "image": "string",
  "price": number
}
```

Example Response:

```json
{
  "id": 1,
  "name": "Aloe",
  "image": "./images/aloe.jpg",
  "price": 15.99
}
```
