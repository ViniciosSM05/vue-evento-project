<template>
  <div class="evento-listagem">
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Estado</th>
          <th>Cidade</th>
          <th>Preço</th>
          <th>Data / Hora</th>
          <th>Editar</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(evento, i) in store.eventos" :key="i">
          <td>{{ evento.nome }}</td>
          <td>{{ evento.uf?.nome }}</td>
          <td>{{ evento.municipio?.nome }}</td>
          <td>R$ {{ evento.preco }}</td>
          <td>{{ evento.data }}</td>
          <td>
            <a @click="editar(evento)">
              <img src="@/assets/icons/edit.png" height="20" width="20" />
            </a>
          </td>
          <td>
            <a @click="store.excluir(evento.id!)">
              <img src="@/assets/icons/trash-can.png" height="20" width="20" />
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped src="./evento-listagem.css"></style>

<script setup lang="ts">
import { useEventoStore } from '@/stores/evento-store'
import type { Evento } from '@/types/evento/Evento'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useEventoStore()

const editar = (evento: Evento) => {
  store.setEventoToAdd(evento)
  router.push('/cadastro')
}
</script>
