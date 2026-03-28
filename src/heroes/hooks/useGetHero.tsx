import { useQuery } from "@tanstack/react-query"
import { getHeroAction } from "../actions/get-hero.action"

const useGetHero = (idSlug:string) => {

  return useQuery({
      queryKey: ['heroes', idSlug],
      queryFn: () => getHeroAction(idSlug),
      retry: false,
    })
}

export default useGetHero
