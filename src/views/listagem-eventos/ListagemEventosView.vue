<template>
  <div class="listagem-eventos">
    <div class="content">
      <div class="title">
        <h1>Listagem de Eventos</h1>
      </div>
      <div class="container-listagem">
        <EventoListagem />
      </div>
    </div>
  </div>
</template>
<style scoped src="./listagem-eventos.css"></style>

<script setup lang="ts">
import EventoListagem from '@/components/evento-listagem/EventoListagem.vue'
</script>
