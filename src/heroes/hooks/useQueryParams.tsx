import { useMemo } from "react"
import { useSearchParams } from "react-router"

const useQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams('tab')

    const activeTab = searchParams.get('tab') ?? 'all'
    const page = searchParams.get('page') ?? '1'
    const limit = searchParams.get('limit') ?? '6'
    const category = searchParams.get('category') ?? 'all'

    const selectTabs = useMemo(() => {
        const validTabs = ['all', 'favorites', 'heroes', 'villains']
        return validTabs.includes(activeTab) ? activeTab : 'all'
    }, [activeTab])

    return {
        selectTabs,
        page,
        limit,
        category,
        
        setSearchParams
    }
}

export default useQueryParams


//const [searchParams, setSearchParams] = 