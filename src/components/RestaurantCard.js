import {CON_URL} from "../utils/constants"

const RestaurantCard = (props) => {
    const {resData} = props;

    const { 
        cloudinaryImageId, 
        name, 
        cuisines,
        avgRating, 
        costForTwo,
        sla        
    } = resData?.info;     
    
    return (
        <div className="m-4 p-4 w-[200px] rounded-lg bg-stone-200 hover:bg-stone-400">
            <img className="rounded-md" alt="res-logo" 
            src={ CON_URL + cloudinaryImageId }/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString}</h4>
        </div>
    );
};

// Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label> Pure-Veg 🌱</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}


export default RestaurantCard;