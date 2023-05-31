import { Link } from "react-router-dom";

function ReviewCard ({review_id, gameTitle, username, image, createdAt, votes, designer, category, commentCount}) {

    return (
    
        <li key={review_id} className="ReviewListItem" >
            <h3 id="RCTitle">{gameTitle}</h3>
            <img id="RCImage" src={image} alt={gameTitle}/>
            <p id="RCUsername">  Review added by: {username} </p>
            <p id="RCCreatedAt"> Submitted on: {createdAt} </p>
            <p id="RCVotes"> Votes: {votes} </p>
            <p id="RCDesigner"> Game designer: {designer} </p>
            <p id="RCCategory"> Category: {category} </p>
            <p id="RCCommentCount"> Comments: {commentCount} </p>
            <Link to={`/reviews/${review_id}`} > Click for more information about this game review.</Link>
        </li>
    
    );
    
    }
    
    export default ReviewCard