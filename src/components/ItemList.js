const ItemList = ({items}) => {
    // console.log(items);
  return (
    <div>
        
        {items.map((item) => (
        <div key ={item?.itemCards?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">            
            <div className="py-2">
                <span>{item.title}</span>
                <span> -  ₹{item.itemCards[1].card.info?.defaultPrice/100 || item.itemCards[1].card.info?.price/100 }</span>
            </div>
            <p className="text-xs">{item.itemCards[1].card.info.description}</p>
        </div>
        ))}        
    </div>
  )
}

export default ItemList