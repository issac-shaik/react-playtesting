import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src ="https://cdn.freebiesupply.com/logos/large/2x/the-eatery-logo-black-and-white.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData} = props;

    const { 
        cloudinaryImageId, 
        name, 
        cuisines,
        avgRating, 
        costForTwo,
        deliveryTime,
    } = resData?.info; 
    
    
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }/>
            <h3 className="res-name">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};

const resList = [

    {
          "info": {
                "id": "11091",
                "name": "Pizza Hut",
                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                "locality": "Attapur",
                "areaName": "Attapur",
                "costForTwo": "₹350 for two",
                "cuisines": [
                      "Pizzas"
                ],
                "avgRating": 4,
                "parentId": "721",
                "avgRatingString": "4.0",
                "totalRatingsString": "10K+",
                "sla": {
                      "deliveryTime": 47,
                      "lastMileTravel": 2.1,
                      "serviceability": "SERVICEABLE",
                      "slaString": "45-50 mins",
                      "lastMileTravelString": "2.1 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-16 04:00:00",
                      "opened": true
                },
                "badges": { },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": { }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "50% OFF",
                      "subHeader": "UPTO ₹100"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/pizza-hut-attapur-hyderabad-11091",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "360967",
                "name": "Wow! Momo",
                "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
                "locality": "Vishwa Bhawan",
                "areaName": "Himayath Nagar",
                "costForTwo": "₹300 for two",
                "cuisines": [
                      "Tibetan",
                      "Healthy Food",
                      "Asian",
                      "Chinese",
                      "Snacks",
                      "Continental",
                      "Desserts",
                      "Beverages"
                ],
                "avgRating": 4.3,
                "parentId": "1776",
                "avgRatingString": "4.3",
                "totalRatingsString": "5K+",
                "sla": {
                      "deliveryTime": 61,
                      "lastMileTravel": 8.2,
                      "serviceability": "SERVICEABLE",
                      "slaString": "60-65 mins",
                      "lastMileTravelString": "8.2 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-16 00:00:00",
                      "opened": true
                },
                "badges": { },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": { }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "60% OFF",
                      "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/wow-momo-vishwa-bhawan-himayath-nagar-hyderabad-360967",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "6994",
                "name": "Santosh Dhaba Exclusive",
                "cloudinaryImageId": "jllcesio37olflwnvter",
                "locality": "Abids",
                "areaName": "Koti",
                "costForTwo": "₹300 for two",
                "cuisines": [
                      "Biryani",
                      "Chinese",
                      "Italian",
                      "Mexican",
                      "Desserts"
                ],
                "avgRating": 4.3,
                "parentId": "8784",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                      "deliveryTime": 55,
                      "lastMileTravel": 6.6,
                      "serviceability": "SERVICEABLE",
                      "slaString": "55-60 mins",
                      "lastMileTravelString": "6.6 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-15 23:59:00",
                      "opened": true
                },
                "badges": {
                      "imageBadges": [
                            {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                            }
                      ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": {
                                  "badgeObject": [
                                        {
                                              "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                              }
                                        }
                                  ]
                            },
                            "textBased": { },
                            "textExtendedBadges": { }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "30% OFF",
                      "subHeader": "UPTO ₹75"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/santosh-dhaba-exclusive-abids-koti-hyderabad-6994",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "128084",
                "name": "UBQ by Barbeque Nation",
                "cloudinaryImageId": "nnz4fwtwbgwkscikeqiv",
                "locality": "ANR Center",
                "areaName": "Banjara Hills",
                "costForTwo": "₹300 for two",
                "cuisines": [
                      "North Indian",
                      "Barbecue",
                      "Biryani",
                      "Kebabs",
                      "Mughlai",
                      "Desserts"
                ],
                "avgRating": 3.9,
                "parentId": "10804",
                "avgRatingString": "3.9",
                "totalRatingsString": "5K+",
                "sla": {
                      "deliveryTime": 65,
                      "lastMileTravel": 6.1,
                      "serviceability": "SERVICEABLE",
                      "slaString": "60-65 mins",
                      "lastMileTravelString": "6.1 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-15 23:30:00",
                      "opened": true
                },
                "badges": { },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": { }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "₹125 OFF",
                      "subHeader": "ABOVE ₹799",
                      "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-anr-center-banjara-hills-hyderabad-128084",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "52631",
                "name": "McDonald's",
                "cloudinaryImageId": "f62564e14944753903849c4ef673af4d",
                "locality": "Namishree Mantra Mall, Upperpally village",
                "areaName": "Rambagh Colony",
                "costForTwo": "₹400 for two",
                "cuisines": [
                      "Burgers",
                      "Beverages",
                      "Cafe",
                      "Desserts"
                ],
                "avgRating": 4.2,
                "parentId": "630",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                      "deliveryTime": 32,
                      "lastMileTravel": 4.6,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "4.6 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-16 02:45:00",
                      "opened": true
                },
                "badges": {
                      "textExtendedBadges": [
                            {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C"
                            }
                      ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": {
                                  "badgeObject": [
                                        {
                                              "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "shortDescription": "options available"
                                              }
                                        }
                                  ]
                            }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹199"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/mcdonalds-namishree-mantra-mall-upperpally-village-rambagh-colony-hyderabad-52631",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "349854",
                "name": "KFC",
                "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                "locality": "Ranga",
                "areaName": "Attapur",
                "costForTwo": "₹400 for two",
                "cuisines": [
                      "Burgers",
                      "Biryani",
                      "American",
                      "Snacks",
                      "Fast Food"
                ],
                "avgRating": 4,
                "parentId": "547",
                "avgRatingString": "4.0",
                "totalRatingsString": "5K+",
                "sla": {
                      "deliveryTime": 42,
                      "lastMileTravel": 4.3,
                      "serviceability": "SERVICEABLE",
                      "slaString": "40-45 mins",
                      "lastMileTravelString": "4.3 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-15 23:00:00",
                      "opened": true
                },
                "badges": { },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": { }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "40% OFF",
                      "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/kfc-ranga-attapur-hyderabad-349854",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "30253",
                "name": "Agra Sweets Banjara",
                "cloudinaryImageId": "nav4ebkoxrwlladx7a5m",
                "locality": "Utkoor- Mogdumpur road",
                "areaName": "Rambagh Colony",
                "costForTwo": "₹250 for two",
                "cuisines": [
                      "Sweets",
                      "Desserts",
                      "Chaat",
                      "Snacks",
                      "Beverages"
                ],
                "avgRating": 4.3,
                "veg": true,
                "parentId": "34",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                      "deliveryTime": 30,
                      "lastMileTravel": 3.5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "3.5 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-15 23:00:00",
                      "opened": true
                },
                "badges": {
                      "imageBadges": [
                            {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                            }
                      ],
                      "textExtendedBadges": [
                            {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C"
                            }
                      ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": {
                                  "badgeObject": [
                                        {
                                              "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                              }
                                        }
                                  ]
                            },
                            "textBased": { },
                            "textExtendedBadges": {
                                  "badgeObject": [
                                        {
                                              "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "shortDescription": "options available"
                                              }
                                        }
                                  ]
                            }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "40% OFF",
                      "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/agra-sweets-banjara-utkoor-mogdumpur-road-rambagh-colony-hyderabad-30253",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "9296",
                "name": "Subway",
                "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
                "locality": "Humayun Nagar",
                "areaName": "Mehdipatnam",
                "costForTwo": "₹350 for two",
                "cuisines": [
                      "Salads",
                      "Snacks",
                      "Desserts",
                      "Beverages"
                ],
                "avgRating": 3.8,
                "parentId": "2",
                "avgRatingString": "3.8",
                "totalRatingsString": "10K+",
                "sla": {
                      "deliveryTime": 31,
                      "lastMileTravel": 2.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "2.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-16 05:00:00",
                      "opened": true
                },
                "badges": {
                      "textExtendedBadges": [
                            {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C"
                            }
                      ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": {
                                  "badgeObject": [
                                        {
                                              "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "shortDescription": "options available"
                                              }
                                        }
                                  ]
                            }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "30% OFF",
                      "subHeader": "UPTO ₹75"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/subway-humayun-nagar-mehdipatnam-hyderabad-9296",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "150646",
                "name": "Cream Stone Ice Cream",
                "cloudinaryImageId": "446d21ee42c51e1bccc4973d659cf815",
                "locality": "Goshamahal",
                "areaName": "Himayath Nagar",
                "costForTwo": "₹250 for two",
                "cuisines": [
                      "Ice Cream",
                      "Desserts",
                      "Beverages",
                      "Ice Cream Cakes"
                ],
                "avgRating": 4.4,
                "veg": true,
                "parentId": "289",
                "avgRatingString": "4.4",
                "totalRatingsString": "10K+",
                "sla": {
                      "deliveryTime": 36,
                      "lastMileTravel": 4.3,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "4.3 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-16 03:30:00",
                      "opened": true
                },
                "badges": {
                      "textExtendedBadges": [
                            {
                                  "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                  "shortDescription": "Perfect Cake Delivery",
                                  "fontColor": "#7E808C"
                            }
                      ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": {
                                  "badgeObject": [
                                        {
                                              "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                                    "shortDescription": "Perfect Cake Delivery"
                                              }
                                        }
                                  ]
                            }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "40% OFF",
                      "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/cream-stone-ice-cream-goshamahal-himayath-nagar-hyderabad-150646",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "312287",
                "name": "Zomoz - The Momo Company",
                "cloudinaryImageId": "okkier1zvmpp2p3xccji",
                "locality": "Santosh Nagar",
                "areaName": "Mehdipatnam",
                "costForTwo": "₹250 for two",
                "cuisines": [
                      "Chinese",
                      "Tibetan",
                      "North Eastern",
                      "Street Food",
                      "Asian",
                      "Fast Food"
                ],
                "avgRating": 4.4,
                "parentId": "10838",
                "avgRatingString": "4.4",
                "totalRatingsString": "1K+",
                "sla": {
                      "deliveryTime": 31,
                      "lastMileTravel": 2.3,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "2.3 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-15 23:45:00",
                      "opened": true
                },
                "badges": { },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": { }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "40% OFF",
                      "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/zomoz-the-momo-company-santosh-nagar-mehdipatnam-hyderabad-312287",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "362596",
                "name": "Burger King",
                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                "locality": "M Cube Mall",
                "areaName": "Attapur",
                "costForTwo": "₹350 for two",
                "cuisines": [
                      "Burgers",
                      "American"
                ],
                "avgRating": 4.1,
                "parentId": "166",
                "avgRatingString": "4.1",
                "totalRatingsString": "10K+",
                "sla": {
                      "deliveryTime": 32,
                      "lastMileTravel": 2.1,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "2.1 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-16 05:00:00",
                      "opened": true
                },
                "badges": { },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": { }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "ITEMS",
                      "subHeader": "AT ₹129"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/burger-king-m-cube-mall-attapur-hyderabad-362596",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "25251",
                "name": "Meridian Restaurant",
                "cloudinaryImageId": "cxvuxxwpkicbqo3nkqiy",
                "locality": "Panjagutta",
                "areaName": "Panjagutta",
                "costForTwo": "₹400 for two",
                "cuisines": [
                      "Biryani",
                      "Chinese",
                      "Kebabs"
                ],
                "avgRating": 4.3,
                "parentId": "19276",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                      "deliveryTime": 66,
                      "lastMileTravel": 8.3,
                      "serviceability": "SERVICEABLE",
                      "slaString": "65-70 mins",
                      "lastMileTravelString": "8.3 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-16 01:00:00",
                      "opened": true
                },
                "badges": { },
                "isOpen": true,
                "aggregatedDiscountInfoV2": { },
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": { }
                      }
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/meridian-restaurant-panjagutta-hyderabad-25251",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "413629",
                "name": "CakeZone Patisserie",
                "cloudinaryImageId": "ddceb5f9328a03e337d1f36b3dfd16ff",
                "locality": "SATHYA NARAYAN NAGAR",
                "areaName": "Opp:Mythri Hospital",
                "costForTwo": "₹200 for two",
                "cuisines": [
                      "Bakery",
                      "Desserts",
                      "Sweets",
                      "Ice Cream"
                ],
                "avgRating": 4.3,
                "parentId": "7003",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                      "deliveryTime": 35,
                      "lastMileTravel": 1.8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "1.8 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-16 00:00:00",
                      "opened": true
                },
                "badges": {
                      "textExtendedBadges": [
                            {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C"
                            }
                      ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": {
                                  "badgeObject": [
                                        {
                                              "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "shortDescription": "options available"
                                              }
                                        }
                                  ]
                            }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "60% OFF",
                      "subHeader": "UPTO ₹120"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/cakezone-patisserie-sathya-narayan-nagar-opp-mythri-hospital-hyderabad-413629",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "262087",
                "name": "Imperial Multi-Cusine Restaurant",
                "cloudinaryImageId": "rqlwvsmzcfxbg9u6ajgm",
                "locality": "Banjara Hills",
                "areaName": "Redhills",
                "costForTwo": "₹400 for two",
                "cuisines": [
                      "Biryani",
                      "Chinese",
                      "Indian",
                      "Kebabs",
                      "Tandoor"
                ],
                "avgRating": 4.2,
                "parentId": "19254",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                      "deliveryTime": 49,
                      "lastMileTravel": 5.5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "45-50 mins",
                      "lastMileTravelString": "5.5 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-15 23:59:00",
                      "opened": true
                },
                "badges": { },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": { }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "₹150 OFF",
                      "subHeader": "ABOVE ₹349",
                      "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/imperial-multi-cusine-restaurant-banjara-hills-redhills-hyderabad-262087",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "3324",
                "name": "Srikanya",
                "cloudinaryImageId": "tw4ytwle8yommmgdy4b0",
                "locality": "Kondapur",
                "areaName": "Punjagutta",
                "costForTwo": "₹250 for two",
                "cuisines": [
                      "Andhra",
                      "Seafood"
                ],
                "avgRating": 4.3,
                "parentId": "7317",
                "avgRatingString": "4.3",
                "totalRatingsString": "10K+",
                "sla": {
                      "deliveryTime": 65,
                      "lastMileTravel": 8,
                      "serviceability": "SERVICEABLE",
                      "slaString": "65-70 mins",
                      "lastMileTravelString": "8.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-15 15:30:00",
                      "opened": true
                },
                "badges": { },
                "isOpen": true,
                "aggregatedDiscountInfoV2": { },
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": { }
                      }
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/srikanya-kondapur-punjagutta-hyderabad-3324",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "9276",
                "name": "Kinara Grand",
                "cloudinaryImageId": "fe8291a4d9ac30500ed2898121bbe623",
                "locality": "Attapur",
                "areaName": "Langar Houz",
                "costForTwo": "₹500 for two",
                "cuisines": [
                      "Biryani",
                      "North Indian",
                      "Chinese"
                ],
                "avgRating": 4.2,
                "parentId": "8469",
                "avgRatingString": "4.2",
                "totalRatingsString": "10K+",
                "sla": {
                      "deliveryTime": 27,
                      "lastMileTravel": 1.5,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "1.5 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-15 23:30:00",
                      "opened": true
                },
                "badges": { },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": { }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "40% OFF",
                      "subHeader": "UPTO ₹80"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/kinara-grand-attapur-langar-houz-hyderabad-9276",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "160128",
                "name": "KS Bakers",
                "cloudinaryImageId": "6127cb288329ad1c9e988276914d48ad",
                "locality": "Somi Reddy Nagar",
                "areaName": "Attapur",
                "costForTwo": "₹300 for two",
                "cuisines": [
                      "Bakery",
                      "Pizzas",
                      "Desserts",
                      "Snacks",
                      "Fast Food"
                ],
                "avgRating": 4.1,
                "parentId": "574",
                "avgRatingString": "4.1",
                "totalRatingsString": "5K+",
                "sla": {
                      "deliveryTime": 26,
                      "lastMileTravel": 2.1,
                      "serviceability": "SERVICEABLE",
                      "slaString": "25-30 mins",
                      "lastMileTravelString": "2.1 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-15 22:45:00",
                      "opened": true
                },
                "badges": {
                      "textExtendedBadges": [
                            {
                                  "iconId": "v1704784556/Ratnesh_Badges/Listing_2x.png",
                                  "shortDescription": "Perfect Cake Delivery",
                                  "fontColor": "#7E808C"
                            }
                      ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": {
                                  "badgeObject": [
                                        {
                                              "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "v1704784556/Ratnesh_Badges/Listing_2x.png",
                                                    "shortDescription": "Perfect Cake Delivery"
                                              }
                                        }
                                  ]
                            }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "₹50 OFF",
                      "subHeader": "ABOVE ₹249",
                      "discountTag": "FLAT DEAL"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/ks-bakers-somi-reddy-nagar-attapur-hyderabad-160128",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "57215",
                "name": "Sweet Truth - Cake and Desserts",
                "cloudinaryImageId": "81cf6bfe2760a45a0caf2e28716ca4d7",
                "locality": "Hydershahkot Village",
                "areaName": "Sun City",
                "costForTwo": "₹450 for two",
                "cuisines": [
                      "Snacks",
                      "Bakery",
                      "Desserts",
                      "Beverages"
                ],
                "avgRating": 4.3,
                "parentId": "4444",
                "avgRatingString": "4.3",
                "totalRatingsString": "1K+",
                "sla": {
                      "deliveryTime": 35,
                      "lastMileTravel": 6.2,
                      "serviceability": "SERVICEABLE",
                      "slaString": "35-40 mins",
                      "lastMileTravelString": "6.2 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-15 23:59:00",
                      "opened": true
                },
                "badges": {
                      "textExtendedBadges": [
                            {
                                  "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                  "shortDescription": "Perfect Cake Delivery",
                                  "fontColor": "#7E808C"
                            }
                      ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": {
                                  "badgeObject": [
                                        {
                                              "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                                    "shortDescription": "Perfect Cake Delivery"
                                              }
                                        }
                                  ]
                            }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "60% OFF",
                      "subHeader": "UPTO ₹110"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-hydershahkot-village-sun-city-hyderabad-57215",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "156138",
                "name": "The Good Bowl",
                "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
                "locality": "Mehdipatnam FC",
                "areaName": "Humayun Nagar",
                "costForTwo": "₹400 for two",
                "cuisines": [
                      "Biryani",
                      "North Indian",
                      "Pastas",
                      "Punjabi",
                      "Desserts",
                      "Beverages"
                ],
                "avgRating": 4,
                "parentId": "7918",
                "avgRatingString": "4.0",
                "totalRatingsString": "1K+",
                "sla": {
                      "deliveryTime": 41,
                      "lastMileTravel": 2.9,
                      "serviceability": "SERVICEABLE",
                      "slaString": "40-45 mins",
                      "lastMileTravelString": "2.9 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-15 23:59:00",
                      "opened": true
                },
                "badges": {
                      "textExtendedBadges": [
                            {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C"
                            }
                      ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": {
                                  "badgeObject": [
                                        {
                                              "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                                    "shortDescription": "options available"
                                              }
                                        }
                                  ]
                            }
                      }
                },
                "aggregatedDiscountInfoV3": {
                      "header": "60% OFF",
                      "subHeader": "UPTO ₹110"
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/the-good-bowl-mehdipatnam-fc-humayun-nagar-hyderabad-156138",
                "type": "WEBLINK"
          }
    },
    {
          "info": {
                "id": "10060",
                "name": "Karachi Bakery",
                "cloudinaryImageId": "lp1bygmtdn2kq13soyan",
                "locality": "Huda Colony",
                "areaName": "Somi Reddy Nagar",
                "costForTwo": "₹250 for two",
                "cuisines": [
                      "Bakery",
                      "Desserts"
                ],
                "avgRating": 4.3,
                "parentId": "1262",
                "avgRatingString": "4.3",
                "totalRatingsString": "5K+",
                "sla": {
                      "deliveryTime": 33,
                      "lastMileTravel": 2,
                      "serviceability": "SERVICEABLE",
                      "slaString": "30-35 mins",
                      "lastMileTravelString": "2.0 km",
                      "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                      "nextCloseTime": "2024-03-15 21:00:00",
                      "opened": true
                },
                "badges": {
                      "textExtendedBadges": [
                            {
                                  "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                  "shortDescription": "Perfect Cake Delivery",
                                  "fontColor": "#7E808C"
                            }
                      ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": { },
                "type": "F",
                "badgesV2": {
                      "entityBadges": {
                            "imageBased": { },
                            "textBased": { },
                            "textExtendedBadges": {
                                  "badgeObject": [
                                        {
                                              "attributes": {
                                                    "description": "",
                                                    "fontColor": "#7E808C",
                                                    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                                    "shortDescription": "Perfect Cake Delivery"
                                              }
                                        }
                                  ]
                            }
                      }
                },
                "differentiatedUi": {
                      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                      "differentiatedUiMediaDetails": {
                            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                            "lottie": { },
                            "video": { }
                      }
                },
                "reviewsSummary": { },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": { }
          },
          "analytics": { },
          "cta": {
                "link": "https://www.swiggy.com/restaurants/karachi-bakery-huda-colony-somi-reddy-nagar-hyderabad-10060",
                "type": "WEBLINK"
          }
    }

];

const Body = () => {
    return (
        <div className="body">
            {/* <div className="search">Search</div> */}
            <div className="res-container">
                {
                    resList.map(restaurant => <RestaurantCard key= {restaurant.info.id} resData={restaurant} />)
                }
                
            </div>
        </div>
    )
} 

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);