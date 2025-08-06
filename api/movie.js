// Movie data with years
const movies = {
  hindi: [
    { title: "Sholay", year: 1975 },
    { title: "Dilwale Dulhania Le Jayenge", year: 1995 },
    { title: "Mughal-e-Azam", year: 1960 },
    { title: "Mother India", year: 1957 },
    { title: "Pyaasa", year: 1957 },
    { title: "Guide", year: 1965 },
    { title: "Awaara", year: 1951 },
    { title: "Do Bigha Zamin", year: 1953 },
    { title: "Madhumati", year: 1958 },
    { title: "Kaagaz Ke Phool", year: 1959 },
    { title: "Pather Panchali", year: 1955 },
    { title: "Satyajit Ray", year: 1955 },
    { title: "Guru Dutt", year: 1957 },
    { title: "Raj Kapoor", year: 1951 },
    { title: "Nargis", year: 1957 },
    { title: "Dilip Kumar", year: 1951 },
    { title: "Dev Anand", year: 1951 },
    { title: "Meena Kumari", year: 1957 },
    { title: "Madhubala", year: 1960 },
    { title: "Nutan", year: 1958 },
    { title: "Amar Akbar Anthony", year: 1977 },
    { title: "Deewar", year: 1975 },
    { title: "Zanjeer", year: 1973 },
    { title: "Shakti", year: 1982 },
    { title: "Trishul", year: 1978 },
    { title: "Don", year: 1978 },
    { title: "Amar Prem", year: 1972 },
    { title: "Bobby", year: 1973 },
    { title: "Roti Kapda Aur Makaan", year: 1974 },
    { title: "Shree 420", year: 1955 },
    { title: "Jis Desh Mein Ganga Behti Hai", year: 1960 },
    { title: "Sangam", year: 1964 },
    { title: "Mera Naam Joker", year: 1970 },
    { title: "Karz", year: 1980 },
    { title: "Qurbani", year: 1980 },
    { title: "Disco Dancer", year: 1982 },
    { title: "Hero", year: 1983 },
    { title: "Tezaab", year: 1988 },
    { title: "Ram Lakhan", year: 1989 },
    { title: "Maine Pyar Kiya", year: 1989 },
    { title: "Hum Aapke Hain Koun..!", year: 1994 },
    { title: "Dil To Pagal Hai", year: 1997 },
    { title: "Kuch Kuch Hota Hai", year: 1998 },
    { title: "Kabhi Khushi Kabhie Gham", year: 2001 },
    { title: "Kal Ho Naa Ho", year: 2003 },
    { title: "Veer-Zaara", year: 2004 },
    { title: "Rang De Basanti", year: 2006 },
    { title: "Lagaan", year: 2001 },
    { title: "Swades", year: 2004 },
    { title: "3 Idiots", year: 2009 },
    { title: "PK", year: 2014 },
    { title: "Dangal", year: 2016 },
    { title: "Bajrangi Bhaijaan", year: 2015 }
  ],
  english: [
    { title: "The Godfather", year: 1972 },
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "Pulp Fiction", year: 1994 },
    { title: "Fight Club", year: 1999 },
    { title: "Forrest Gump", year: 1994 },
    { title: "The Matrix", year: 1999 },
    { title: "Goodfellas", year: 1990 },
    { title: "The Silence of the Lambs", year: 1991 },
    { title: "Schindler's List", year: 1993 },
    { title: "The Green Mile", year: 1999 },
    { title: "The Usual Suspects", year: 1995 },
    { title: "Se7en", year: 1995 },
    { title: "The Departed", year: 2006 },
    { title: "Inception", year: 2010 },
    { title: "The Dark Knight", year: 2008 },
    { title: "Interstellar", year: 2014 },
    { title: "The Prestige", year: 2006 },
    { title: "Memento", year: 2000 },
    { title: "Gladiator", year: 2000 },
    { title: "Braveheart", year: 1995 },
    { title: "Titanic", year: 1997 },
    { title: "Avatar", year: 2009 },
    { title: "Jurassic Park", year: 1993 },
    { title: "E.T. the Extra-Terrestrial", year: 1982 },
    { title: "Jaws", year: 1975 },
    { title: "Star Wars", year: 1977 },
    { title: "The Empire Strikes Back", year: 1980 },
    { title: "Return of the Jedi", year: 1983 },
    { title: "Raiders of the Lost Ark", year: 1981 },
    { title: "Indiana Jones and the Last Crusade", year: 1989 },
    { title: "Back to the Future", year: 1985 },
    { title: "The Terminator", year: 1984 },
    { title: "Terminator 2: Judgment Day", year: 1991 },
    { title: "Aliens", year: 1986 },
    { title: "Predator", year: 1987 },
    { title: "Die Hard", year: 1988 },
    { title: "Lethal Weapon", year: 1987 },
    { title: "The Lion King", year: 1994 },
    { title: "Beauty and the Beast", year: 1991 },
    { title: "Aladdin", year: 1992 },
    { title: "The Little Mermaid", year: 1989 },
    { title: "Toy Story", year: 1995 },
    { title: "Finding Nemo", year: 2003 },
    { title: "Up", year: 2009 },
    { title: "Wall-E", year: 2008 },
    { title: "Inside Out", year: 2015 },
    { title: "Coco", year: 2017 },
    { title: "Spider-Man", year: 2002 },
    { title: "Iron Man", year: 2008 },
    { title: "The Avengers", year: 2012 },
    { title: "Black Panther", year: 2018 },
    { title: "Wonder Woman", year: 2017 }
  ]
};

export default function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const language = req.query.language || 'both';
  const yearFilter = req.query.year || 'all';
  let selectedMovies = [];
  
  if (language === 'hindi') {
    selectedMovies = movies.hindi;
  } else if (language === 'english') {
    selectedMovies = movies.english;
  } else {
    selectedMovies = [...movies.hindi, ...movies.english];
  }
  
  // Apply year filter
  if (yearFilter !== 'all') {
    const year = parseInt(yearFilter);
    selectedMovies = selectedMovies.filter(movie => movie.year === year);
  }
  
  if (selectedMovies.length === 0) {
    return res.status(404).json({
      error: 'No movies found with the selected criteria'
    });
  }
  
  const randomMovie = selectedMovies[Math.floor(Math.random() * selectedMovies.length)];
  const movieLanguage = movies.hindi.includes(randomMovie) ? 'Hindi' : 'English';
  
  res.status(200).json({
    movie: randomMovie.title,
    year: randomMovie.year,
    language: movieLanguage
  });
} 