# Tidy Tasks

Tidy Tasks is a task management application that helps new users schedule tasks based on their workflow and available time slots. This app uses React with TypeScript for the frontend, a Node.js/Express server for the backend, and PostgreSQL with Drizzle ORM for the database. It integrates with the Google Calendar API and the Gemini API to generate appropriate times for tasks automatically.

## Features

- User-friendly interface for managing tasks
- Automatic scheduling based on user workflow and calendar availability
- Integration with Google Calendar API and Gemini API
- Secure user authentication and data management

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [PostgreSQL](https://www.postgresql.org/) (v12.x or higher)
- [Google Developer Account](https://developers.google.com/) for Google Calendar API
- [Gemini API Access](https://gemini.com/)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/ashfaqjani916/task-tide
    cd tidy-tasks
    ```

2. **Backend Setup:**

    - Navigate to the `server` directory and install dependencies:
        ```bash
        cd server
        npm install
        ```

    - Create a `.env` file in the `server` directory and add your environment variables:
        ```env
        PORT=5000
        DATABASE_URL=your_postgres_database_url
        GOOGLE_CLIENT_ID=your_google_client_id
        GOOGLE_CLIENT_SECRET=your_google_client_secret
        GEMINI_API_KEY=your_gemini_api_key
        ```

    - Run database migrations (adjust based on Drizzle ORM setup):
        ```bash
        npm run migrate
        ```

    - Start the backend server:
        ```bash
        npm start
        ```

3. **Frontend Setup:**

    - Navigate to the `frontend` directory and install dependencies:
        ```bash
        cd ../frontend
        npm install
        ```

    - Create a `.env` file in the `frontend` directory and add your environment variables:
        ```env
        REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
        REACT_APP_API_URL=http://localhost:5000
        ```

    - Start the frontend development server:
        ```bash
        npm start
        ```

### Usage

1. **Register/Login:**
    - Users can register or log in using their Google accounts.

2. **Answer Workflow Questions:**
    - New users will be prompted to answer 9 questions to understand their workflow.

3. **Integrate Google Calendar:**
    - Connect your Google Calendar to fetch available time slots.

4. **Task Scheduling:**
    - Based on the answers and available time slots, Tidy Tasks will automatically schedule tasks using the Gemini API.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For any questions or inquiries, please contact [ashfaqjani916@gmail.com](mailto:yourname@yourdomain.com).

### Repository Structure

- `frontend`: React frontend application.
- `server`: Node.js/Express backend application.


Make sure to replace placeholders like `yourusername`, `your_postgres_database_url`, `your_google_client_id`, `your_google_client_secret`, and `your_gemini_api_key` with your actual configuration details.
