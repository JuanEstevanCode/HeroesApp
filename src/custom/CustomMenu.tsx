import { Link, useLocation } from "react-router"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../components/ui/navigation-menu"
import { cn } from "@/lib/utils"


const CustomMenu = () => {

    const {pathname} = useLocation()

    const isActive = (path:string) => pathname === path

    return (
        <NavigationMenu>
            <NavigationMenuList>

                {/*Inicio*/}
                <NavigationMenuItem>
                    <NavigationMenuLink className={cn(isActive('/') && 'bg-slate-200', 'rounded-md p-2')}>
                        <Link to="/">Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/*Buscar*/}
                <NavigationMenuItem>
                    <NavigationMenuLink className={cn(isActive('/search') && 'bg-slate-200', 'rounded-md p-2')}>
                        <Link to="/search">Buscar</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default CustomMenu
