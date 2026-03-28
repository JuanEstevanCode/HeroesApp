import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router"

interface BreadCrumbs {
    label: string;
    to: string;
}

interface Props {
    currentPage: string;
    breadcrumbs?: BreadCrumbs[]
}

const CustomBreadcrumb = ({ currentPage, breadcrumbs }: Props) => {

    return (
        <Breadcrumb className="my-5">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link to={'/'}>Inicio</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {
                    breadcrumbs?.map((breadcrumb) => (
                        <>
                            <BreadcrumbItem>
                                <BreadcrumbLink>
                                    <Link to={breadcrumb.to}>{breadcrumb.label}</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                        </>

                    ))
                }

                <BreadcrumbItem>
                    <BreadcrumbLink className="text-black">{currentPage}</BreadcrumbLink>
                </BreadcrumbItem>

            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default CustomBreadcrumb
