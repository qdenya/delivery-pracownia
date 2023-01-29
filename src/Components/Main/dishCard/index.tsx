type card = {
    // eslint-disable-next-line
    itemInfo: any;
    addBtn: any;
}

const DishCard = ({ itemInfo, addBtn }: card) => {

    const { image, name, description, id, price } = itemInfo;
    return(
        <div className="card">
            <img src={image} alt="image" className="card-image"/>
            <div className="card-text">
                <div className="card-heading">
                    <h3 className="card-title card-title-reg">{name}</h3>
                </div>
                <div className="card-info">
                    <div className="ingredients">{description}</div>
                </div>
                <div className="card-buttons">
                    <button className="button button-primary button-add-cart" id={id} onClick={() => {addBtn(id, 1, price)}}>
                        <span className="button-card-text">В корзину</span>
                        <span className="button-cart-svg"></span>
                    </button>
                    <strong className="card-price card-price-bold">{price/100} zł</strong>
                </div>
            </div>
        </div>
    )
};

export default DishCard;