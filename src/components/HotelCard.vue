<template>
  <div class="hotel-card">
    <img :src="hotel.image" alt="Hotel Image" />
    <h3>{{ hotel.name }}</h3>
    <p>{{ hotel.location }}</p>
    <p>₹{{ hotel.price }} per night</p>
  </div>
</template>

<script>
export default {
  props: {
    hotel: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.hotel-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}
.hotel-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
