class MovieGenerator {
    constructor() {
        this.currentLanguage = 'both';
        this.currentYear = 'all';
        this.timerDuration = 5;
        this.isTimerRunning = false;
        this.timerInterval = null;
        this.currentMovie = null;
        
        this.initializeElements();
        this.bindEvents();
        this.updateTimerDisplay();
        this.loadYears();
    }

    initializeElements() {
        this.movieCard = document.getElementById('movieCard');
        this.movieTitle = document.getElementById('movieTitle');
        this.movieLanguage = document.getElementById('movieLanguage');
        this.movieYear = document.getElementById('movieYear');
        this.generateBtn = document.getElementById('generateBtn');
        this.hideBtn = document.getElementById('hideBtn');
        this.timerDisplay = document.getElementById('timerDisplay');
        this.timerCountdown = document.getElementById('timerCountdown');
        this.timerSlider = document.getElementById('timer');
        this.timerValue = document.getElementById('timer-value');
        this.languageButtons = document.querySelectorAll('.lang-btn');
        this.yearSelect = document.getElementById('yearSelect');
    }

    bindEvents() {
        // Generate button click
        this.generateBtn.addEventListener('click', () => this.generateMovie());
        
        // Hide button click
        this.hideBtn.addEventListener('click', () => this.hideMovie());
        
        // Movie card click (also generates movie)
        this.movieCard.addEventListener('click', () => this.generateMovie());
        
        // Timer slider change
        this.timerSlider.addEventListener('input', (e) => {
            this.timerDuration = parseInt(e.target.value);
            this.updateTimerDisplay();
        });
        
        // Language button clicks
        this.languageButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setLanguage(e.target.dataset.language);
            });
        });
        
        // Year select change
        this.yearSelect.addEventListener('change', (e) => {
            this.currentYear = e.target.value;
        });
    }

    setLanguage(language) {
        this.currentLanguage = language;
        
        // Update active button
        this.languageButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.language === language) {
                btn.classList.add('active');
            }
        });
        
        // Reload years for the new language
        this.loadYears();
    }

    async loadYears() {
        try {
            const response = await fetch(`/api/years?language=${this.currentLanguage}`);
            const data = await response.json();
            
            // Clear existing options except "All Years"
            this.yearSelect.innerHTML = '<option value="all">All Years</option>';
            
            // Add year options
            data.years.forEach(year => {
                const option = document.createElement('option');
                option.value = year;
                option.textContent = year;
                this.yearSelect.appendChild(option);
            });
            
            // Reset year selection
            this.currentYear = 'all';
            this.yearSelect.value = 'all';
        } catch (error) {
            console.error('Error loading years:', error);
        }
    }

    updateTimerDisplay() {
        this.timerValue.textContent = `${this.timerDuration}s`;
        this.timerCountdown.textContent = this.timerDuration;
    }

    async generateMovie() {
        try {
            // Show loading state
            this.generateBtn.disabled = true;
            this.generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';
            
            // Fetch movie from API
            const response = await fetch(`/api/movie?language=${this.currentLanguage}&year=${this.currentYear}`);
            const data = await response.json();
            
            if (response.ok) {
                this.displayMovie(data.movie, data.language, data.year);
                this.startTimer();
            } else {
                throw new Error('Failed to fetch movie');
            }
        } catch (error) {
            console.error('Error generating movie:', error);
            this.showError('Failed to generate movie. Please try again.');
        } finally {
            // Reset button state
            this.generateBtn.disabled = false;
            this.generateBtn.innerHTML = '<i class="fas fa-random"></i> Generate Movie';
        }
    }

    displayMovie(movieName, language, year) {
        this.currentMovie = { name: movieName, language: language, year: year };
        
        // Animate movie display
        this.movieCard.style.opacity = '0';
        this.movieCard.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            this.movieTitle.textContent = movieName;
            this.movieLanguage.textContent = language;
            this.movieYear.textContent = year ? `Released in ${year}` : '';
            
            this.movieCard.style.opacity = '1';
            this.movieCard.style.transform = 'scale(1)';
            
            // Show hide button
            this.hideBtn.style.display = 'flex';
            this.generateBtn.style.display = 'none';
            
            // Add slide-in animation
            this.movieCard.style.animation = 'slideIn 0.5s ease-out';
        }, 200);
    }

    startTimer() {
        if (this.isTimerRunning) {
            clearInterval(this.timerInterval);
        }
        
        this.isTimerRunning = true;
        let timeLeft = this.timerDuration;
        
        // Show timer display
        this.timerDisplay.classList.add('visible');
        this.timerCountdown.textContent = timeLeft;
        
        this.timerInterval = setInterval(() => {
            timeLeft--;
            this.timerCountdown.textContent = timeLeft;
            
            if (timeLeft <= 0) {
                this.hideMovie();
            }
        }, 1000);
    }

    hideMovie() {
        // Stop timer
        if (this.isTimerRunning) {
            clearInterval(this.timerInterval);
            this.isTimerRunning = false;
        }
        
        // Hide timer display
        this.timerDisplay.classList.remove('visible');
        
        // Animate hiding
        this.movieCard.classList.add('hidden');
        
        setTimeout(() => {
            // Reset movie display
            this.movieTitle.textContent = 'Click to Generate Movie';
            this.movieLanguage.textContent = '';
            this.movieYear.textContent = '';
            this.currentMovie = null;
            
            // Remove hidden class
            this.movieCard.classList.remove('hidden');
            
            // Show generate button, hide hide button
            this.generateBtn.style.display = 'flex';
            this.hideBtn.style.display = 'none';
        }, 300);
    }

    showError(message) {
        // Create error notification
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-notification';
        errorDiv.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <span>${message}</span>
        `;
        
        // Add styles
        errorDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
        `;
        
        document.body.appendChild(errorDiv);
        
        // Remove after 3 seconds
        setTimeout(() => {
            errorDiv.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                if (errorDiv.parentNode) {
                    errorDiv.parentNode.removeChild(errorDiv);
                }
            }, 300);
        }, 3000);
    }
}

// Add slideOut animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;
document.head.appendChild(style);

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new MovieGenerator();
    
    // Add some fun interactions
    const movieCard = document.getElementById('movieCard');
    
    // Add hover sound effect (optional)
    movieCard.addEventListener('mouseenter', () => {
        movieCard.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    movieCard.addEventListener('mouseleave', () => {
        movieCard.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && !e.target.matches('input, textarea')) {
            e.preventDefault();
            document.getElementById('generateBtn').click();
        }
        
        if (e.code === 'Escape') {
            document.getElementById('hideBtn').click();
        }
    });
    
    // Add welcome message
    setTimeout(() => {
        const welcomeDiv = document.createElement('div');
        welcomeDiv.className = 'welcome-message';
        welcomeDiv.innerHTML = `
            <div style="
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: rgba(255, 255, 255, 0.95);
                padding: 30px;
                border-radius: 20px;
                text-align: center;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                animation: fadeInUp 0.5s ease-out;
            ">
                <h3 style="color: #333; margin-bottom: 15px;">🎬 Welcome to dumb charades!</h3>
                <p style="color: #666; margin-bottom: 20px;">
                    Click the "Generate Movie" button or press <strong>Spacebar</strong> to get a random movie.<br>
                    Press <strong>Escape</strong> to hide the movie quickly.
                </p>
                <button onclick="this.parentElement.parentElement.remove()" style="
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 25px;
                    cursor: pointer;
                    font-weight: 500;
                ">Got it!</button>
            </div>
        `;
        document.body.appendChild(welcomeDiv);
    }, 1000);
}); 