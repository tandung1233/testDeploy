'use client';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import './nav.scss';


const data = [
    {
        name: 'Trang chủ',
        path: '/home',
        id: 1,
    },
    {
        name: 'Bên bán',
        path: '/home2',
        id: 2,
    },
    {
        name: 'Bên mua',
        path: '/home3',
        id: 3,
    },
    {
        name: 'Dịch vụ',
        path: '/home4',
        id: 4,
    },
    {
        name: 'Hỏi đáp',
        path: '/home5',
        id: 5,
    },
    {
        name: 'Về INMERGERS',
        path: '/home6',
        id: 6,
    },
    {
        name: 'Tin tức',
        path: '/home7',
        id: 7,
    }
]

function NavLink() {

    const pathName = usePathname()

    return (
        <>
            {
                data.map(link => {
                    const isActive = pathName === link.path

                    return (
                        <Link
                            suppressHydrationWarning
                            href={link.path}
                            key={link.id}
                            className={`${isActive ? 'active' : ''} nav-link`}
                        >
                            {link.name}
                        </Link>
                    )
                })
            }
        </>
    )
}

export default NavLink;
