import { useSearchParams, useLocation, useNavigate  } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import {useState, useEffect} from "react"
import { getReviews } from "../Api";

function AllReviews (){

    const [searchParams, setSearchParams] = useSearchParams();
    const reviewCategory = searchParams.get('category')

    const [searchQuery, setSearchQuery] = useState({category: reviewCategory, order: 'DESC', sort_by: 'created_at'});

    const [reviewsList, setReviewsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let { state } = useLocation();
    
    // if (state.value === null) {setSearchQuery((currQuery) => {
    //     const newQuery = {...currQuery}
    //     newQuery.category=null
    //     return newQuery
    // })


    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //   let path = `${location.pathname}`; 
    //   navigate(path);
    // }
    
    

    useEffect(() => {
        console.log("HELLO")
        getReviews(searchQuery).then(({reviews}) => {
            setReviewsList(reviews);
            setIsLoading(false);
        })
    }, [searchQuery, state]);
    
    if (isLoading) return <p className="Loading"> Loading... </p>

    const handleOrder = (value) => {
        setSearchQuery((currQuery)=> {
            return {...currQuery, order: value}
        });
    };

    const handleSortBy = (value) => {
        setSearchQuery((currQuery)=> {
            return {...currQuery, sort_by: value}
        });
    };

    return (<>
    
    {!reviewCategory ? <h2 id="ReviewsListTitle">All Board Game Reviews</h2> : <h2 id="ReviewsListTitle"> All <span id="CategoryTypeTitle">{reviewCategory}</span> Board Game Reviews</h2>}

    <label htmlFor="sortOptions">Sort By: </label>
    <select name="sortOptions" id="sortOptionsMenu" onChange={(event) => handleSortBy(event.target.value)} >
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
    </select>

    <button onClick={() => handleOrder('ASC')}>Ascending</button>
    <button onClick={() => handleOrder('DESC')}>Descending</button>

    <ul className ="ReviewsList">
    
    {reviewsList.map(({review_id, title, owner, review_img_url, created_at, votes, designer, category, comment_count}) => {
        return (<ReviewCard
        review_id={review_id}
        gameTitle={title}
        username={owner}
        image={review_img_url}
        createdAt={created_at}
        votes={votes}
        designer={designer}
        category={category}
        commentCount={comment_count}
        />
        );
    })}
    
    </ul>
    
    </>)
}




    
export default AllReviews