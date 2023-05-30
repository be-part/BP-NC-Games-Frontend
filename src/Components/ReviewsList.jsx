import {useState, useEffect} from "react"
import { GetReviews } from "../Api";
import ReviewCard from "./ReviewCard";

function ReviewsList (){
    
    const [reviewsList, setReviewsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        GetReviews().then(({reviews}) => {
            setReviewsList(reviews);
            setIsLoading(false);
        })
    }, []);
    
    if (isLoading) return <p className="Loading"> Loading... </p>
    
    return (<>
    
    <h2 className="ReviewsListTitle">All Board Game Reviews</h2>
    <ul className ="ReviewsList">
    
    {reviewsList.map(({review_id, title, owner, review_img_url, created_at, votes, designer, category, comment_count}) => {
        return (<ReviewCard
        key={review_id}
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

export default ReviewsList