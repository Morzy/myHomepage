'use client';
import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useState } from "react";

export type Item = {
    name: string;
    slug: string;
    description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
    {
        name: '后端',
        items: [
            {
                name: 'Nested Layouts',
                slug: 'layouts',
                description: 'Create UI that is shared across routes',
            },
        ],
    },
];


export default function GlobalNav() {
    const [isOpen, setIsOpen] = useState(false);
    const close = () => setIsOpen(false);
    return (<div className="top-14 bg-red border-r-2 h-screen">
        <nav className="space-y-6 px-2 pb-24 pt-1">
            <div>
            </div>
            {demos.map((group) => (
                <div key={group.name}>
                    <div className="block font-sans py-2 text-sm font-medium text-gray-400">{group.name}</div>
                    {group.items.map(link => <GlobalNavItem item={link} close={close} key={group.name}></GlobalNavItem>)}
                </div>
            ))
            }
        </nav>

    </div>)
}
export function GlobalNavItem({
    item,
    close,
}: {
    item: Item;
    close: () => false | void;
}) {
    const segment = useSelectedLayoutSegment();
    const isActive = item.slug === segment;

    return (
        <Link
            onClick={close}
            href={`/${item.slug}`}
            className={clsx(
                'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
                {
                    'text-gray-400 hover:bg-gray-800': !isActive,
                    'text-white': isActive,
                },
            )}
        >
            {item.name}
        </Link>
    );
}

