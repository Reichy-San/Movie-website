<script>
import "../styles/movie.css"; // Adjust the path based on your file structure

export default {
  data() {
    return {
      movieTitle: "The 100",
      rating: 8.5,
      year: 2010,
      duration: "1h 30min",
      language: "English",
      trailerLink: "https://www.youtube.com/watch?v=ia1Fbg96vL0",
      isPlaying: false,
      videoSource: "path_to_video.mp4"
    };
  },
  methods: {
    playMovie() {
      this.isPlaying = true;
    },
    closeMovie() {
      this.isPlaying = false;
    }
  }
};
</script>
