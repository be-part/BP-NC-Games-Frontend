import { useContext } from "react"
import { userContext } from "../Contexts/userContext"

function User () {

    const [user, setUser] = useContext(userContext)

    return (<>
    <div id="Header-User">
    <p id="Header-User-Content" > <span id="Logged-In-As">Logged in as: </span><span className="bold">{user}</span></p>
    </div>
    </>)
}

export default User