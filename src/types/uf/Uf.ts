export interface Uf {
  id: number
  sigla: string
  nome: string
  regiao: Regiao
}

interface Regiao {
  id: number
  sigla: string
  nome: string
}
