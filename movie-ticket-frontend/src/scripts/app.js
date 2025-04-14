// Movie data
const featuredMovies = [
    {
        image: "../images/p-2.jpeg",
        title: "Pirates of the Caribbean",
        genre: "Action | Adventure",
    },
    {
        image: "../images/pic-4.jpeg",
        title: "Rick and Morty",
        genre: "Sci-Fi | Thriller",
    },
    {
        image: "../images/pic-11.jpeg",
        title: "Annente",
        genre: "Horror | Mystery",
    },
    {
        image: "../images/pic-8.jpeg",
        title: "Wanda Vision",
        genre: "Action | Sci-Fi",
    },
];

// Render featured movies
const movieGrid = document.getElementById("featuredMovies");

featuredMovies.forEach((movie) => {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <img src="${movie.image}" alt="${movie.title}" />
      <h3>${movie.title}</h3>
      <span>${movie.genre}</span>
    `;
    movieGrid.appendChild(card);
});

// Logout function
function logout() {
    sessionStorage.removeItem("loggedInUser");
    alert("You have been logged out.");
    window.location.href = "./pages/login.html";
}

// Search function
function searchMovie(event) {
    event.preventDefault();
    const query = document.getElementById("searchQuery").value;
    console.log(`Searching for: ${query}`);
    // Optional: Redirect to search results page
    alert(`Search for: ${query}`);
}
