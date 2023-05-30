import { Link } from "react-router-dom";

function ReviewCard ({review_id, gameTitle, username, image, createdAt, votes, designer, category, commentCount}) {

    return (
    
        <li key={review_id} className="ReviewListItem" >
            <h3 className="RCTitle">{gameTitle}</h3>
            <img className="RCImage" src={image} alt={gameTitle}/>
            <p className="RCUsername">  Review added by: {username} </p>
            <p className="RCCreatedAt"> Submitted on: {createdAt} </p>
            <p className="RCVotes"> Votes: {votes} </p>
            <p className="RCDesigner"> Game designer: {designer} </p>
            <p className="RCCategory"> Category: {category} </p>
            <p className="RCCommentCount"> Comments: {commentCount} </p>
            <Link to={`/reviews/${review_id}`} > Click for more information about this game review.</Link>
        </li>
    
    );
    
    }
    
    export default ReviewCard