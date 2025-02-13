<template>
    <div class="login-container">
      <div class="form-wrapper">
        <h2 class="title">Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" placeholder="Enter your email" required />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" class="btn">Login</button>
        </form>
        <p class="link">
          Don't have an account? <router-link to="/register">Register here</router-link>.
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginPage",
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      handleLogin() {
        if (this.email === "test@example.com" && this.password === "password123") {
          alert("Login successful!");
          this.$router.push("/");
        } else {
          alert("Invalid email or password");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f4f4f9;
  }
  
  .form-wrapper {
    width: 100%;
    max-width: 400px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    color: #333;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-size: 14px;
    margin-bottom: 5px;
    color: #555;
  }
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s;
  }
  
  input:focus {
    border-color: #42b983;
    outline: none;
  }
  
  .btn {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .btn:hover {
    background-color: #359768;
  }
  
  .link {
    text-align: center;
    margin-top: 15px;
    font-size: 14px;
    color: #555;
  }
  
  .link a {
    color: #42b983;
    text-decoration: none;
  }
  
  .link a:hover {
    text-decoration: underline;
  }
  </style>
  