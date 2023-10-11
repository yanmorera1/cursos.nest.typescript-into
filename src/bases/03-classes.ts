import axios from 'axios'
import { Move, PokeAPIResponse } from '../interfaces/pokeapi-response.interface'

export class Pokemon {
  get imageUrl(): string {
    return `url/${this.id}`
  }
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!!`)
  }

  speak() {
    console.log(`${this.name} ${this.name}`)
  }

  async getMoves(): Promise<Move[]> {
    // const moves = 10
    const { data } = await axios.get<PokeAPIResponse>(
      'https://pokeapi.co/api/v2/pokemon/4'
    )
    return data.moves
  }
}

export const charmander = new Pokemon(1, 'charmander')
// console.log(charmander)

// charmander.scream()
// charmander.speak()

charmander.getMoves()
