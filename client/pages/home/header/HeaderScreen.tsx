'use client'
import './Header.scss';
import NavLink from "../nav/NavLink";
import {useRouter} from "next/navigation";
import {Button, Drawer, Dropdown, Input, Menu, MenuProps, Select, Tag} from "antd";
import React, { useEffect, useState} from "react";
import Link from 'next/link';
import Image from "next/image";


type _T_Props = {
    onSearch?: Function
    languages: any
    currencies?: any
}

const HeaderScreen = (props: _T_Props)  => {
    const router = useRouter()
    const [isShadow, setIsShadow] = useState(false)
    const [currency, setCurrency] = useState<string>('USD')
    const [showDrawer, setShowDrawer] = useState({
        isShow: false
    })
    const dropdownItems: MenuProps['items'] = props.currencies?.data?.content?.map((items: any, index: number) => ({
        key: index,
        label: items.currency
    }))

    const items: MenuProps['items'] = [
        {
            label: 'Trang chủ',
            key: '/home',
        },
        {
            label: 'Bên bán',
            key: '/home',
        },
        // {
        //     label: 'Bên mua',
        //     key: '/home',
        // },
        // {
        //     label: 'Dịch vụ',
        //     key: '/home',
        // },
        // {
        //     label: 'Hỏi đáp',
        //     key: '/home',
        // },
        // {
        //     label: 'Về INMERGERS',
        //     key: '/home',
        // },
        // {
        //     label: 'Tin tức',
        //     key: '/home',
        // }
    ]

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setIsShadow(true)

            } else {
                setIsShadow(false)
            }
        })

    }, [])

    const dispatchClick: MenuProps['onClick'] = (e) => {
        router.push(`${e.key}`)
    }

    const handleSearch = () => {
        if (props.onSearch) {
            props.onSearch()
        }
    }
    const handleClick = (key: string) => {
        setCurrency(key)
    }

    return (
        <header
            style={{
                width: '100%',
                height: '64px',
                backgroundColor: isShadow ? '#fff' : 'transparent',
                boxShadow: isShadow ? '0px 6px 16px -6px rgba(17, 12, 34, 0.10)' : 'unset',
                WebkitBoxShadow: isShadow ? '0px 6px 16px -6px rgba(17, 12, 34, 0.10)' : 'unset',
                MozBoxShadow: isShadow ? '0px 6px 16px -6px rgba(17, 12, 34, 0.10)' : 'unset',
            }}
            id="home_header"
            className={'header-container'}
        >
            <div onClick={() => setShowDrawer({isShow: true})} className={'icon-mobile'}>
                {/*<BarIcon/>*/}
            </div>
            <div className={'flex gap-4 items-center'}>
                <Link
                    passHref
                    prefetch
                    href={'/test/layout/home-options'}
                    className={'logo'}
                    suppressHydrationWarning
                    // onClick={() => router.push('/test/layout/home-options')}
                >
                    <Image
                        src={'/logo.png'}
                        alt={'logo'}
                        className={'!items-center'}
                        width={180}
                        height={36}
                    />
                </Link>
                <Select
                    className={'flex !mt-1.5'}
                    defaultValue={'vn'}
                    options={props.languages?.data.map((item: any, index: number) => ({
                        label:
                            <div className={'flex !items-center gap-2'}>
                                <Image alt={index.toString()} src={item.flagImageUrl} width={20}
                                       height={20}/>
                                <p>{item.name}</p>
                            </div>,
                        value: item.code,
                    }))}
                />
                <Dropdown
                    menu={{ items: dropdownItems }}
                    placement="topRight"
                    className={'mt-1.5'}
                    dropdownRender={(menus: any) => {
                        return (
                            <div className={'bg-white'}>
                                <div>
                                    <Input.Search className={'!rounded-[0px]'} placeholder={'Search for currency'}/>
                                </div>
                                <div className={'bg-white w-80 flex flex-wrap p-2 gap-2 h-80 overflow-auto'}>
                                    {
                                        menus?.props?.items?.map((item: any, index: number) =>
                                            <Tag className={'w-14 text-center'} key={index} onClick={() => handleClick(item.label)}>{item.label}</Tag>
                                        )
                                    }
                                </div>
                            </div>

                        )
                    }}
                >
                    <Button>{currency}</Button>
                </Dropdown>
            </div>

            <nav className={'navigate items-center !pr-0'}>
                <NavLink/>
                <div className={'wrapper-btns'}>
                    <Button
                        size="large"
                        type="text"
                        className={'text-red-500 font-medium'}
                        onClick={() => router.push('/test/login-test')}
                    >Đăng nhập
                    </Button>
                    <Button
                        type="primary"
                        className={'bg-red-500 font-medium'}
                        size="large"
                        onClick={() => router.push('/test/register-test')}
                    >
                        Đăng ký
                    </Button>
                </div>
            </nav>

            {
                <Drawer
                    width={280}
                    closable
                    open={showDrawer.isShow}
                    placement={'left'}
                    styles={
                        {
                            header: {
                                display: 'none'
                            }
                        }
                    }
                    onClose={() => setShowDrawer({
                        isShow: false
                    })}
                >
                    <div className={'grid gap-12'}>
                        <div className={`logo flex gap-3 items-center !text-[20px]`}>
                            <Image
                                src={'/logo.png'}
                                alt={'logo'}
                                className={'!items-center'}
                                width={160}
                                height={36}
                            />
                            <h3 id="_name1" itemProp="name" className={'heading'}>Vietfootage</h3>
                        </div>
                        <Menu
                            mode="vertical"
                            theme="light"
                            items={items}
                            className={'custom-ant-menu m-0'}
                            onClick={dispatchClick}
                        />
                        <Button
                            className={'flex items-center justify-center'}
                            type={'primary'}
                            // iconLeft={<LoginOutlined/>}
                            onClick={() => router.push('/test/auth/login')}
                        >Đăng nhập
                        </Button>
                    </div>
                </Drawer>
            }
        </header>
    )
}

export default HeaderScreen


