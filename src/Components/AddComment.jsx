import {useState} from "react"
import { postComment } from "../Api";
import { useContext } from "react"
import { userContext } from "../Contexts/userContext"

function AddComment({review_id, setCommentsList}){

    const [user, setUser] = useContext(userContext)

    const [userName, setUserName] = useState(user);
    const [body, setBody] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
       
        const newComment = {username: userName, body: body}

        postComment(review_id, newComment).then((newCommentAPI) => {
            setCommentsList((currComments) => {
            return [newCommentAPI, ...currComments];
            });

        });

        setUserName("")
        setBody("")
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
            readOnly
            //onChange={(event) => setUserName(event.target.value)}
        />
        <div id="TextAreaLabelContainer">
        <label htmlFor="body">Comment: <span className="space2" ></span></label>
        <textarea 
            id="body" 
            value={body}
	        required
            cols="40"
            rows="4"
            onChange={(event) => setBody(event.target.value)}> </textarea>
        </div>
        <button id="submit-btn">Submit Comment 💬</button>
        </form>
        
    </main>
    </>)
}

export default AddComment