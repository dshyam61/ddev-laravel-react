# Project Overview

This repository contains a full-stack application with a frontend built using React and a backend built using Laravel.

## Frontend

The frontend is built using React and is located in the `frontend` directory. It uses Webpack and Babel for bundling and transpilation.

### Scripts

* `ddev yarn --cwd /var/www/html/frontend build`: Runs the build script using Webpack
* `ddev yarn --cwd /var/www/html/frontend start`: Starts the development server
* `ddev yarn --cwd /var/www/html/frontend test`: Runs the test suite using Jest
* `ddev yarn --cwd /var/www/html/frontend lint`: Runs ESLint on the codebase

## Backend

The backend is built using Laravel and is located in the `backend` directory. It uses Composer for dependency management.

### Scripts

* `ddev composer install -d /var/www/html/backend`: Runs the composer install in backend
* `ddev composer update -d /var/www/html/backend`: Runs the composer update in backend

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/your-repo-name.git`
2. Install dependencies:
    * Frontend: `ddev yarn --cwd /var/www/html/frontend install && ddev yarn --cwd /var/www/html/frontend build`
    * Backend: `ddev composer install -d /var/www/html/backend`
3. Start the development servers:
    * Frontend: `cd frontend && npm start`

## Contributing

Contributions are welcome! Please submit a pull request with a clear description of the changes made.

## License

This project is licensed under the ISC License.

## Acknowledgments

* Laravel: https://laravel.com/
* React: https://reactjs.org/
