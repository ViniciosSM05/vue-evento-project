<template>
  <div class="select-uf">
    <select
      name="select-uf"
      :value="value"
      @change="onChange(Number(($event.target as HTMLSelectElement).value))"
    >
      <option v-for="(uf, i) in ufs" :key="i" :value="uf.id">{{ uf.sigla }} - {{ uf.nome }}</option>
    </select>
  </div>
</template>
<style scoped src="./select-uf.css"></style>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref, toRef, watch } from 'vue'
import type { Uf } from '@/types/uf/Uf'
import type { SelectUfProps } from '@/types/uf/SelectUfProps'

const props = defineProps<SelectUfProps>()
const value = toRef(props.value)

const ufs = ref<Uf[]>([])
const URL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
onMounted(() => {
  axios
    .get<Uf[]>(URL)
    .then(({ data }) => {
      ufs.value = data
    })
    .catch((error) => {
      console.error(error)
      ufs.value = []
    })
})

const emit = defineEmits<{ (e: 'change', uf: Uf | undefined): void }>()
const onChange = (id: number) => {
  value.value = id
  const uf = ufs.value.find((x) => x.id === id)
  emit('change', uf)
}

watch(
  () => props.value,
  (newVal) => (value.value = newVal)
)
</script>
