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
    <div className="UserCard" >
    <button className="SU-btn"  id="user1" onClick={() => setUser('tickle122')}> tickle122 </button>
    </div>

    <div className="UserCard" >
    <button className="SU-btn" id="user2" onClick={() => setUser('grumpy19')}> grumpy19 </button>
    </div>

    <div className="UserCard" >
    <button className="SU-btn" id="user3" onClick={() => setUser('happyamy2016')}> happyamy2016 </button>
    </div>

    <div className="UserCard" >
    <button className="SU-btn" id="user4" onClick={() => setUser('cooljmessy')}> cooljmessy </button>
    </div>

    <div className="UserCard" >
    <button className="SU-btn" id="user5" onClick={() => setUser('weegembump')}> weegembump </button>
    </div>

    <div className="UserCard" >
    <button className="SU-btn" id="user6" onClick={() => setUser('jessjelly')}> jessjelly </button>
    </div>

    <div className="UserCard" >
    <button className="SU-btn" id="noUser" onClick={() => setUser('new user')}> Log Out </button>
    </div>

    </div>
    </main>
    </>)
}

export default SelectUser