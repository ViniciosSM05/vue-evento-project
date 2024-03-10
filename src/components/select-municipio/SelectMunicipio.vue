<template>
  <div class="select-municipio">
    <select
      name="select-municipio"
      :value="value"
      @change="onChange(Number(($event.target as HTMLSelectElement).value))"
    >
      <option v-for="(municipio, i) in municipios" :key="i" :value="municipio.id">
        {{ municipio.nome }}
      </option>
    </select>
  </div>
</template>
<style scoped src="./select-municipio.css"></style>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, toRef, watch } from 'vue'
import type { SelectMunicipioProps } from '@/types/municipio/SelectMunicipioProps'
import type { Municipio } from '@/types/municipio/Municipio'

const props = defineProps<SelectMunicipioProps>()
const value = toRef(props.value)
const municipios = ref<Municipio[]>([])

const emit = defineEmits<{ (e: 'change', uf: Municipio | undefined): void }>()
const onChange = (id: number) => {
  value.value = id
  const uf = municipios.value.find((x) => x.id === id)
  emit('change', uf)
}

const BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
const refreshMunicipios = () => {
  if (!props.ufId) {
    municipios.value = []
    return
  }

  axios
    .get<Municipio[]>(BASE_URL + `${props.ufId}/municipios`)
    .then(({ data }) => {
      municipios.value = data
    })
    .catch((error) => {
      console.error(error)
      municipios.value = []
    })
}

watch(
  () => props.ufId,
  (_) => refreshMunicipios()
)
watch(
  () => props.value,
  (newVal) => (value.value = newVal)
)

onMounted(() => refreshMunicipios())
</script>
