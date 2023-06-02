import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSingleReview } from '../Api';
import SingleReviewCard from './SingleReviewCard';
import CommentsList from './CommentsList';
import AddComment from './AddComment';


function SingleReview() {
  const [singleReview, setSingleReview] = useState({});
  const [commentsList, setCommentsList] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    fetchSingleReview(review_id).then((data) => {
      setSingleReview(data.review);
    });
  }, [review_id]);

  return (
    <>
      
      <main>
        {singleReview ? (
          <section>
            <article id="SingleReviewContainer">
            <h2 id="SingleReviewTitle">{singleReview.title}</h2>
            <SingleReviewCard singleReview={singleReview} setSingleReview={setSingleReview}/>
            </article>
            <div id="CommentsContainer">
            <h2 id="CommentsListTitle">Comments</h2>
            <AddComment review_id={review_id} setCommentsList={setCommentsList}/>
            <CommentsList review_id={review_id} commentsList={commentsList} setCommentsList={setCommentsList} />
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