export const pokemonIds = [1, 20, 34, 56, 12, 34]

pokemonIds.push(+'1')

console.log(pokemonIds)

export interface Pokemon {
  id: number
  name: string
  age?: number
}

export const pika: Pokemon = {
  id: 1,
  name: 'pika',
}

console.log(pika)
