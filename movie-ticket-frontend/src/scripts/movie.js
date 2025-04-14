// ✅ Scroll Progress Bar
window.addEventListener("scroll", function () {
    const progress = document.getElementById("progress");
    const progressValue = document.getElementById("progress-value");
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercent = (scrollPosition / scrollHeight) * 100;

    progressValue.style.width = `${scrollPercent}%`;
});

// ✅ Play Button Action
document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.querySelector(".play-btn a");
    const playPopup = document.querySelector(".play");
    const closeMovie = document.querySelector(".close-movie");

    if (playButton && playPopup && closeMovie) {
        playButton.addEventListener("click", function () {
            playPopup.style.display = "flex";
        });

        closeMovie.addEventListener("click", function () {
            playPopup.style.display = "none";
        });
    }

    // ✅ Fetch Movie Details from Backend
    fetchMovieDetails();
});

async function fetchMovieDetails() {
    try {
        const res = await fetch("http://localhost:5000/api/movies/Pirates%20of%20the%20Caribbean:%20Salazar's%20Revenge");
        const movie = await res.json();

        // Inject dynamic content
        document.querySelector(".movie-title h1").textContent = movie.title;
        document.querySelector(".movie-details p").textContent = movie.description;
        document.querySelector(".play-movie iframe").src = movie.trailerUrl;

        const downloadContainer = document.querySelector(".download-container");
        downloadContainer.innerHTML = "";

        movie.downloadLinks.forEach(link => {
            downloadContainer.innerHTML += `
                <div class="download-box">
                    <span><i class="fas fa-server"></i> ${link.server}</span>
                    <span>English</span>
                    <span>${link.quality}</span>
                    <a href="${link.link}" download>Download</a>
                </div>
            `;
        });
    } catch (err) {
        console.error("❌ Failed to fetch movie data:", err);
    }
}
