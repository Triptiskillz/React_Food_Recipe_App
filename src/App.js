import React,{ useState,useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Recipes from './components/Recipes';
import Axios from "axios"; 
function App() {
  
  const[search,setSerach]= useState("chiken");
  const[recipes,setRecipes] = useState([]);
  const APP_ID="91c26b5d";
  const APP_KEY="8bb0aaa08083364ee8b964be6412d5ed";
 
  useEffect(async()=>{
   getRecipes();
  },[]);
const getRecipes =async()=>{
  const res= await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    
     setRecipes(res.data.hits);
};

  const onInputChange=(e)=>{
    setSerach(e.target.value);
  }
   const onSearchClick =()=>{
     getRecipes();
   }
  return (
    <div className="App">
     <Header search={search} 
     onInputChange={onInputChange}
     onSearchClick={onSearchClick}
     />
     <div className="container">
     <Recipes recipes={recipes}/>
     </div>
    </div>
  );
}

export default App;