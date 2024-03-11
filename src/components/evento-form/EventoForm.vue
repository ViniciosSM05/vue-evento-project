<template>
  <div class="evento-form">
    <form>
      <div class="col col-nome">
        <label for="nome">Nome:</label>
        <input
          required
          type="text"
          name="nome"
          :value="store.eventoToAdd.nome"
          @change="store.setEventoNome(($event.target as HTMLInputElement).value)"
        />
      </div>

      <div class="col col-uf">
        <label for="uf">Estado:</label>
        <SelectUf :value="store.eventoToAdd.uf?.id" @change="store.setEventoUf($event ?? null)" />
      </div>

      <div class="col col-municipio">
        <label for="municipio">Cidade:</label>
        <SelectMunicipio
          :value="store.eventoToAdd.municipio?.id"
          :uf-id="store.eventoToAdd.uf?.id"
          @change="store.setEventoMunicipio($event ?? null)"
        />
      </div>

      <div class="col col-preco">
        <label for="nome">Preço do ingresso:</label>
        <input
          required
          type="number"
          name="preco"
          :value="store.eventoToAdd.preco"
          @change="store.setEventoPreco(Number(($event.target as HTMLInputElement).value))"
        />
      </div>

      <div class="col col-data">
        <label for="data">Data / hora:</label>
        <input
          type="datetime-local"
          name="data"
          :value="store.eventoToAdd.data"
          @change="store.setEventoData(($event.target as HTMLInputElement).value)"
        />
      </div>

      <div class="col col-btn">
        <button type="submit" @click="salvar">Salvar</button>
      </div>
    </form>
  </div>
</template>
<style scoped src="./evento-form.css"></style>

<script setup lang="ts">
import SelectUf from '../select-uf/SelectUf.vue'
import SelectMunicipio from '../select-municipio/SelectMunicipio.vue'
import { useEventoStore } from '@/stores/evento-store'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useEventoStore()

const salvar = () => {
  if (!store.eventoIsValid(store.eventoToAdd)) {
    alert('Preencha todos os campos corretamente')
    return
  }
  store.salvar()
  router.push('/')
}
</script>
