# CustomApi

Welcome to my API! This API provides a simple and flexible endpoint to retrieve information about Pokemon stored in a MongoDB server.

## Installation

To use this API, you'll need to follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pokemon-api.git
   ```

2. Install dependencies:

   ```bash
   cd pokemon-api
   npm install
   ```

3. Set up your MongoDB server and configure the connection in the `config.js` file:

   ```javascript
   // config.js

   module.exports = {
     mongoURI: 'your-mongodb-connection-string',
   };
   ```

4. Run the application:

   ```bash
   npm start
   ```

   The API will be accessible at `http://localhost:3000`.

## Usage

The API provides an endpoint `/api/pokemons` to fetch Pokemon data based on specified query parameters. Here's an example of how to use it:

```bash
curl -X GET 'http://localhost:3000/api/pokemons?name=charizard&type=fire&sort=name&select=name,number'
```

### Query Parameters

- `name`: Search Pokemon by name (case-insensitive).
- `number`: Search Pokemon by number.
- `type`: Filter Pokemon by type.
- `sort`: Sort the results. Use commas to separate fields (e.g., `name, number`).
- `select`: Select specific fields. Use commas to separate fields (e.g., `name, number`).
- `page`: Specify the page number for paginated results.
- `limit`: Specify the number of results per page.

## Example Endpoint

### Get All Pokemons

```bash
GET /api/pokemons
```

This endpoint retrieves all Pokemon data based on the provided query parameters.

### Example Request

```bash
curl -X GET 'http://localhost:3000/api/pokemons?name=charizard&type=fire&sort=name&select=name,number'
```

### Example Response

```json
[
  {
    "name": "Charizard",
    "number": 6
  },
  // ... other Pokemon data
]
```

Feel free to explore and customize the API according to your needs! If you encounter any issues or have suggestions, please open an issue on this repository.
