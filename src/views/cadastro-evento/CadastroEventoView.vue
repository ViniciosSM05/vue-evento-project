<template>
  <div class="cadastro-evento">
    <div class="container-form">
      <div class="title">
        <h1>Evento</h1>
      </div>
      <EventoForm />
    </div>
  </div>
</template>
<style scoped src="./cadastro-evento.css"></style>

<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useEventoStore } from '@/stores/evento-store'
import EventoForm from '../../components/evento-form/EventoForm.vue'

const store = useEventoStore()
onUnmounted(() => store.clearEventoToAdd())
</script>
