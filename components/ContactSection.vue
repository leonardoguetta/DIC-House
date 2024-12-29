<template>
    <section id="contact">
      <h2>Contacto</h2>
      <p>Hablemos de tus necesidades. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <form>
        <input type="text" name="name" placeholder="Tu Nombre" required />
        <input type="email" name="email" placeholder="Tu Email" required />
        <textarea name="message" placeholder="Tu Mensaje" rows="4" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  </template>
  
  <style scoped>
  section {
    padding: 50px 20px;
    margin: 20px auto;
    max-width: 600px;
    text-align: center;
  }
  
  section h2 {
    margin-bottom: 20px;
  }
  
  section p {
    margin-bottom: 30px;
    color: #555;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  
  form input,
  form textarea {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  form button {
    padding: 10px;
    font-size: 1rem;
    background: #001F3F;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease-in-out;
  }
  
  form button:hover {
    background: #003366;
  }
  
  @media (max-width: 768px) {
    form input,
    form textarea {
      font-size: 0.9rem;
      padding: 8px;
    }
  
    form button {
      font-size: 0.9rem;
    }
  }
  </style>
  