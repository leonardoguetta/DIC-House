<template>
    <section id="clients">
      <h2>Nuestras Marcas Asociadas</h2>
      <div class="carousel">
        <div class="carousel-item">
          <img src="@/assets/f7.jpeg" alt="Marca 1" />
        </div>
        <div class="carousel-item">
          <img src="@/assets/f5.jpeg" alt="Marca 2" />
        </div>
        <div class="carousel-item">
          <img src="@/assets/f6.jpeg" alt="Marca 3" />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  
  onMounted(() => {
    const carousel = document.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    const updateCarousel = () => {
      items.forEach((item) => {
        item.style.transform = `translateX(-${currentIndex * 100}%)`;
      });
    };
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      updateCarousel();
    }, 3000);
  });
  </script>
  
  <style scoped>
  section {
    padding: 50px 20px;
    margin: 20px auto;
    max-width: 900px;
    text-align: center;
  }
  
  .carousel {
    display: flex;
    overflow: hidden;
    position: relative;
    gap: 10px;
    justify-content: center;
  }
  
  .carousel-item {
    flex: 0 0 auto;
    text-align: center;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-item img {
    width: 150px;
    height: 150px;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 0 auto;
  }
  
  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    .carousel-item img {
      width: 100px;
      height: 100px;
    }
  }
  
  @media (max-width: 480px) {
    .carousel {
      gap: 5px;
    }
  
    .carousel-item img {
      width: 80px;
      height: 80px;
    }
  
    section h2 {
      font-size: 1.2rem;
    }
  }
  </style>
  