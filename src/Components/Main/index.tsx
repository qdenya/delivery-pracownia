import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import axios from "axios";
import apiConfig from '../../Store/config';
import Card from "./restaurantCard";

interface RestaurantsTypes {
    map: any;
    image?: string;
    kitchen?: string;
    name?: string;
    price?: number;
    time?: string;
    products?: any;
  }
const Main =  () => {

    const [restaurants, setRestaurants] = useState<RestaurantsTypes>();

    useEffect(() => {
        var config = {
            method: 'get',
            url: apiConfig.hostname + '/getRestaurants',
            withCredentials: false,
        };
    
        axios(config)
            .then(function (response) {
                setRestaurants(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    


    
    return (
        <main className="main">
            <div className="container">
                <section className="container-promo swiper-container">
                    <Swiper 
                        pagination={true} 
                        navigation={true}
                        modules={[ Pagination, Autoplay, Navigation]} 
                        className="modal-more_slider"
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false
                        }}
                    >
                        <SwiperSlide className="promo pizza swiper-slide">
                            <h1 className="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
                            <p className="promo-text">
                                Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="promo kebab swiper-slide">
                            <h1 className="promo-title">Шашлыки на майские <br /> со скидкой 35%</h1>
                            <p className="promo-text">
                                Закажите шашлыки в любом ресторане до 10 мая и получите скидку по промокоду OMAGAD
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="promo vegetables swiper-slide">
                            <h1 className="promo-title">Скидка 20% на всю еду <br /> по промокоду LOVE.JS</h1>
                            <p className="promo-text">
                                Блюдо из ресторана привезут вместе с двумя подарочными книгами по фронтенду
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="promo sushi swiper-slide">
                            <h1 className="promo-title">Сеты со скидкой до 30% <br /> в ресторанах</h1>
                            <p className="promo-text">
                                Скидки на сеты до 30 мая по промокоду DADADA
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section className="restaurants">
                    <div className="section-heading">
                        <h2 className="section-title">Рестораны</h2>
                        <label className="search">
                            <input type="text" className="input input-search" placeholder="Поиск блюд и ресторанов"/>
                        </label>
                    </div>
                    <div className="cards cards-restaurants">
                        {restaurants?.map((item: any) => {
                            return <Card itemInfo={item}/>
                        })}
                    </div>
                </section>
                <section className="menu hide">
                    <div className="section-heading">
                        <h2 className="section-title restaurant-title">Пицца Плюс</h2>
                        <div className="card-info">
                            <div className="rating">
                                4.5
                            </div>
                            <div className="price">От 900 ₽</div>
                            <div className="category">Пицца</div>
                        </div>
                    </div>
                    <div className="cards cards-menu">
                        
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Main;