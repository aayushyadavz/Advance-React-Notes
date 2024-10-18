const MenuCard = (props) => {

    return (
        <div className="item-card">
            <div className="item-detail">
                <h3>{props.name}</h3>
                <p className="item-price">₹ {props.price}</p>
                <p className="item-description">{props.description}</p>
            </div>
            <div>
                <img className="item-img" src={props.imageUrl} />
            </div>
        </div>
    )
}

export default MenuCard 