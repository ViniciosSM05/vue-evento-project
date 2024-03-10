<template>
  <div class="cadastro-evento">
    <div class="title">
      <h1>Evento</h1>
    </div>
    <div class="container-form">
      <EventoForm />
    </div>
  </div>
</template>
<style scoped src="./cadastro-evento.css"></style>

<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useEventoStore } from '@/stores/evento-store'
import EventoForm from '../../components/evento-form/EventoForm.vue'

const route = useRoute()
const store = useEventoStore()

onUnmounted(() => store.clearEventoToAdd())
</script>
