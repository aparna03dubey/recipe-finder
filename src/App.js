import { useState,useEffect } from 'react'



export default function App(){
const [meals, setMeals]=useState([]);
const [meal, setMeal]=useState("Arrabiata");

async function getMeals(){
 try {
  const res= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+meal)
  const data= await res.json();

  setMeals(data.meals);
 
 } catch (error) {
  console.error(error); 
 }
}

useEffect(()=>{
  getMeals();
},[]);

function handleSubmit(e){
  e.preventDefault();
  getMeals();
}

  return <div className="py-20 px-4 lg:px-0 max-w-4xl mx-auto">
  <h1 className="text-center font-bold bg-neutral-200 py-3 text-neutral-700 text-4xl rounded-md
   ">Recipe Finder</h1>
  <form className="my-12" onSubmit={handleSubmit}>
    <input type="text" name="search" id="search" placeholder="Search for the recipe" required className="w-full px-1 py-2 pl-3 rounded-md border-2 border-neutral-00 bg-neutral-200 focus:ring-4 focus:ring-neutral-500 outline-none
     " 
     value={meal}
     onChange={e=> setMeal(e.target.value)}
     />
  </form>

{meals ?<div className=' grid gap-18 '>
{meals.map((meal)=>(
   <article>
   <h2 className="font-bold text-neutral-700 text-3xl lg:text-4xl flex items-center gap-4 mb-8 flex-wrap
     ">{meal.strMeal} <span className="bg-neutral-200 font-normal text-sm px-2 rounded-md py-1" >{meal.strCategory}</span> <span className="bg-neutral-200 font-normal text-sm px-2 py-1 rounded-md" >{meal.strArea}</span></h2>
  <img className='w-full' src={meal.strMealThumb} alt={meal.strMeal}/>
  <h3 className="font-bold text-neutral-700 text-2xl lg:text-3xl my-5
     ">Ingredients
    <ul className="list-decimal pl-7 font-normal ">
      {meal.strIngredient1 && meal.strMeasure1 && <li>{meal.strMeasure1}{meal.strIngredient1}</li>}
      {meal.strIngredient2 && meal.strMeasure2 && <li>{meal.strMeasure2}{meal.strIngredient2}</li>}
      {meal.strIngredient3 && meal.strMeasure3 && <li>{meal.strMeasure3}{meal.strIngredient3}</li>}
      {meal.strIngredient4 && meal.strMeasure4 && <li>{meal.strMeasure4}{meal.strIngredient4}</li>}
      {meal.strIngredient5 && meal.strMeasure5 && <li>{meal.strMeasure5}{meal.strIngredient5}</li>}
      {meal.strIngredient6 && meal.strMeasure6 && <li>{meal.strMeasure6}{meal.strIngredient6}</li>}
      {meal.strIngredient7 && meal.strMeasure7 && <li>{meal.strMeasure7}{meal.strIngredient7}</li>}
      {meal.strIngredient8 && meal.strMeasure8 && <li>{meal.strMeasure8}{meal.strIngredient8}</li>}
      {meal.strIngredient9 && meal.strMeasure9 && <li>{meal.strMeasure9}{meal.strIngredient9}</li>}
      {meal.strIngredient10 && meal.strMeasure10 && <li>{meal.strMeasure10}{meal.strIngredient10}</li>}
      {meal.strIngredient11 && meal.strMeasure11 && <li>{meal.strMeasure11}{meal.strIngredient11}</li>}
      {meal.strIngredient12 && meal.strMeasure12 && <li>{meal.strMeasure12}{meal.strIngredient12}</li>}
      {meal.strIngredient13 && meal.strMeasure13 && <li>{meal.strMeasure13}{meal.strIngredient13}</li>}
      {meal.strIngredient14 && meal.strMeasure14 && <li>{meal.strMeasure14}{meal.strIngredient14}</li>}
      {meal.strIngredient15 && meal.strMeasure15 && <li>{meal.strMeasure15}{meal.strIngredient15}</li>}
      {meal.strIngredient16 && meal.strMeasure16 && <li>{meal.strMeasure16}{meal.strIngredient16}</li>}
      {/* {meal.strIngredient16 && meal.strMeasure1 && <li>{meal.strMeasure1}{meal.strIngredient1}</li>}
      {meal.strIngredient17 && meal.strMeasure1 && <li>{meal.strMeasure1}{meal.strIngredient1}</li>}
      {meal.strIngredient18 && meal.strMeasure1 && <li>{meal.strMeasure1}{meal.strIngredient1}</li>}
      {meal.strIngredient19 && meal.strMeasure1 && <li>{meal.strMeasure1}{meal.strIngredient1}</li>}
      {meal.strIngredient20 && meal.strMeasure1 && <li>{meal.strMeasure1}{meal.strIngredient1}</li>} */}
    </ul>
  </h3>
  <h3 className="font-bold text-neutral-700 text-2xl lg:text-3xl my-5">Instructions</h3>
  <p>
 {meal.strInstructions}
  </p>
  
  <ul className=" mb-8 p-4 flex gap-4 items-center justify-center flex-wrap">
    {meal.strYoutube && <li className="bg-neutral-200 px-4 py-2 hover:cursor-pointer hover:text-neutral-800  font-normal text-base  rounded-lg hover:bg-neutral-300 transition-all duration-250" > <a href={meal.strYoutube} target='_blank'>Video</a> </li>
}
    {meal.strSource && <li className="bg-neutral-200  px-4 py-2 hover:cursor-pointer hover:text-neutral-800 font-normal text-base  rounded-lg hover:bg-neutral-300 transition-all duration-250" ><a href={meal.strSource} target='_blank'>Source</a></li>
}
  </ul>
  
   </article>
))}
</div> : <h2 className=' font-normal text-lg text-center text-neutral-900 '>Sorry, we could not search for {meal}.</h2>}
  </div>

}