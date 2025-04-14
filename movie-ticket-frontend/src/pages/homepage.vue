<template>
  <div id="app">
    <nav class="navigation">
      <input type="checkbox" class="menu-btn" id="menu-btn" />
      <label for="menu-btn" class="menu-icon">
        <span class="nav-icon"></span>
      </label>
      <a href="/" class="logo">Movies<span>HD</span></a>
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/tvshows">TV Shows</router-link></li>
        <li><router-link to="/movie">Movie</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/signup">Signup</router-link></li>
        <li><a href="#" @click="logout">Logout</a></li>
      </ul>
      <form class="search-box">
        <input type="text" placeholder="Search Movie..." v-model="searchQuery" />
        <button type="submit" @click="searchMovie"><i class="fas fa-search"></i></button>
      </form>
    </nav>

    <header class="hero">
      <div class="hero-text">
        <h1>Welcome to Movies<span>HD</span></h1>
        <p>Stream & Download your favorite movies and shows in Full HD</p>
        <router-link to="/movie" class="btn">Browse Movies</router-link>
      </div>
    </header>

    <section id="featured" class="featured-section">
      <h2>Featured Movies</h2>
      <div class="movie-grid">
        <div class="movie-card" v-for="(movie, index) in featuredMovies" :key="index">
          <img :src="movie.image" :alt="movie.title" />
          <h3>{{ movie.title }}</h3>
          <span>{{ movie.genre }}</span>
        </div>
      </div>
    </section>

    <footer>
      <a href="/" class="logo">Movies<span>HD</span></a>
      <p>Copyright © 2025 - MoviesHD</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      featuredMovies: [
        {
          image: './images/p-2.jpeg',
          title: 'Pirates of the Caribbean',
          genre: 'Action | Adventure'
        },
        {
          image: './images/pic-4.jpeg',
          title: 'Rick and Morty',
          genre: 'Sci-Fi | Thriller'
        },
        {
          image: './images/pic-11.jpeg',
          title: 'Annente',
          genre: 'Horror | Mystery'
        },
        {
          image: './images/pic-8.jpeg',
          title: 'Wanda Vision',
          genre: 'Action | Sci-Fi'
        }
      ]
    };
  },
  methods: {
    logout() {
      sessionStorage.removeItem('loggedInUser');
      alert('You have been logged out.');
      this.$router.push('/login');
    },
    searchMovie(event) {
      event.preventDefault();
      // Implement movie search logic
      console.log(`Searching for: ${this.searchQuery}`);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Monoton&display=swap');
</style>
