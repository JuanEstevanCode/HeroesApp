
import CustomJumbotron from "@/components/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"
import SearchControls from "./ui/SearchControls"
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb"
import HeroGrid from "@/heroes/components/HeroGrid"
// import useSearchHero from "@/heroes/hooks/useSearchHero"
import { useSearchParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { searchHeroAction } from "@/heroes/actions/search-hero.action"

const SearchPage = () => {

  const [searchParams] = useSearchParams()
  const name = searchParams.get('name') ?? undefined
  const strength = searchParams.get('strength') ?? undefined

  const { data: searchHeroes } = useQuery({
    queryKey: ['search', { name, strength }],
    queryFn: () => searchHeroAction({ name, strength }),
    staleTime: 1000 * 60 * 5, //5min
  })


  // const { data: searchHero, } = useSearchHero({ name: name })

  return (
    <div>
      {/*Header*/}
      <CustomJumbotron title="Búsqueda de superhéroes" description="Descubre,explora y administra super héroes y villanos" />

      {/*Breadcrumb*/}
      <CustomBreadcrumb currentPage="Search"
      // breadcrumbs={[
      //   { label: 'Home1', to: '/' }
      // ]} 
      />

      {/* Stats Dashboard */}
      <HeroStats />

      <SearchControls />

      <HeroGrid heroes={searchHeroes ?? []} />
    </div>
  )
}

export default SearchPage
