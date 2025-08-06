# 🎬 dumb charades - Movie Generator

A beautiful and interactive web application that generates random movie names from both Hindi and English cinema. Features a timer that automatically hides the movie after a specified duration, perfect for movie night games or random movie selection.

## ✨ Features

- **🎯 Random Movie Generation**: Get random movies from Hindi and English cinema
- **🌍 Language Selection**: Choose between Hindi, English, or both languages
- **📅 Year Filter**: Filter movies by specific release years
- **⏰ Customizable Timer**: Set display duration from 3 to 15 seconds
- **🎨 Beautiful UI**: Modern, responsive design with smooth animations
- **⌨️ Keyboard Shortcuts**: 
  - Press `Spacebar` to generate a movie
  - Press `Escape` to hide the movie quickly
- **📱 Mobile Responsive**: Works perfectly on all devices
- **🎭 Auto-hide**: Movies automatically disappear after the timer expires

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download the project**
   ```bash
   cd dumb charades
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Development Mode
For development with auto-restart:
```bash
npm run dev
```

## 🎮 How to Use

1. **Select Language**: Choose between "All Movies", "Hindi", or "English"
2. **Filter by Year**: Select a specific year or "All Years" to filter movies
3. **Set Timer**: Adjust the slider to set how long the movie should be displayed (3-15 seconds)
4. **Generate Movie**: Click the "Generate Movie" button or press `Spacebar`
5. **Watch Timer**: The movie will automatically hide when the timer reaches zero
6. **Manual Hide**: Click "Hide Movie" or press `Escape` to hide immediately

## 🎬 Movie Collection

The app includes a curated collection of:

### Hindi Movies (50+ titles)
- Classic films like "Sholay", "Mughal-e-Azam", "Mother India"
- Modern hits like "3 Idiots", "Dangal", "Bajrangi Bhaijaan"
- Iconic films from different eras

### English Movies (50+ titles)
- Hollywood classics like "The Godfather", "Pulp Fiction"
- Blockbusters like "Titanic", "Avatar", "The Dark Knight"
- Animated favorites like "Toy Story", "The Lion King"

## 🛠️ Technical Details

- **Backend**: Node.js with Express.js
- **Frontend**: Vanilla JavaScript with modern CSS
- **Styling**: Custom CSS with animations and responsive design
- **Icons**: Font Awesome for beautiful icons
- **Fonts**: Google Fonts (Poppins)

## 📁 Project Structure

```
dumb charades/
├── server.js          # Express server and API endpoints
├── package.json       # Project dependencies and scripts
├── README.md         # This file
└── public/           # Frontend files
    ├── index.html    # Main HTML file
    ├── styles.css    # CSS styles and animations
    └── script.js     # JavaScript functionality
```

## 🎯 API Endpoints

- `GET /` - Serves the main application
- `GET /api/movie?language=both&year=all` - Returns a random movie
  - Query parameters:
    - `language`: "hindi", "english", or "both" (default)
    - `year`: specific year or "all" (default)
- `GET /api/years?language=both` - Returns available years for filtering
  - Query parameters:
    - `language`: "hindi", "english", or "both" (default)

## 🎨 Customization

### Adding More Movies
Edit the `movies` object in `server.js` to add your favorite movies:

```javascript
const movies = {
  hindi: [
    // Add your Hindi movies here
  ],
  english: [
    // Add your English movies here
  ]
};
```

### Changing Timer Range
Modify the timer slider in `public/index.html`:
```html
<input type="range" id="timer" min="3" max="15" value="5" class="timer-slider">
```

### Styling
All styles are in `public/styles.css`. The app uses CSS custom properties and modern features like:
- CSS Grid and Flexbox
- CSS Animations and Transitions
- Backdrop filters
- Gradient backgrounds

## 🤝 Contributing

Feel free to contribute to this project by:
- Adding more movies to the collection
- Improving the UI/UX
- Adding new features
- Fixing bugs

## 📄 License

This project is licensed under the MIT License.

## 🎉 Enjoy!

Have fun discovering amazing movies with dumb charades! Perfect for:
- Movie night games
- Random movie selection
- Learning about different cinema cultures
- Entertainment and fun

---

**Made with ❤️ for movie lovers everywhere** 