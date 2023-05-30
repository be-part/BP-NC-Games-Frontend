import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function SingleReview (){
    
    const [singleReview, setSingleReview] = useState({})
    const {review_ID} = useParams();
    
    useEffect(() => {
        GetSingleReview(review_ID).then((data) => {
          setSingleReview(data);
        });
      }, [review_ID]);
    
    return (<>
    <h2>Review for: {review_ID} </h2>
    <main className ="ReviewInfoID">
    
    </main>
    </>)
    }
    export default SingleReview