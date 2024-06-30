# Files Manager

## Overview

The **Files Manager** project is a simple platform that allows users to upload, view, and manage files. It serves as a comprehensive exercise in back-end development, combining authentication, file handling, and background processing with various technologies such as Node.js, Express, MongoDB, Redis, and Kue.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [File Operations](#file-operations)
  - [Thumbnails](#thumbnails)
- [API Documentation](#api-documentation)
- [Background Processing](#background-processing)
- [Running Tests](#running-tests)
- [Contributors](#contributors)

## Features

- **User Authentication:** Token-based authentication for securing the API.
- **File Management:** Upload, list, and view files.
- **Permission Management:** Control file access permissions.
- **Thumbnail Generation:** Automatic generation of thumbnails for uploaded images.
- **Background Processing:** Efficient handling of tasks such as thumbnail generation using Kue.

## Technologies

This project is built with the following technologies:

- **Node.js**: JavaScript runtime for server-side applications.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing file metadata.
- **Redis**: In-memory data store for caching and session management.
- **Kue**: Priority job queue backed by Redis for background processing.
- **Mocha**: Test framework for Node.js applications.
- **Nodemon**: Utility that automatically restarts the server on file changes.
- **Babel**: JavaScript compiler for using ES6/ES7 features.
- **ESLint**: Tool for identifying and reporting on patterns in JavaScript.

## Project Structure


- **src/controllers**: Handles the logic for various routes.
- **src/routes**: Defines the endpoints and their respective controllers.
- **src/models**: Contains MongoDB schemas and data access logic.
- **src/utils**: Utility functions and helpers.
- **src/middleware**: Middleware for authentication and error handling.
- **src/workers**: Background processing tasks and job definitions.
- **tests**: Unit and integration tests.

## Setup and Installation

### Prerequisites

- **Node.js** (version 12.x.x)
- **MongoDB** (running locally or remotely)
- **Redis** (running locally or remotely)

### Steps

