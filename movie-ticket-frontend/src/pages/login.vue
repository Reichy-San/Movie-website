<template>
  <div class="auth-container">
    <form class="auth-form" @submit.prevent="login">
      <h2>Login</h2>
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
      <button type="submit">Login</button>
      <p>Don't have an account? <router-link to="/signup">Sign Up</router-link></p>
      <p v-if="loginMessage" class="error-message">{{ loginMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loginMessage: "",
    };
  },
  methods: {
    login() {
      // Add login logic here
      if (this.email && this.password) {
        // Simulate a login check
        const user = { email: this.email, password: this.password };
        if (user.email === "test@example.com" && user.password === "password") {
          this.$router.push("/home"); // Redirect to home page on success
        } else {
          this.loginMessage = "Invalid email or password";
        }
      } else {
        this.loginMessage = "Please fill in all fields";
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Monoton&display=swap');
/* The styles will be handled by auth.css */
</style>
