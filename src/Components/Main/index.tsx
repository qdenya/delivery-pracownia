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
                            <h1 className="promo-title">Online-serwis <br />jedzenia na dowóz</h1>
                            <p className="promo-text">
                                Dania z ulubionej restauracji dostarczy kurier
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="promo kebab swiper-slide">
                            <h1 className="promo-title">Kebab <br />z rabatem 35%</h1>
                            <p className="promo-text">
                                Zamów kebab w jednej z restauracji do 10 lutego z rabatem po promokodu OMAGAD
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="promo vegetables swiper-slide">
                            <h1 className="promo-title">Rabat 20% <br /> po promokodu LOVE.JS</h1>
                            <p className="promo-text">
                                Danie z restauracji prywiezie kurier z książką po frontendu
                            </p>
                        </SwiperSlide>
                        <SwiperSlide className="promo sushi swiper-slide">
                            <h1 className="promo-title">Zestawy z rabatem 30% <br /> w restauracjach</h1>
                            <p className="promo-text">
                                Rabaty na zestawy do 10 lutego z promokodem DADADA
                            </p>
                        </SwiperSlide>
                    </Swiper>
                </section>
                <section className="restaurants">
                    <div className="section-heading">
                        <h2 className="section-title">Restauracje</h2>
                        <label className="search">
                            <input type="text" className="input input-search" placeholder="Szukaj dania i restauracje"/>
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
                        <h2 className="section-title restaurant-title">Pizza Plus</h2>
                        <div className="card-info">
                            <div className="rating">
                                4.5
                            </div>
                            <div className="price">Od 25,00 zł</div>
                            <div className="category">Pizza</div>
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