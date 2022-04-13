import axios from 'axios'
import React from 'react'
import Header from "../../components/header/Header"
import { useState } from 'react'
import homeSvg from "../../assets/home.svg"
import { MainContainer,ImgDiv,HomeImg } from './HomeStyles'
import RecipeCardComp from"./RecipeCardComp"


const APP_ID="6b009311"
const APP_KEY="fa07e7fb32f4d3040281e08dfcd40d16"

const Home = () => {

    
    const [query, setQuery] = useState("")
    const [food, setFood] = useState();
    const mealTypes=["Breakfast", "Lunch", "Dinner"]
    const [meal, setMeal] = useState(mealTypes[0].toLowerCase())
    const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

   const getData =async()=>{
    if(query){
        const result = await axios.get(url);
        setFood(result.data.hits)
    
    }else{
        console.log("birşey yazz")
    }


    

   }
  return (
    <div>
        <Header setQuery={setQuery}
        getData={getData}
        mealTypes={mealTypes}
        setMeal={setMeal}
        
        />

        {food?(<MainContainer>
            {food.map((liste,index)=>
            <RecipeCardComp key={index} recipe1={liste.recipe}/>
            )}


        </MainContainer>
        ):<ImgDiv>
        <HomeImg src={homeSvg}/>
        </ImgDiv>
        
        }



    </div>
  )
}

export default Home