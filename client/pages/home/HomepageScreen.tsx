'use client'
import {Content, Header,Footer} from "antd/es/layout/layout";
import React from "react";
import {Layout, MenuProps} from 'antd'
import ContentScreen from "@/client/pages/home/content/ContentScreen";
import HeaderScreen from "@/client/pages/home/header/HeaderScreen";
type MenuItem = Required<MenuProps>['items'][number];

const layoutStyle = {
    borderRadius: 0,
    overflow: 'hidden',
    margin: 0,
    padding: 0,
};
const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    // lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};
const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    // maxWidth: '70vw',
    position: 'sticky',

    color: 'black',
    gap: 12,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 64,
    padding: 0,
    justifyContent:'space-between',
    backgroundColor: '#ffff',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#ffff',
};

const items: MenuItem[] = [
    {
        label: 'Trang chủ',
        key: 'home',
    },
    {
        label: 'Bên bán',
        key: 'ben-ban',
    },
    {
        label: 'Bên mua',
        key: 'ben-mua',
    },
    {
        label: 'Hướng dẫn',
        key: 'huong-dan',
        children: [
            {
                key: 'dich-vu-danh-cho-ben-ban',
                label: 'Dịch vụ dành cho bên bán',
            },
            {
                key: 'dich-vu-danh-cho-ben-mua',
                label: 'Dịch vụ dành cho bên mua',
            },
            {
                key: 'dang-ky-goi-hien-thi-ho-so',
                label: 'Đăng ký gói hiển thị hồ sơ',
            },
            {
                key: 'cong-cu-dinh-gia-doanh-nghiep',
                label: 'Công cụ định giá doanh nghiệp',
            },
        ],
    },
    {
        label: 'Hỏi đáp',
        key: 'hoi-dap'
    },
    {
        label: 'Về INMERGERS',
        key: 'gioi-thieu'
    },
];

const HomepageScreen = (props: {
    languages?: any
    currencies: any
}) => {
    const onClick: MenuProps['onClick'] = (e) => {
    };
    console.log(props)
    return (
        <div className={'!w-screen !h-screen'}>
            <Layout style={layoutStyle} className={'!w-screen !h-screen !bg-white'}>
                <Header style={headerStyle}>
                    <HeaderScreen languages={props.languages} currencies={props.currencies}/>
                </Header>
                    {/*<div className={'flex w-screen h-full p-2 justify-between'}>*/}
                    {/*    <div className={'flex gap-8 !w-96 items-center'}>*/}
                    {/*        <Image*/}
                    {/*            src={'/logo.png'}*/}
                    {/*            alt={'logo'}*/}
                    {/*            className={'!items-center'}*/}
                    {/*            width={180}*/}
                    {/*            height={36}*/}
                    {/*        />*/}

                    {/*    </div>*/}
                    {/*    <div className={'flex gap-6 w-2/3 justify-end'}>*/}
                    {/*        <Menu*/}
                    {/*            className={'!h-full w-1/2 '}*/}
                    {/*            onClick={onClick}*/}
                    {/*            selectedKeys={['mail']}*/}
                    {/*            mode="horizontal"*/}
                    {/*            items={items}*/}
                    {/*        />*/}
                    {/*        <Space className={'flex'}>*/}
                    {/*            <Button type={'text'}>*/}
                    {/*                Đăng nhập*/}
                    {/*            </Button>*/}
                    {/*            <Button>*/}
                    {/*                Đăng ký*/}
                    {/*            </Button>*/}
                    {/*        </Space>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                <Content style={contentStyle}><ContentScreen/></Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </div>

    )
}
export default HomepageScreen;
