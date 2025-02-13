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
        { id: 1, name: "The Grand Resort", location: "Goa, India", price: 5000, image: "https://pix10.agoda.net/hotelImages/586/5862122/5862122_18100815220068373977.jpg?s=1024x768" },
        { id: 2, name: "Mountain View Hotel", location: "Manali, India", price: 3000, image: "https://cdn.audleytravel.com/620/442/60/409166-alila-diwa-majorda-south-beaches-goa.jpg" },
        { id: 3, name: "Beachside Paradise", location: "Pondicherry, India", price: 4500, image: "https://media-cdn.tripadvisor.com/media/photo-s/12/2e/b8/18/the-blue-water.jpg" },
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
