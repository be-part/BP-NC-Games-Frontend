import { Link } from "react-router-dom";

function ReviewCard ({review_id, gameTitle, username, image, createdAt, votes, designer, category, commentCount}) {

    return (
    
        <li key={review_id} className="ReviewListItem" >
            <h3 id="RCTitle">{gameTitle}</h3>
            <img id="RCImage" src={image} alt={gameTitle}/>
            <p id="RCUsername">  <span className="bold">Review added by: </span>{username} </p>
            <p id="RCCreatedAt"> <span className="bold">Submitted on: </span>{createdAt} </p>
            <p id="RCVotes"> <span className="bold">Votes: </span>{votes} </p>
            <p id="RCDesigner"> <span className="bold">Game designer: </span>{designer} </p>
            <p id="RCCategory"> <span className="bold">Category: </span>{category} </p>
            <p id="RCCommentCount"> <span className="bold">Comments: </span>{commentCount} </p>
            <Link to={`/reviews/${review_id}`} className="links"> Click for more information about this game review.</Link>
        </li>
    
    );
    
    }
    
    export default ReviewCard