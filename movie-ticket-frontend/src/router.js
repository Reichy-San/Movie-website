import { createRouter, createWebHistory } from 'vue-router';
import Login from './login.html'; // Adjust to your component paths
import Signup from './signup.html';
import movie from './movie.html';
import tvshows from './Tv.show.html';
import Home from './homepage.html';


const routes = [
  { path: '/', component: Home },
  { path: './movie.html', component: movie },
  { path: './Tv.show.html', component: tvshows },
  { path: './homepage.html', component: Home },
  { path: './login.html', component: Login },
  { path: './signup.html', component: Signup }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
