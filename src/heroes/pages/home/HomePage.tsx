import useHeroSummary from "@/heroes/hooks/useHeroSummary"
import useHeroPaginated from "@/heroes/hooks/useHeroPaginated"
import useQueryParams from "@/heroes/hooks/useQueryParams"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomJumbotron from "@/components/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"
import HeroGrid from "@/heroes/components/HeroGrid"
import CustomPagination from "@/components/custom/CustomPagination"
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb"
import { use } from "react"
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext"


const HomePage = () => {

  const { selectTabs, page, limit, category, setSearchParams } = useQueryParams()

  const { data: heroesResponse } = useHeroPaginated(+page, +limit, category)
  const { data: summary } = useHeroSummary()

  const { favoriteCount, favorites } = use(FavoriteHeroContext)


  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title="Universo de superhéroes" description="Descubre,explora y administra super héroes y villanos" />
        <CustomBreadcrumb currentPage="Super Héroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectTabs} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">

            <TabsTrigger value="all" onClick={() => setSearchParams({ tab: 'all', category: 'all', page: '1' })}>All Characters ({summary?.totalHeroes})</TabsTrigger>

            <TabsTrigger value="favorites" onClick={() => setSearchParams({ tab: 'favorites', category: 'favorites' })} className="flex items-center gap-2">Favorites ({favoriteCount})</TabsTrigger>

            <TabsTrigger value="heroes" onClick={() => setSearchParams({ tab: 'heroes', category: 'hero', page: '1' })}>Heroes ({summary?.heroCount})</TabsTrigger>

            <TabsTrigger value="villains" onClick={() => setSearchParams({ tab: 'villains', category: 'villain', page: '1' })}>Villains ({summary?.villainCount})</TabsTrigger>

          </TabsList>

          <TabsContent value={'all'}>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value={"favorites"}>
            <h1>Favoritos</h1>
            <HeroGrid heroes={favorites} />
          </TabsContent>
          <TabsContent value={"heroes"}>
            <h1>Héroes</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value={"villains"}>
            <h1>Villanos</h1>
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>

        </Tabs>

        {/* Character Grid */}


        {/* Pagination */}
        {
          selectTabs !== 'favorites' && (
            <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
          )
        }
      </>
    </>
  )
}

export default HomePage