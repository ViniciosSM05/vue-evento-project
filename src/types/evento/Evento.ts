import type { Municipio } from '../municipio/Municipio'
import type { Uf } from '../uf/Uf'

export interface Evento {
  id: string | null
  nome: string
  uf: Uf | null
  municipio: Municipio | null
  preco: number
  data: string
}
