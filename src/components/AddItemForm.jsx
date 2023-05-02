// import React from "react";
import { useNavigate } from "react-router-dom";
const AddItemForm = () => {
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const {name, price, quantity, status} = e.target;
        const res = status.value!=="N"
        if(!name || !price) return alert("name and price are required");
        try {
            await fetch('http://localhost:3500/fooditems/add',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "name": name.value,
                    "price":price.value,
                    "quantity": quantity.value?quantity.value:"1 plate",
                    "vgStatus":res
                })
            })
            console.log(`${name.value} ${res} has been added`);
            // navigate('/')
            
        } catch (err) {
            console.error(err)
        }
    }
  return (
  <form action="" onSubmit={(e)=>handleSubmit(e)}>
    <input type="text" placeholder="Name" name="name"/>
    <input type="number" placeholder="Price" name="price"/>
    <input type="number" placeholder="Quantity" name="quantity"/>
    <select name="status" id="v">
        <option value="V">Veg</option>
        <option value="N">Non-Veg</option>
    </select>

    <button type="submit">Submit</button>
  </form>
    );
};

export default AddItemForm;
