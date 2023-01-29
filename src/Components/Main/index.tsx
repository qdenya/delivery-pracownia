import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper";
import { useEffect, useState } from "react";
import axios from "axios";

import apiConfig from '../../Store/config';

import Card from "./restaurantCard";
import DishCard from "./dishCard";

interface RestaurantsTypes {
    map: any;
    image?: string;
    kitchen?: string;
    name?: string;
    price?: number;
    time?: string;
    products?: any;
}

const Main = () => {

    const [restaurants, setRestaurants] = useState<any[]>([])

    const [selectRestaurant, setSelectRestaurant] = useState({
        id: -1,
        title: "",
        kitchen: "",
        price: 0,
        stars: ''
    });

    const [cart, setCart] = useState({
        items: [{id: '', count: 0, price: 0, total: 0}],
        total: 0
    });

    useEffect(() => {
        var config = {
            method: 'get',
            url: apiConfig.hostname + '/getRestaurants',
            withCredentials: false,
        };
    
        axios(config)
            .then(function (response) {
                setRestaurants(response.data);
                console.log(restaurants[1]['products']);
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        let tmpPrice = 0;
        let tmpCount = 0;

        for(let i=0; i<cart.items.length; i++) {
            tmpCount = tmpCount + cart.items[i].count;
            tmpPrice = tmpPrice + cart.items[i].total;
        }

        console.log(cart);
        
        console.log(tmpCount, tmpPrice);
        

    }, [cart]);

    const changeRestaurant = (id: number, title: string, kitchen: string, price: number, stars: string) => {
        setSelectRestaurant({
            id: id,
            title: title,
            kitchen: kitchen,
            price: price/100,
            stars: stars
        });
    }

    const addToCart = (id: string, num: number, price: number) => {
        const item = cart.items.find(item => item.id === id);

        if(item) {
            setCart({
                ...cart,
                items: cart.items.map((product) => {
                    if(product.id === id) {
                        return { ...product, count: product.count+1, total: product.price*(product.count+1)}
                    } else {
                        return product;
                    }
                })
            });
        } else {
            setCart({
                ...cart,
                items: [...cart.items, {id: id, count: 1, price: price, total: price}]
            });
        }

    
        
    }

    const removeFromCart = (id: string) => {
        const item = cart.items.find(item => item.id === id);

        if(item) {
            setCart({
                ...cart,
                items: cart.items.filter((product) => {
                    if(product.id !== id) {
                        return { ...product, count: product.count+1 }
                    } 
                })
            });
        } 
        
    }

    const selectMenu = () => {
        if(selectRestaurant.id >= 0) {
            return(
                <section className="menu">
                    <div className="section-heading">
                        <button className="menu-back" onClick={() => {
                            setSelectRestaurant({
                                ...selectRestaurant,
                                id: -1
                            });}}>Powrót do listy restauracji</button>
                        <h2 className="section-title restaurant-title">{selectRestaurant.title}</h2>
                        <div className="card-info">
                            <div className="rating">
                                {selectRestaurant.stars}
                            </div>
                            <div className="price">Od {selectRestaurant.price} zł</div>
                            <div className="category">{selectRestaurant.kitchen}</div>
                        </div>
                    </div>
                    <div className="cards cards-menu">
                        {restaurants[selectRestaurant.id]['products']?.map((item: any) => {
                            return <DishCard 
                                        key={item.id}
                                        itemInfo={item}
                                        addBtn={addToCart}
                                    />
                        })}
                    </div>
                </section>
            );
        }
        return(
            <div className="menu"></div>
        );
    }

    let i = 0; 
    
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
                <section className="restaurants" style={selectRestaurant.id < 0 ? {display: "block"} : {display: 'none'}}>
                    <div className="section-heading">
                        <h2 className="section-title">Restauracje</h2>
                        <label className="search">
                            <input type="text" className="input input-search" placeholder="Szukaj dania i restauracje"/>
                        </label>
                    </div>
                    <div className="cards cards-restaurants">
                        {restaurants ? restaurants.map((item: any) => {
                            return <Card 
                                        key={item.id}
                                        id={item.id}
                                        itemInfo={item}
                                        changeRestaurant={changeRestaurant}
                                    />
                        }) : "...loading..."}
                    </div>
                </section>
                {selectMenu()}
            </div>
        </main>
    );
}

export default Main;