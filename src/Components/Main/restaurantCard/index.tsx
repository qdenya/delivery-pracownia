
type card = {
    // eslint-disable-next-line
    id: number;
    itemInfo: any;
    changeRestaurant: any;
}

const Card = ({ id, itemInfo, changeRestaurant }: card) => {

    const { image, name, stars, price, kitchen, time_of_delivery } = itemInfo;
    return (
        <a className="card card-restaurant" href="/#" onClick={() => {changeRestaurant(id, name, kitchen, price, stars)}}>
            <img src={"/" + image} alt="rest" className="card-image"/>
            <div className="card-text">
                <div className="card-heading">
                    <h3 className="card-title">{name}</h3>
                    <span className="card-tag tag">{time_of_delivery} min</span>
                </div>
                <div className="card-info">
                    <div className="rating">{stars}</div>
                    <div className="price">Od {price/100} zł</div>
                    <div className="category">{kitchen}</div>
                </div>
            </div>
        </a>
    );
}

export default Card;