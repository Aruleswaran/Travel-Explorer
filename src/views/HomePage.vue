<template>
  <div class="home">
    <h1>Welcome to Travel Explorer</h1>
    <p>Discover the best hotels and travel experiences!</p>
    <router-link @click="viewhotels" to="/hotels" class="btn">View Hotel Listings</router-link>
  </div>
</template>
<script>
export default {
  name:"HomePage",
  methods:{
    viewHotels() {
      const isAuthenticated = false; // Simulate authentication check
      if (isAuthenticated) {
        this.$router.push("/hotels");
      } else {
        alert("Please login to view hotel listings.");
        this.$router.push("/login");
      }
    }
  },
};
</script>
<style scoped>
.home {
  text-align: center;
  padding: 50px;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 5px;
}
</style>
