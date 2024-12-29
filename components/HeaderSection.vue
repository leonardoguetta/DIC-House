<template>
  <header>
    <h1>{{ $t('welcome') }}</h1>
    <a href="#services">{{ $t('explore') }}</a>
  </header>
</template>

<script>

</script>

<style scoped>
header {
  background: linear-gradient(135deg, #001F3F, #003366);
  color: white;
  text-align: center;
  padding: 50px 20px;
  position: relative;
}

header h1 {
  font-size: 3rem;
  margin: 0;
}

header p {
  font-size: 1.5rem;
}

header a {
  background: #FF851B;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  display: inline-block;
  transition: background 0.3s ease-in-out;
}

header a:hover {
  background: #E67817;
}
</style>
