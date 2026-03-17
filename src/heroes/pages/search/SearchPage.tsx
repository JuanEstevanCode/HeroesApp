import CustomJumbotron from "@/components/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"
import SearchControls from "./ui/SearchControls"
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb"

const SearchPage = () => {
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
    </div>
  )
}

export default SearchPage
