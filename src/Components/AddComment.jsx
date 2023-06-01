import {useState} from "react"
import { PostComment } from "../Api";

function AddComment({review_id, setCommentsList}){
    

    const [userName, setUserName] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
       
        const newComment = {username: userName, body: body}

        PostComment(review_id, newComment).then((newCommentAPI) => {
            setCommentsList((currComments) => {
            return [newCommentAPI, ...currComments];
            });

        });
    };
    

    return (
    <>
    <main id="PostCommentContainer">

    <form id="PostCommentForm" onSubmit={handleSubmit}>
        <h3 id="PostCommentTitle"> Add a comment ⬇️ </h3>
        <label htmlFor ="username"> Username: </label>
        <input
            id="username"
            type="text"
            value={userName}
	        required
            onChange={(e) => setUserName(e.target.value)}
        />
        <div id="TextAreaLabelContainer">
        <label htmlFor="body">Comment: <span className="space2" ></span></label>
        <textarea 
            id="body" 
            value={body}
	        required
            cols="50"
            rows="4"
            onChange={(e) => setBody(e.target.value)}> </textarea>
        </div>
        <button id="submit-btn">Submit Comment 💬</button>
        </form>
        
    </main>
    </>)
}

export default AddComment