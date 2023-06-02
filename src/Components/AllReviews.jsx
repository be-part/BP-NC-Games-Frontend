import { useSearchParams } from "react-router-dom";
import ReviewCard from "./ReviewCard";
import {useState, useEffect} from "react"
import { GetReviews } from "../Api";

function AllReviews (){

    const [searchParams, setSearchParams] = useSearchParams();
    const Category = searchParams.get('category')

    const [reviewsList, setReviewsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        GetReviews(Category).then(({reviews}) => {
            setReviewsList(reviews);
            setIsLoading(false);
        })
    }, [Category]);
    
    if (isLoading) return <p className="Loading"> Loading... </p>
    
    return (<>
    
    {!Category ? <h2 id="ReviewsListTitle">All Board Game Reviews</h2> : <h2 id="ReviewsListTitle">{Category} Board Game Reviews</h2>}

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