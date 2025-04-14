<template>
  <div>
    <!-- Scroll Progress Bar -->
    <div id="progress">
      <span id="progress-value"></span>
    </div>

    <!-- Navigation -->
    <nav class="navigation">
      <input type="checkbox" class="menu-btn" id="menu-btn" />
      <label for="menu-btn" class="menu-icon">
        <span class="nav-icon"></span>
      </label>
      <a href="/homepage" class="logo">TVZone<span>.hd</span></a>
      <ul class="menu">
        <li><a href="/homepage">Home</a></li>
        <li><a href="#">Genre</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="/movie">Movies</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <form action="" class="search-box">
        <input type="text" placeholder="Search Show" class="search-input" required />
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>
    </nav>

    <!-- TV Show Banner -->
    <section class="tvshow-banner">
      <div class="m-banner-img">
        <img :src="bannerImage" alt="TV Show Banner" />
      </div>
      <div class="banner-container">
        <div class="title-container">
          <div class="title-top">
            <div class="tvshow-title">
              <h1>{{ title }}</h1>
            </div>
            <div class="more-about-tvshow">
              <span class="quality">HD</span>
              <div class="rating">
                {{ rating }} <img src="./images/IMDB.jpeg" alt="IMDb" />
              </div>
              <span>{{ season }}</span>
              <span>{{ episodes }} Episodes</span>
              <span>{{ year }}</span>
            </div>
            <div class="language">
              <span>{{ language }}</span>
            </div>
          </div>
          <div class="title-bottom">
            <div class="category">
              <strong>Genre</strong><br />
              <a href="#">Drama</a>, <a href="#">Sci-Fi</a>, <a href="#">Thriller</a>
            </div>
            <a :href="trailerLink" class="watch-btn">Watch Trailer</a>
          </div>
        </div>

        <!-- Play Button -->
        <div class="play-btn-container">
          <div class="play-btn">
            <a href="javascript:void(0)" @click="playTrailer">
              <i class="fas fa-play"></i>
            </a>
          </div>
        </div>

        <!-- Trailer Popup -->
        <div v-if="isPlaying" class="play">
          <a href="javascript:void(0)" class="close-movie" @click="closeTrailer">
            <i class="fas fa-times"></i>
          </a>
          <div class="play-movie">
            <iframe
              width="100%"
              height="500px"
              :src="trailerUrl"
              title="TV Show Trailer"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- TV Show Description -->
    <section class="tvshow-details">
      <strong>TV Show Description</strong>
      <p>{{ description }}</p>
    </section>

    <!-- Screenshots -->
    <section class="screenshots">
      <strong>ScreenShots</strong>
      <div class="screen-s-container">
        <img v-for="(image, index) in screenshots" :key="index" :src="image" alt="Screenshot" />
      </div>
    </section>

    <!-- Download Section -->
    <section class="download-tvshow">
      <div class="download-container">
        <div v-for="(server, index) in downloadLinks" :key="index" class="download-box">
          <span><i class="fas fa-server"></i> Server {{ index + 1 }}</span>
          <span>{{ server.language }}</span>
          <span>{{ server.quality }}</span>
          <a :href="server.link" target="_blank">Download</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <a href="/homepage" class="logo">TVZone<span>hd</span></a>
      <span class="copyright">Copyright 2025 - All rights reserved</span>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "The 100",
      rating: 9.1,
      season: "Season 1",
      episodes: 10,
      year: 2024,
      language: "English",
      bannerImage: "../images/post 1.jpeg",
      trailerLink: "https://www.youtube.com/watch?v=ia1Fbg96vL0",
      description: "Enter a short summary or description of the TV show...",
      screenshots: [
        "../images/post 2.jpeg",
        "../images/post 3.jpeg",
        "../images/post 4.jpeg",
        "../images/post 5.jpeg"
      ],
      downloadLinks: [
        { language: "English", quality: "480p", link: "#" },
        { language: "English", quality: "720p", link: "#" },
        { language: "English", quality: "1080p", link: "#" }
      ],
      isPlaying: false,
      trailerUrl: "https://www.youtube.com/embed/xd8rPw2V_Vg"
    };
  },
  methods: {
    playTrailer() {
      this.isPlaying = true;
    },
    closeTrailer() {
      this.isPlaying = false;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.updateProgress);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.updateProgress);
  },
  methods: {
    updateProgress() {
      const scrollProgress = document.getElementById("progress");
      const progressValue = document.getElementById("progress-value");
      const pos = document.documentElement.scrollTop;
      const calcHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollValue = Math.round((pos * 100) / calcHeight);
      scrollProgress.style.background = `conic-gradient(#e70634 ${scrollValue}%, #2b2f38 ${scrollValue}%)`;
    }
  }
};
</script>

<style scoped>
/* Include your CSS here (you can reuse the existing CSS you have) */
</style>
