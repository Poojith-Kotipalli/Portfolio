# Portfolio Clone

## Fresh-Clone Setup and Run Instructions

After you push your portfolio-clone repo to GitHub, someone (or you on a new laptop) would:

### 1. Clone the Repository

```bash
git clone https://github.com/<your-username>/portfolio-clone.git
cd portfolio-clone
```

### 2. Backend Setup

Navigate to the server directory and install dependencies:

```bash
cd server
npm install
```

Create a file named `.env` inside `server/` with at least:

```ini
PORT=5000
MONGO_URI=<your MongoDB connection string>
```

> **Note:** Replace `<your MongoDB connection string>` with your own (e.g., `mongodb://127.0.0.1:27017/portfolio` or your Atlas URI).

Start the Backend:

```bash
# In the same server/ folder:
npm run dev
```

You should see output like:

```
✅ Connected to MongoDB
🚀 Server listening on port 5000
```

### 3. Frontend Setup

Open a new terminal tab and navigate to the client directory:

```bash
cd ../client
npm install
```

> **Note:** You do not need a `.env` here unless you have added environment variables for the frontend. The Vite proxy is already configured.

Start the Frontend:

```bash
npm run dev
```

Vite will start and show, for example:

```
VITE v6.x.x ready in 200 ms

➜ Local: http://localhost:5173/
```

### 4. Access the Application

Open your browser to [http://localhost:5173](http://localhost:5173) to see the site.

## Project Structure

```
portfolio-clone/
├── client/          # Frontend (Vite + React)
├── server/          # Backend (Node.js + Express + MongoDB)
└── README.md        # This file
```

## Requirements

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

## Troubleshooting

- If the backend fails to connect to MongoDB, ensure your MongoDB service is running or your Atlas connection string is correct
- If the frontend can't connect to the backend, verify the proxy configuration in `client/vite.config.js`
- Make sure both frontend and backend are running simultaneously in separate terminal windows