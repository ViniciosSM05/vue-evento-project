import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Evento } from '@/types/evento/Evento'
import type { Uf } from '@/types/uf/Uf'
import type { Municipio } from '@/types/municipio/Municipio'

export const useEventoStore = defineStore('evento', () => {
  const eventos = ref<Evento[]>([])
  const eventoToAdd = ref<Evento>({
    id: null,
    nome: '',
    uf: null,
    municipio: null,
    preco: 0,
    data: ''
  })

  const setEventoToAdd = (evento: Evento) => (eventoToAdd.value = evento)
  const setEventoNome = (nome: string) => (eventoToAdd.value.nome = nome)
  const setEventoUf = (uf: Uf | null) => (eventoToAdd.value.uf = uf)
  const setEventoMunicipio = (municipio: Municipio | null) =>
    (eventoToAdd.value.municipio = municipio)
  const setEventoPreco = (preco: number) => (eventoToAdd.value.preco = preco)
  const setEventoData = (data: string) => (eventoToAdd.value.data = data)

  const clearEventoToAdd = () => {
    setEventoToAdd({
      id: null,
      nome: '',
      uf: null,
      municipio: null,
      preco: 0,
      data: ''
    })
  }

  const eventoIsValid = (evento: Evento) =>
    evento && evento.nome && evento.uf && evento.municipio && evento.data

  const salvar = () => {
    if (eventoToAdd.value.id)
      eventos.value = eventos.value.map((x) => ({
        ...(x.id === eventoToAdd.value.id ? eventoToAdd.value : x)
      }))
    else {
      eventoToAdd.value.id = crypto.randomUUID()
      eventos.value.push(eventoToAdd.value)
    }

    clearEventoToAdd()
  }

  const excluir = (id: string) => {
    const idx = eventos.value.findIndex((x) => x.id === id)
    if (idx !== -1) eventos.value.splice(idx, 1)
  }

  return {
    eventos,
    eventoToAdd,

    setEventoToAdd,
    setEventoNome,
    setEventoUf,
    setEventoMunicipio,
    setEventoPreco,
    setEventoData,
    clearEventoToAdd,
    eventoIsValid,
    salvar,
    excluir
  }
})
