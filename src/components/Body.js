import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData";



const Body = () => {

  let  listOfRestaurants = [{
    "data": {
      "id": "334476",
      "name": "KFC 1",
      "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
      "cuisines": ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      "costForTwo": 40000,
      "deliveryTime": 36,
      "avgRating": "3.8",
    }
  },
  {
       "data": {
      "id": "33447",
      "name": "Dominos",
      "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
      "cuisines": ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      "costForTwo": 40000,
      "deliveryTime": 36,
      "avgRating": "4.8",
    }
  },
  ]
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
            listOfRestaurants=listOfRestaurants.filter(
              (res) => res.data.listOfRestaurants >4
            ) ;
            console.log(listOfRestaurants)
        }}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};


export default Body