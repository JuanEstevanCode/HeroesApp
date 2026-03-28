import { heroApi } from "../api/hero.api";
import type { Hero } from "../interfaces/hero.interface";

export interface Options {
    name?: string;
    team?: string;
    category?: string;
    universe?: string;
    status?: string;
    strength?: string;
}

const BASE_URL = import.meta.env.VITE_API_URL

export const searchHeroAction = async (options: Options = {}) => {

    const { category, name, status, strength, team, universe } = options

    if (!name && !team && !category && !universe && !status && !strength) {
        return []
    }

    const { data } = await heroApi.get<Hero[]>(`/search`, {
        params: {
            category, 
            name, 
            status, 
            strength, 
            team, 
            universe
        }
    })

    return data.map(hero => ({
        ...hero,
        image: `${BASE_URL}/images/${hero.image}`
    }))


}