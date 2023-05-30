import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchSingleReview } from '../Api';
import SingleReviewCard from './SingleReviewCard';

function SingleReview() {
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    FetchSingleReview(review_id).then((data) => {
      setSingleReview(data);
    });
  }, [review_id]);

  return (
    <>
      
      <main>
        {singleReview.review ? (
            <article className="SingleReviewContainer">
            <h2 className="SingleReviewTitle">{singleReview.review.title}</h2>
            <SingleReviewCard singleReview={singleReview}/>
            </article>
        ) : (
          <p>Loading...</p>
        )}
      </main>
    </>
  );
}

export default SingleReview;