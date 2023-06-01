function CommentCard ({comment_id, votes, createdAt, author, body}) {
    return (
    <li key={comment_id} id="CommentListItem" >
    {body}
    <br/>
    <p id="CCUser"><span className="bold">Submitted by:</span> {author}</p>
    <p id="CCCreatedAt"><span className="bold">Submitted on:</span> {createdAt}</p>
    <p id="CCVotes"><span className="bold">Votes:</span> {votes}</p>
    </li>
    );
    }
export default CommentCard