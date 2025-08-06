# 🚀 Vercel Deployment Guide

## Current Structure
```
damsharas/
├── api/
│   ├── movie.js      # /api/movie endpoint
│   ├── years.js      # /api/years endpoint
│   └── test.js       # /api/test endpoint (for testing)
├── public/
│   ├── index.html    # Main application
│   ├── styles.css    # Styles
│   └── script.js     # Frontend logic
├── vercel.json       # Vercel configuration
└── package.json      # Dependencies
```

## Deployment Steps

### 1. Commit and Push
```bash
git add .
git commit -m "Fix Vercel API routes and add year filter"
git push
```

### 2. Test API Endpoints
After deployment, test these URLs:

- **Test API**: `https://your-app.vercel.app/api/test`
- **Movie API**: `https://your-app.vercel.app/api/movie?language=both&year=all`
- **Years API**: `https://your-app.vercel.app/api/years?language=both`

### 3. Expected Responses

**Test API Response:**
```json
{
  "message": "API is working!",
  "timestamp": "2024-01-XX...",
  "method": "GET",
  "url": "/api/test"
}
```

**Movie API Response:**
```json
{
  "movie": "Movie Title",
  "year": 1995,
  "language": "Hindi"
}
```

**Years API Response:**
```json
{
  "years": [1951, 1953, 1955, ...]
}
```

## Troubleshooting

### If you get 404 errors:

1. **Check Vercel Dashboard**: Go to your Vercel project dashboard
2. **Check Functions**: Look for the API functions in the Functions tab
3. **Check Logs**: Look at the Function logs for any errors

### Common Issues:

1. **CORS Errors**: The API includes CORS headers, but check browser console
2. **Function Timeout**: API functions are set to 10 seconds max
3. **Cold Start**: First request might be slow

### Manual Testing:

You can test the API directly in your browser:
- Visit: `https://your-app.vercel.app/api/test`
- Should show JSON response

## Local Development

For local development, use:
```bash
npm start
```

This will run the Express server on port 3001.

## Vercel vs Local

- **Local**: Uses Express server (`server.js`)
- **Vercel**: Uses serverless functions (`api/*.js`)

Both serve the same functionality but with different architectures. 