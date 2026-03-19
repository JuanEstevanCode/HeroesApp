import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomJumbotron from "@/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"
import HeroGrid from "@/heroes/components/HeroGrid"
import { useState } from "react"
import CustomPagination from "@/custom/CustomPagination"
import CustomBreadcrumb from "@/custom/CustomBreadcrumb"
import { useQuery } from "@tanstack/react-query"
import getHeroesByPageAction from "@/heroes/actions/get-heroes-by-page.action"

const HomePage = () => {

  type NewType = 'all' | 'favorites' | 'heroes' | 'villains'

  const [activeTab, setActiveTab] = useState<NewType>('all')

  const {} = useQuery({
    queryKey: ['heroes'],
    queryFn: () => getHeroesByPageAction(),
    staleTime: 1000 * 60 * 5
  })

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron title="Universo de superhéroes" description="Descubre,explora y administra super héroes y villanos" />
      <CustomBreadcrumb currentPage="Super Héroes"/>

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab('all')}>All Characters (16)</TabsTrigger>
            <TabsTrigger value="favorites" onClick={() => setActiveTab('favorites')} className="flex items-center gap-2">Favorites (3)</TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab('heroes')}>Heroes (12)</TabsTrigger>
            <TabsTrigger value="villains" onClick={() => setActiveTab('villains')}>Villains (2)</TabsTrigger>
          </TabsList>

          <TabsContent value={"all"}>
            <HeroGrid />
          </TabsContent>
          <TabsContent value={"favorites"}>
            <h1>Favoritos</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value={"heroes"}>
            <h1>Héroes</h1>
            <HeroGrid />
          </TabsContent>
          <TabsContent value={"villains"}>
            <h1>Villanos</h1>
            <HeroGrid />
          </TabsContent>

        </Tabs>

        {/* Character Grid */}


        {/* Pagination */}
        <CustomPagination totalPages={5}/>
      </>
    </>
  )
}

export default HomePage