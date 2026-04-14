# Flask + React Integration App

This project is a full-stack app where:

- Flask provides backend API endpoints.
- React (Vite + TypeScript) provides the frontend UI.
- The React production build is served by Flask from the `frontend/` folder.

## Current App Analysis

### Backend (`App.py`)

- Serves `frontend/index.html` on `/`.
- Exposes `GET /api/data` and returns:
	- `{ "message": "Hello from the API!" }`
- Exposes `POST /api/data` and expects JSON like:
	- `{ "message": "your text" }`
- Returns:
	- `{ "message": "Data received: your text" }`

### Frontend (`react/`)

- Built with React + TypeScript + Vite.
- Uses Axios in `react/src/api.ts`.
- UI has two components:
	- `GetData`: calls backend GET endpoint.
	- `PostData`: sends input to backend POST endpoint.

### Build/Serve Flow

- Vite is configured to build into `../frontend`.
- Flask serves files from `frontend/`.
- This means a React build (`npm run build`) updates what Flask serves in production.

## Project Structure

```text
flask-react/
|- App.py                 # Flask backend
|- requirements.txt       # Python dependencies
|- frontend/              # Built React assets served by Flask
|- react/                 # React source project
|  |- src/
|  |- package.json
|  |- vite.config.ts
```

## Prerequisites

- Python 3.10+
- Node.js 18+
- npm

## Setup

### 1. Python environment

```powershell
python -m venv env
.\env\Scripts\Activate.ps1
pip install -r requirements.txt
```

### 2. Frontend dependencies

```powershell
cd react
npm install
```

## Environment Variable (Important)

Create `react/.env` with:

```env
VITE_API_URL=/api
```

Why this matters:

- Frontend requests are made to `"/data"` in code.
- With `VITE_API_URL=/api`, calls become `/api/data`, which matches Flask routes.

## Run the App

### Production-style (recommended for current setup)

1. Build frontend into `frontend/`:

```powershell
cd react
npm run build
```

2. Run Flask from project root:

```powershell
cd ..
$env:FLASK_APP = "App.py"
flask run
```

3. Open:

- http://127.0.0.1:5000/

## API Reference

### `GET /api/data`

Response:

```json
{
	"message": "Hello from the API!"
}
```

### `POST /api/data`

Request body:

```json
{
	"message": "Hello"
}
```

Response:

```json
{
	"message": "Data received: Hello"
}
```

## Notes and Limitations

- The backend assumes `message` exists in POST payload.
	- Missing `message` may raise a server error.
- No CORS configuration exists.
	- Running React dev server and Flask on different origins will need CORS or Vite proxy configuration.
- `requirements.txt` appears to be encoded as UTF-16 in this workspace.
	- If package installation behaves unexpectedly on another machine, regenerate it in UTF-8.

## Suggested Improvements

- Add payload validation in `POST /api/data`.
- Add error handling with proper status codes.
- Add `.env.example` in `react/`.
- Add a Vite dev proxy or Flask CORS support for local split frontend/backend development.
