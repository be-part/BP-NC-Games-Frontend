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

    <button id="SU-btn" onClick={() => setUser('tickle122')}> tickle122 </button>
    
    <button id="SU-btn" onClick={() => setUser('grumpy19')}> grumpy19 </button>

    <button id="SU-btn" onClick={() => setUser('happyamy2016')}> happyamy2016 </button>

    <button id="SU-btn" onClick={() => setUser('cooljmessy')}> cooljmessy </button>

    <button id="SU-btn" onClick={() => setUser('weegembump')}> weegembump </button>

    <button id="SU-btn" onClick={() => setUser('jessjelly')}> jessjelly </button>
    </main>
    </>)
}

export default SelectUser