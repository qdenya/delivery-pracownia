
type card = {
    // eslint-disable-next-line
    itemInfo: any;
}

const Card = ({ itemInfo }: card) => {

    const { image, name, stars, price, kitchen, time_of_delivery } = itemInfo;
    return (
        <a className="card card-restaurant" href="/#">
            <img src={"/" + image} alt="rest" className="card-image"/>
            <div className="card-text">
                <div className="card-heading">
                    <h3 className="card-title">{name}</h3>
                    <span className="card-tag tag">{time_of_delivery} мин</span>
                </div>
                <div className="card-info">
                    <div className="rating">{stars}</div>
                    <div className="price">От {price} zł</div>
                    <div className="category">{kitchen}</div>
                </div>
            </div>
        </a>
    );
}

export default Card;