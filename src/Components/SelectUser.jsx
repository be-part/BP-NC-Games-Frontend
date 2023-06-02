import { useContext } from "react"
import { userContext } from "../Contexts/userContext"

function SelectUser () {

    const [user, setUser] = useContext(userContext)

    return (<>
    <h2 id="SU-Title" >Select User</h2>
    
    <main id="SU-Container">
    
    <p>You are currently logged in as <span id="CurrentUser">"{user}"</span>.</p>

    <p>If you would like to to change who you are logged in as, select one of the options below:</p>

    <br/>
    <div id="UserButtonContainer">
    <div className="UserCard" id="user1">
    <button className="SU-btn"  onClick={() => setUser('tickle122')}> tickle122 </button>
    </div>

    <div className="UserCard" id="user2">
    <button className="SU-btn"  onClick={() => setUser('grumpy19')}> grumpy19 </button>
    </div>

    <div className="UserCard" id="user3">
    <button className="SU-btn"  onClick={() => setUser('happyamy2016')}> happyamy2016 </button>
    </div>

    <div className="UserCard" id="user4">
    <button className="SU-btn"  onClick={() => setUser('cooljmessy')}> cooljmessy </button>
    </div>

    <div className="UserCard" id="user5">
    <button className="SU-btn"  onClick={() => setUser('weegembump')}> weegembump </button>
    </div>

    <div className="UserCard" id="user6">
    <button className="SU-btn"  onClick={() => setUser('jessjelly')}> jessjelly </button>
    </div>
    </div>
    </main>
    </>)
}

export default SelectUser