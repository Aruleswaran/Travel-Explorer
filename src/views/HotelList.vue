<template>
  <div class="hotel-list">
    <h1>Hotel Listings</h1>
    <div class="hotel-grid">
      <HotelCard v-for="hotel in hotels" :key="hotel.id" :hotel="hotel" />
    </div>
  </div>
</template>

<script>
import HotelCard from "@/components/HotelCard.vue";

export default {
  components: {
    HotelCard,
  },
  data() {
    return {
      hotels: [
        { id: 1, name: "The Grand Resort", location: "Goa, India", price: 5000, image: "https://via.placeholder.com/400x200" },
        { id: 2, name: "Mountain View Hotel", location: "Manali, India", price: 3000, image: "https://via.placeholder.com/400x200" },
        { id: 3, name: "Beachside Paradise", location: "Pondicherry, India", price: 4500, image: "https://via.placeholder.com/400x200" },
      ],
    };
  },
};
</script>

<style scoped>
.hotel-list {
  padding: 20px;
}
.hotel-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style>
