function SingleReviewCard ({singleReview}) {
    
    return (<>
    
    <article className="SingleReviewInfo">
           <span className="bold">Game Designer:</span> {singleReview.review.designer}
           <br/>
           <span className="bold">Category:</span> {singleReview.review.category}
           <br/>
           <br/>
           {singleReview.review.review_body}
           <br/>
           <img id="SRImage" src={singleReview.review.review_img_url} alt={singleReview.review.title}/>
           <br/>
           <span className="bold">Submitted by:</span>{singleReview.review.owner}
           <br/>
           <span className="bold">Submitted on:</span> {singleReview.review.created_at}
           <br/>
           <span className="bold">Votes:</span> {singleReview.review.votes}
           <br/>
           <span className="bold">Comments:</span> {singleReview.review.comment_count}
    </article>
    </>);
    
    }
    
    export default SingleReviewCard