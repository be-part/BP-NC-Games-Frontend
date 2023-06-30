import {useState} from "react"
import { postComment } from "../Api";
import { useContext } from "react"
import { userContext } from "../Contexts/userContext"

function AddComment({review_id, setCommentsList}){

    const [user, setUser] = useContext(userContext)

    const [userName, setUserName] = useState(user);
    const [body, setBody] = useState("");

    const profanityFilter = require('bad-words');
    const filter = new Filter();

    const handleSubmit = (event) => {
        event.preventDefault();
       
        const newComment = {username: userName, body: body}

        const filteredCommentBody = filter.isProfane(newComment.body) === true ? '' : newComment.body;

        if (filteredCommentBody === '') {
                // Show a warning message to the user
            } else {
                postComment(review_id, newComment).then((newCommentAPI) => {
                    setCommentsList((currComments) => {
                    return [newCommentAPI, ...currComments];
                    });
        
                });
        
                setUserName("")
                setBody("")
            };
        }

       
    
    const isDisabled = user === "new user"

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
        />
        <div id="TextAreaLabelContainer">
        <label htmlFor="body">Comment: <span className="space2" ></span></label>
        <textarea 
            id="body" 
            value={body}
	        required
            cols="30"
            rows="4"
            onChange={(event) => setBody(event.target.value)}> </textarea>
        </div>
        <button id="submit-btn" disabled={isDisabled}>Submit Comment 💬</button>
        {isDisabled ? <p id="SelectUserWarning"> You need to select an existing user to leave a comment! </p> : <p></p>}
        </form>
        
    </main>
    </>)
}

export default AddComment