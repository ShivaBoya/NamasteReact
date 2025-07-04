import { CDN_URL } from "../utils/constants";



const Style = {
    backgroundColor : "#f0f0f0",
}


const RestaurantCard = (props) => {
    const { resData } = props;

    const {name,avgRating,cuisines,costForTwo,deliveryTime} = resData?.data
    return (
        <div className="res-card" style={Style}>
            <img
              className="res-logo"
              src={CDN_URL}
              alt="res-logo"
            />


            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{avgRating} Stars</h5>
            <h5>{costForTwo / 100} FOR TWO</h5>
            <h5>{deliveryTime} Minutes</h5>
        </div>
    );
};

export default RestaurantCard