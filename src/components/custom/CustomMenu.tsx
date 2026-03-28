import { Link, useLocation } from "react-router"
import { cn } from "@/lib/utils"
import { NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenu} from "../ui/navigation-menu"


const CustomMenu = () => {

    const {pathname} = useLocation()

    const isActive = (path:string) => pathname === path

    return (
        <NavigationMenu className="py-4">
            <NavigationMenuList>

                {/*Inicio*/}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(isActive('/') && 'bg-slate-200', 'rounded-md p-2')}>
                        <Link to="/">Inicio</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/*Buscar*/}
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={cn(isActive('/search') && 'bg-slate-200', 'rounded-md p-2')}>
                        <Link to="/search">Buscar superhéroes</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>

    )
}

export default CustomMenu
