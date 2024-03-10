<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/cadastro">Cadastrar</RouterLink>
        <RouterLink to="/">Listagem</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  gap: 50px;
  padding: 5px 20px;
}

a {
  font-size: 1.2rem;
  text-decoration: none;
  font-weight: 700;
  font-style: italic;
}
</style>
