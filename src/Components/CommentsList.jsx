import {useState, useEffect} from "react"
import { GetComments } from "../Api";
import CommentCard from "./CommentCard";

function CommentsList ({review_id, commentsList, setCommentsList}){

const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    GetComments(review_id)
    .then(({comments}) => {
    setCommentsList(comments);
    setIsLoading(false);
    })}, []);
    
    if (isLoading) return <p className="Loading"> Loading... </p>
    
    const commentsPosted = commentsList.length >0

    return (
    <>
    <main>
        {commentsPosted ? (
            <section>
                <ul id="CommentList">
                {commentsList.map(({comment_id, votes, created_at, author, body}) => {
                return (<CommentCard
                comment_id={comment_id}
                votes={votes}
                createdAt={created_at}
                author={author}
                body={body}
                />
                );
                })}
                </ul>
            </section>
        ) : (
          <p> No comments yet! </p>
        )}
    </main>
    </>)
}

export default CommentsList