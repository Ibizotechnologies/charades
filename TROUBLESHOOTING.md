# 🔧 Troubleshooting 404 Errors on Vercel

## Quick Fix Steps

### 1. **Deploy the Latest Changes**
```bash
git add .
git commit -m "Fix Vercel API deployment"
git push
```

### 2. **Test the API Endpoints**
After deployment, test these URLs in your browser:

- **Test API**: `https://your-app.vercel.app/api/test`
- **Movie API**: `https://your-app.vercel.app/api/movie?language=both&year=all`
- **Years API**: `https://your-app.vercel.app/api/years?language=both`

### 3. **Check Vercel Dashboard**
1. Go to your Vercel project dashboard
2. Click on "Functions" tab
3. Look for these functions:
   - `api/movie.js`
   - `api/years.js`
   - `api/test.js`

### 4. **Check Function Logs**
1. In Vercel dashboard, click on a function
2. Check the "Logs" tab for any errors
3. Look for console.log messages we added

## Common Issues & Solutions

### Issue 1: Functions Not Deployed
**Symptoms**: 404 errors on all API endpoints

**Solution**:
- Make sure `api/` folder exists in your repository
- Check that `vercel.json` is in the root directory
- Redeploy by pushing changes

### Issue 2: CORS Errors
**Symptoms**: API works but frontend can't access it

**Solution**:
- API already includes CORS headers
- Check browser console for CORS errors
- Try accessing API directly in browser

### Issue 3: Function Timeout
**Symptoms**: API works sometimes but fails on complex requests

**Solution**:
- Functions are set to 10 seconds max
- Should be sufficient for this app

### Issue 4: Cold Start Delays
**Symptoms**: First request is slow

**Solution**:
- This is normal for serverless functions
- Subsequent requests will be faster

## Debugging Steps

### Step 1: Test Basic API
Visit: `https://your-app.vercel.app/api/test`

Expected response:
```json
{
  "message": "API is working!",
  "timestamp": "2024-01-XX...",
  "method": "GET",
  "url": "/api/test"
}
```

### Step 2: Test Movie API
Visit: `https://your-app.vercel.app/api/movie?language=both&year=all`

Expected response:
```json
{
  "movie": "Movie Title",
  "year": 1995,
  "language": "Hindi"
}
```

### Step 3: Test Years API
Visit: `https://your-app.vercel.app/api/years?language=both`

Expected response:
```json
{
  "years": [1951, 1953, 1955, ...]
}
```

## File Structure Check

Make sure your repository has this structure:
```
damsharas/
├── api/
│   ├── movie.js      ✅
│   ├── years.js      ✅
│   └── test.js       ✅
├── public/
│   ├── index.html    ✅
│   ├── styles.css    ✅
│   └── script.js     ✅
├── vercel.json       ✅
└── package.json      ✅
```

## Alternative Solutions

### If APIs still don't work:

1. **Try a different Vercel project**:
   - Create a new Vercel project
   - Connect it to your repository
   - Deploy fresh

2. **Use Netlify instead**:
   - Netlify also supports serverless functions
   - Create `netlify/functions/` folder
   - Rename functions to `.js` files

3. **Use a different hosting service**:
   - Railway
   - Render
   - Heroku

## Contact Support

If none of the above works:
1. Check Vercel status page
2. Contact Vercel support
3. Share your repository URL and error logs 