import { createApp } from 'vue';  // Ensure that this import is at the top
import App from './App.vue';  // Import the main component
import router from './router';  // Import the router if you're using Vue Router

const app = createApp(App);  // Create the Vue app instance

app.use(router);  // Use the router with the app
app.mount('#app');  // Mount the app to the DOM
