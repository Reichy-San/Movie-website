<template>
  <div class="auth-container">
    <form class="auth-form" @submit.prevent="signup">
      <h2>Sign Up</h2>
      <input
        type="text"
        v-model="username"
        placeholder="Username"
        required
      />
      <input
        type="email"
        v-model="email"
        placeholder="Email"
        required
      />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button type="submit">Sign Up</button>
      <p>Already have an account? <router-link to="/login">Login</router-link></p>
      <p v-if="signupMessage" class="error-message">{{ signupMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      signupMessage: "",
    };
  },
  methods: {
    signup() {
      // Add signup logic here
      if (this.username && this.email && this.password) {
        // Simulate a signup success
        this.signupMessage = "Account created successfully!";
        // After successful signup, you can redirect to the login page
        this.$router.push("/login");
      } else {
        this.signupMessage = "Please fill in all fields";
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Monoton&display=swap');
/* The styles will be handled by auth.css */
</style>
