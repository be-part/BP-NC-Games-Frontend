function ReviewCard ({key, gameTitle, username, image, createdAt, votes, designer, category, commentCount}) {

    return (
    
        <li className="ReviewListItem"key={key}>
            <h3 className="RCTitle">{gameTitle}</h3>
            <img className="RCImage" src={image} alt={gameTitle}/>
            <p className="RCUsername">  Review added by: {username} </p>
            <p className="RCCreatedAt"> Submitted on: {createdAt} </p>
            <p className="RCVotes"> Votes: {votes} </p>
            <p className="RCDesigner"> Game designer: {designer} </p>
            <p className="RCCategory"> Category: {category} </p>
            <p className="RCCommentCount"> Comments: {commentCount} </p>
        </li>
    
    );
    
    }
    
    export default ReviewCard