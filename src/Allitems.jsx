import { useState, useEffect } from "react";

const Allitems = ({data}) => {
    const [items, setItems] = useState(data);
    useEffect(()=>{
        const show=()=>{
            setItems(data)
        }
        show()
    },[data])
    // console.log(data);
    const showVeg = ()=>{
        const mData = data.filter(item=>item.vegStatus === true);
        console.log(mData);
        setItems(mData)
    }
    const showNonVeg = ()=>{
        const mData = data.filter(item=>item.vegStatus === false);
        console.log(mData);
        setItems(mData)
    }
    const showAll = ()=>{
        setItems(data)
    }
    
    return(
            <div className="data">
                <ul>
                    {items.map(item=>(
                        <li key={item._id}>{item.name} {item.quantity} {item.price}</li>
                    ))}
                </ul>
                <button onClick={()=>showVeg()}>Show Only Veg</button>
                <button onClick={()=>showNonVeg()}>Show Only Non-Veg</button>
                <button onClick={()=>showAll()}>Show All</button>
            </div>
        );
};

export default Allitems;
