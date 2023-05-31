import { GetVotes, RemoveVotes } from "../Api";

function SingleReviewCard ({singleReview, setSingleReview}) {
    
      const Upvote = () => {setSingleReview((currReview) => {
             return {...currReview, votes: currReview.votes+1}
       });
       GetVotes(singleReview.review_id)      
       } 

       const Downvote = () => {setSingleReview((currReview) => {
              return {...currReview, votes: currReview.votes-1}
        });
        RemoveVotes(singleReview.review_id)      
        } 

    return (<>
    
    <article id="SingleReviewInfo" key={singleReview.review_id}>
           <span className="bold">Game Designer:</span> {singleReview.designer}
           <br/>
           <span className="bold">Category:</span> {singleReview.category}
           <br/>
           <br/>
           {singleReview.review_body}
           <br/>
           <img id="SRImage" src={singleReview.review_img_url} alt={singleReview.title}/>
           <br/>
           <span className="bold">Submitted by:</span> {singleReview.owner}
           <br/>
           <span className="bold">Submitted on:</span> {singleReview.created_at}
           <br/>
           <span className="bold">Comments:</span> {singleReview.comment_count}
           <br/>
           <span className="bold">Votes:</span> {singleReview.votes}
           <span className="space"></span>
           <button id="upvote-btn" onClick={Upvote}>Upvote! 👍</button>
           <button id="downvote-btn" onClick={Downvote}>Downvote! 👎</button>
    </article>
    </>);
    
    }
    
    export default SingleReviewCard