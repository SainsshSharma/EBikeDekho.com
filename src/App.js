
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import CardsMain from './components/cardsCarousel/CardsMain'
import { Routes,Route} from 'react-router-dom';
import { Home } from './Pages/Home';
import { ProductPage } from './Pages/ProductPage'


function App() {
  const [postData,setPostData]=useState([]);

  useEffect(()=>{
    const API_URL='https://fakestoreapi.com/products';
    //axios(API_URL).then((data)=>{setPostData(data.data)})//setPostData(data.data));    

    const getData=async()=>{
      try{
        const res=await axios.get(API_URL);
        setPostData(res.data);
        console.log(postData)
      }
      catch(e){
        console.log(e)
      }      
    }

    getData(); 
    
  },[]);  
  
  return (
    
    
      <Routes>
        <Route path='/' element={<Home content={postData}/>}/>
        <Route path='/ProductPage' element={<ProductPage />}/>
      </Routes>    
  );
}

export default App;
