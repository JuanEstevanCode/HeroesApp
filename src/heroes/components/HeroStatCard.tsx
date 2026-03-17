import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import type React from "react";
import type { JSX } from "react";

interface Props {
    title: string;
    children: React.ReactNode;
    icon: JSX.Element;
}

const HeroStatCard = ({title, icon, children}:Props) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {icon}
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )
}

export default HeroStatCard
