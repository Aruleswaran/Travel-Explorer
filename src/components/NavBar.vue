<template>
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="logo">Travel Explorer</router-link>
        <ul class="nav-links">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/hotels">Hotels</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
  };
  </script>
  
  <style scoped>
  .navbar {
    background-color: #42b983;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 20px;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;
  }
  .nav-links li {
    display: inline;
  }
  .nav-links a {
    color: white;
    text-decoration: none;
    font-size: 16px;
    transition: color 0.3s;
  }
  .nav-links a:hover {
    color: #d1ffe8;
  }
  </style>
  