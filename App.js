import React from "react"
import ReactDOM from "react-dom/client"
//import Header from "./Header";
//import RestorCard from "./RestorCard";
//import { resList } from "./data"; 



const Title = () =>(
    <h1 className="head" tabIndex="5">Namaste React using JSX</h1>
)


//const data= api.getData()
//const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

//console.log(jsxHeading)

// const HeadingComponent = () =>(
//     <div id="container">
//         {Title()}
//         <h1 className="heading">Namste React Functional Component</h1>
//     </div>
// )




const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/free-vector/ecofood-logo-template_1195-33.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Abiut us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const Style = {
    backgroundColor : "#f0f0f0",
}
const RestorCard = (props) => {
    const { resData } = props;

    const {name,avgRating,cuisines,costForTwo,deliveryTime} = resData?.data
    return (
        <div className="res-card" style={Style}>
            <img
              className="res-logo"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/6/18/466fa188-8eaa-4842-9b62-a65ded37a228_20a81bfa-9164-4b63-980d-59f124fd9d94.jpg"
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
const resList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "334476",
      "name": "KFC 1",
      "uuid": "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
      "city": "1",
      "area": "BTM Layout",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
      "cuisines": ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      "tags": [],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "slaString": "36 MINS",
      "lastMileTravel": 3.5,
      "slugs": {
        "restaurant": "kfc-btm-layout-btm",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "KFC restaurants, 942, SV Tower, 16th Main, BTM 2nd Stage, 560076",
      "locality": "2nd Stage",
      "parentId": 547,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "aggregatedDiscountInfo": {
        "header": "FREE DELIVERY",
        "shortDescriptionList": [
          {
            "meta": "FREE DELIVERY",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "FREE DELIVERY",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "",
        "shortDescriptionList": [
          {
            "meta": "Free Delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "Free Delivery",
            "discountType": "FREE_DELIVERY",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "3.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "334476",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 3.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.8",
      "totalRatings": 500,
      "new": false,
      "subtype": "basic"
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "334477",
      "name": "Pizza Hut",
      "uuid": "b2b8a3e0-7cd1-4b3a-8f21-b101e431874a",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "1K+ ratings",
      "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
      "cuisines": ["Pizza", "Italian"],
      "tags": [],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 4.0,
      "slugs": {
        "restaurant": "pizza-hut-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Pizza Hut, 5th Block, Koramangala, Bangalore",
      "locality": "5th Block",
      "parentId": 721,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "aggregatedDiscountInfo": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "50% off up to ₹100",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use TRYNEW",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
          {
            "meta": "Up to ₹100 off | Use TRYNEW",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "50% off up to ₹100 | Use TRYNEW",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "4 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "334477",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 4,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 1000,
      "new": false,
      "subtype": "basic"
    }
  },
  
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "334478",
      "name": "Domino's Pizza",
      "uuid": "12345678-aaaa-bbbb-cccc-123456abcdef",
      "city": "1",
      "area": "HSR Layout",
      "totalRatingsString": "1K+ ratings",
      "cloudinaryImageId": "pqbaxk41dbf8u3ph7qzv",
      "cuisines": ["Pizza", "Fast Food"],
      "tags": [],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 2.8,
      "slugs": {
        "restaurant": "dominos-pizza-hsr-layout",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Domino's Pizza, HSR Layout, Bangalore",
      "locality": "HSR",
      "parentId": 2456,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "aggregatedDiscountInfo": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "30% off up to ₹75",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use DOM30",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "Up to ₹75 off | Use DOM30",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹75 | Use DOM30",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "2.8 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "334478",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 2.8,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false,
      "subtype": "basic"
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "334479",
      "name": "McDonald's",
      "uuid": "abcd1111-2222-3333-4444-abcdef111111",
      "city": "1",
      "area": "Indiranagar",
      "totalRatingsString": "2K+ ratings",
      "cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
      "cuisines": ["Burgers", "Beverages"],
      "tags": [],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 3.2,
      "slugs": {
        "restaurant": "mcdonalds-indiranagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "McDonald's, CMH Road, Indiranagar, Bangalore",
      "locality": "CMH Road",
      "parentId": 630,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "aggregatedDiscountInfo": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "20% off up to ₹50",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use MC20",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "20% OFF",
        "shortDescriptionList": [
          {
            "meta": "Up to ₹50 off | Use MC20",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "20% off up to ₹50 | Use MC20",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "3.2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "334479",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 3.2,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 2000,
      "new": false,
      "subtype": "basic"
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "334480",
      "name": "Subway",
      "uuid": "abcd9999-8888-7777-6666-abcdef222222",
      "city": "1",
      "area": "JP Nagar",
      "totalRatingsString": "800+ ratings",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "cuisines": ["Healthy Food", "Salads"],
      "tags": [],
      "costForTwo": 28000,
      "costForTwoString": "₹280 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 2.0,
      "slugs": {
        "restaurant": "subway-jp-nagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Subway, JP Nagar 7th Phase, Bangalore",
      "locality": "JP Nagar",
      "parentId": 2,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "aggregatedDiscountInfo": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "40% off up to ₹80",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use SUB40",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
          {
            "meta": "Up to ₹80 off | Use SUB40",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "40% off up to ₹80 | Use SUB40",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "2 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "334480",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 2.0,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.3",
      "totalRatings": 800,
      "new": false,
      "subtype": "basic"
    }
  },
  
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "334481",
      "name": "Pizza Hut",
      "uuid": "abcde123-5678-90ab-cdef-1234567890ab",
      "city": "1",
      "area": "Koramangala",
      "totalRatingsString": "1.5K+ ratings",
      "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
      "cuisines": ["Pizza", "Italian"],
      "tags": [],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 30,
      "minDeliveryTime": 30,
      "maxDeliveryTime": 30,
      "slaString": "30 MINS",
      "lastMileTravel": 3.0,
      "slugs": {
        "restaurant": "pizza-hut-koramangala",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "Pizza Hut, Koramangala 5th Block, Bangalore",
      "locality": "5th Block",
      "parentId": 721,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "aggregatedDiscountInfo": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "30% off up to ₹100",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹100 | Use PH30",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "30% OFF",
        "shortDescriptionList": [
          {
            "meta": "Up to ₹100 off | Use PH30",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "30% off up to ₹100 | Use PH30",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "3 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "334481",
        "deliveryTime": 30,
        "minDeliveryTime": 30,
        "maxDeliveryTime": 30,
        "lastMileTravel": 3.0,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.2",
      "totalRatings": 1500,
      "new": false,
      "subtype": "basic"
    }
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "334482",
      "name": "A2B - Adyar Ananda Bhavan",
      "uuid": "a2b12345-6789-4abc-def0-aaaaaa111111",
      "city": "1",
      "area": "Jayanagar",
      "totalRatingsString": "1K+ ratings",
      "cloudinaryImageId": "iwg3fpyqrs2n0jhyaf2s",
      "cuisines": ["South Indian", "Sweets"],
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 2.5,
      "slugs": {
        "restaurant": "a2b-jayanagar",
        "city": "bangalore"
      },
      "cityState": "1",
      "address": "A2B, 3rd Block, Jayanagar, Bangalore",
      "locality": "3rd Block",
      "parentId": 22,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "aggregatedDiscountInfo": {
        "header": "15% OFF",
        "shortDescriptionList": [
          {
            "meta": "15% off up to ₹30",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "15% off up to ₹30 | Use A2B15",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "aggregatedDiscountInfoV2": {
        "header": "15% OFF",
        "shortDescriptionList": [
          {
            "meta": "Up to ₹30 off | Use A2B15",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "descriptionList": [
          {
            "meta": "15% off up to ₹30 | Use A2B15",
            "discountType": "PERCENTAGE",
            "operationType": "RESTAURANT"
          }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
      },
      "ribbon": [],
      "chain": [],
      "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "2.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "334482",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 2.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.5",
      "totalRatings": 1000,
      "new": false,
      "subtype": "basic"
    }
  }




]




const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestorCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);