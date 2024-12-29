<template>
  <section id="services">
    <h2>¿Qué Hacemos?</h2>
    <div class="services">
      <div class="service">
        <h3>Seguridad Digital</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="service">
        <h3>Agentes de IA</h3>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
      <div class="service">
        <h3>Consultoría Tecnológica</h3>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 50px 20px;
  margin: 20px auto;
  max-width: 900px;
  color: black;
}

.services {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.service {
  flex: 1 1 calc(33.333% - 20px);
  background: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.service:hover {
  transform: scale(1.05);
}
</style>
