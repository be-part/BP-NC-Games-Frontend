import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FetchSingleReview } from '../Api';
import SingleReviewCard from './SingleReviewCard';
import CommentsList from './CommentsList';


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
          <section>
            <article id="SingleReviewContainer">
            <h2 id="SingleReviewTitle">{singleReview.review.title}</h2>
            <SingleReviewCard singleReview={singleReview}/>
            </article>
            <div id="CommentsContainer">
            <h2 id="CommentsListTitle">Comments</h2>
            <CommentsList review_id={review_id} />
            </div>
            </section>
        ) : (
          <p className="Loading" >Loading...</p>
        )}
      </main>
    </>
  );
}

export default SingleReview;