import type { Uf } from '../uf/Uf'

export interface Municipio {
  id: number
  nome: string
  microrregiao: Microrregiao
  'regiao-imediata': Regiaoimediata
}

interface Regiaoimediata {
  id: number
  nome: string
  'regiao-intermediaria': Mesorregiao
}

interface Microrregiao {
  id: number
  nome: string
  mesorregiao: Mesorregiao
}

interface Mesorregiao {
  id: number
  nome: string
  UF: Uf
}
