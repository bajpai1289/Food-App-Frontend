import { useState, useEffect } from 'react'
import { /*useNavigate,*/  Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import './App.css'
import Allitems from './Allitems';
import AddItemForm from './components/AddItemForm';
// const URL = import.meta.env.VITE_API;

function App() {
  const [data, setData] = useState([]);
  // const navigate = useNavigate();
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await fetch('http://localhost:3500/fooditems');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  },[])
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Allitems data = {data}/>}/>
        <Route path='/add' element={<AddItemForm/>}/>
      </Routes>
    </>
  )
}

export default App
