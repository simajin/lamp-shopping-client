import React,{ useState } from 'react';
import './index.scss';
import axios from 'axios';
import useAsync from '../customHook/useAsync';
import MainProduct from './MainProduct';
import { API_URL } from '../config/contansts';
import { Carousel } from 'antd';

async function getProducts() {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
}

// 슬라이더 스타일객체
const contentStyle = {
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
  };

const MainPage = () => {
    // 슬라이더 함수
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    const [state,refetch] = useAsync(getProducts,[])
    const { loading,data,error } = state;
    if(loading) return <div>로딩중.....</div>
    if(error) return <div>에러가 발생했습니다</div>
    if(!data) return <div>로딩중입니다</div>

    return (
        <div>
            <div id="main">
                <div id="banner">
                    <Carousel afterChange={onChange} autoplay>
                        <div>
                            <img src="images/banners/banner1.png" alt="" />
                            <h3 style={contentStyle}></h3>
                        </div>
                        <div>
                            <img src="images/banners/banner1.png" alt="" />
                            <h3 style={contentStyle}></h3>
                        </div>
                        <div>
                            <img src="images/banners/banner1.png" alt="" />
                            <h3 style={contentStyle}></h3>
                        </div>
                    </Carousel>
                </div>
                <div id="product-list" className="inner">
                    <h2>그린조명 최신상품</h2>
                    <div id="product-items">
                        {data.map(product=>
                            <MainProduct key={product.id} product={product}/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;