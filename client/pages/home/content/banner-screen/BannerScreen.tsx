'use client'
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import Image from "next/image";

export default function BannerScreen() {
    return (
        <Swiper
            className={'mt-0'}
            modules={[Navigation, Pagination]} // Import các module cần thiết
            navigation // Bật nút điều hướng
            pagination={{clickable: true}} // Bật phân trang
            spaceBetween={50} // Khoảng cách giữa các slide
            slidesPerView={1} // Số slide hiển thị mỗi lần
        >
            <SwiperSlide>
                <div style={{height: '450px', backgroundColor: '#ffadad'}}>
                    <Image src={'/home-banner/coverwebsite.png'} alt={'profile'} className={'w-screen object-cover'}
                           width={100} height={450}/>
                    <div className={'text-left'}>
                        <div
                            className="absolute text-white text-4xl font-extrabold top-[20%] left-[48%] transform -translate-x-[44%] -translate-y-[45%] lg:-translate-y-[107%] xl:-translate-y-[90%] min-w-max ng-star-inserted">
                            <div className="mb-1 ng-star-inserted">
                                <Image src={'/logo-banner.png'} alt={'logo'} height={35} width={200}/>
                                <p className="text-base font-extralight leading-4" >
                                   INNOVATIVE PLATFORM FOR INTERNATIONAL INVESTMENT
                               </p>
                            </div>
                            <p><span className="inline-block">OPPORTUNITY</span></p><p>TO CONNECT WITH</p><p>POTENTIAL SELLERS - INVESTORS</p></div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{height: '450px', backgroundColor: '#ffadad'}}>
                    <Image
                        src={'/home-banner/coverwebsite2.png'}
                        alt={'profile'}
                        className={'w-screen object-cover'}
                        width={100} height={450}
                    />
                    <div className={'text-left'}>
                        <div
                            className="absolute text-white text-4xl font-extrabold top-[20%] left-[48%] transform -translate-x-[44%] -translate-y-[45%] lg:-translate-y-[107%] xl:-translate-y-[90%] min-w-max ng-star-inserted">
                            <p><span className="inline-block">TECHNOLOGY SOLUTION</span></p><p>BLOCKCHAIN</p><p>IN CAPITAL FUNDING</p></div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div style={{height: '450px', backgroundColor: '#ffadad'}}>
                    <Image src={'/home-banner/coverwebsite4.png'} alt={'profile'} className={'w-screen object-cover'}
                           width={100} height={450}/>
                    <div className={'text-left'}>
                        <div
                            className="absolute text-white text-4xl font-extrabold top-[20%] left-[48%] transform -translate-x-[44%] -translate-y-[45%] lg:-translate-y-[107%] xl:-translate-y-[90%] min-w-max ng-star-inserted">
                            <p><span className="inline-block">INNOVATIVE PLATFORM FOR</span></p><p className={'text-red-500'}>INTERNATIONAL</p><p className={'text-red-500'}>INVESTMENT</p></div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
