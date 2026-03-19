import { heroApi } from "../api/hero.api"


const getHeroesByPageAction = async() => {
    const {data} = await heroApi.get('/')
    return data
}

export default getHeroesByPageAction
