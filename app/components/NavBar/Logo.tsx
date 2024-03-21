'use client'
import Image from "next/image"
import Link from 'next/link'
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

interface LogoProps {
    id: number;
    logoUrl: string;
    title: string;
}
const Logo: React.FC<LogoProps> = ({
    id,
    logoUrl,
    title
}) => {
    const params = useSearchParams()
    console.log(params.get('filter'))
    const pathname = usePathname()
    const handleHref = useCallback((name: string, value: string) => {
        const newParams = new URLSearchParams(params.toString());
        newParams.set(name, value);
        const newUrl =`${pathname}?${newParams.toString()}`;
        return newUrl
    }, [params])
    return (
        <div>
            <Link href={handleHref(
                'filter', title
            )}>
                <div
                    className={`
         flex
         flex-col
         gap-1
         items-center
         cursor-pointer
        `}>
                    <button
                        type='button'
                    >
                        <Image
                            src={logoUrl}
                            width={48}
                            height={48}
                            alt={title}
                        />
                    </button>

                    <p>{title}</p>

                </div>
            </Link>
        </div>
    )
}

export default Logo