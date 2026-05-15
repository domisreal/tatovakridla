import LinkNext from "next/link";
import {ReactNode} from "react";
import { usePathname } from 'next/navigation'

type LinkProps = {
    href: string;
    children: ReactNode;
    className?: string;
    onClick?: () => void;
}

export function Link({children, href, className, onClick}: LinkProps){
    const pathname = usePathname()
    function setClassName() {
        let classNameString = className ? className : "text-2xl hover:text-blue-300"
        if (pathname === href) {
            classNameString += " text-blue-300"
        }
        return classNameString;
    }
    return <LinkNext href={href} className={setClassName()} onClick={onClick}>{children}</LinkNext>
}