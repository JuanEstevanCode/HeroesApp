import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import type { Hero } from "../interfaces/hero.interface";
import * as z from "zod";


interface PropsContext {
    //State
    favorites: Hero[];
    favoriteCount: number;

    //Methods
    isFavorite: (hero: Hero) => boolean;
    toggleFavorite: (hero: Hero) => void;
}

const HeroSchema = z.object({
    alias: z.string(),
    category: z.string(),
    description: z.string(),
    durability: z.number(),
    firstAppearance: z.string(),
    id: z.string(),
    image: z.string(),
    intelligence: z.number(),
    name: z.string(),
    powers: z.array(z.string()),
    slug: z.string(),
    speed: z.number(),
    status: z.string(),
    strength: z.number(),
    team: z.string(),
    universe: z.string(),
})

const favoriteSchema = z.array(HeroSchema)

// eslint-disable-next-line react-refresh/only-export-components
export const FavoriteHeroContext = createContext({} as PropsContext)

const getFavoritesFromLocalStorage = (): Hero[] => {
    const favorites = localStorage.getItem('favorites')
    if (!favorites) {
        return []
    }
    const result = favoriteSchema.safeParse(JSON.parse(favorites))

    if (result.error) {
        console.log(result.error)
        return []
    }
    return result.data
}

const FavoriteHeroProvider = ({ children }: PropsWithChildren) => {

    const [favorites, setFavorites] = useState<Hero[]>(getFavoritesFromLocalStorage())

    const toggleFavoriteHero = (hero: Hero) => {
        const heroExist = favorites?.find((h) => h.id === hero.id)

        if (heroExist) {
            const newFavorites = favorites?.filter((h) => h.id !== hero.id)
            setFavorites(newFavorites)
            return
        }

        setFavorites([...favorites, hero])
    }

    const isFavoriteHero = (hero: Hero) => favorites?.some((h) => h.id === hero.id)

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return (
        <FavoriteHeroContext
            value={{
                favoriteCount: favorites.length,
                favorites: favorites,

                isFavorite: isFavoriteHero,
                toggleFavorite: toggleFavoriteHero
            }}
        >
            {children}
        </FavoriteHeroContext>
    )
}

export default FavoriteHeroProvider
