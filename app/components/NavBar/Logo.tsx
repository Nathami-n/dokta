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
    const pathname = usePathname()
    const filter = params.get('filter')
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
                    className = {`
                    ${title == filter ? 'opacity-100 border-b-2 border-blue-500 flex-shrink-0': 'opacity-70 flex-shrink-0'}
                    flex 
                    flex-col
                    gap-1
                    items-center
                    `}
                    >
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

                    <p className="text-xs">{title}</p>

                </div>
            </Link>
        </div>
    )
}

export default Logo