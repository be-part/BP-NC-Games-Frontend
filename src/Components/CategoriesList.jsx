import {useState, useEffect} from "react"
import { getCategories } from "../Api";
import { Link } from "react-router-dom";

function CategoriesList (){
    
    const [categoriesList, setCategoriesList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        getCategories().then(({categories}) => {
            setCategoriesList(categories);
            setIsLoading(false);
        })
    }, []);
    

    if (isLoading) return <p className="Loading"> Loading... </p>

    return (<>
    
    <h2 id="CategoriesListTitle"> Board Game Reviews by Category</h2>
	<p id="CategoriesListText"> You can sort through the board game reviews by category. Select one of the options below to view all reviews in that category. </p>
    
    <main id="CategoriesListContainer">
    <ul id="CategoriesList">

    {categoriesList.map(({slug, description}) => {
        return (
        <li key={slug} id="CategoryListItem" >
        <p id="CatCDescription"> <span className="bold"> {slug} </span>❓ {description} </p>
        <Link to={`/reviews?category=${slug}`} className="links">Click here to view all reviews for the {slug} category </Link>
        </li>
        
        );
    })}
    
    </ul>
    </main>
   

    </>)
}

export default CategoriesList