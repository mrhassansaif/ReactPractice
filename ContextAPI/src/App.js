import "./App.css";
import EmptyList from "./Components/ContextList/EmptyList";
import FullLIst from "./Components/ContextList/FullLIst";
import { useState } from 'react'

function App() {
    const [state, setState] = useState(false)

    return (

        <>
            <div class="d-grid gap-2 col-6 mx-auto" style={{ marginTop: "50px" }}>
                <button class="btn btn-primary" type="button" onClick={() => { setState(true) }}>Log In</button>
                <button class="btn btn-primary" type="button" onClick={() => { setState(false) }}>Log Out</button>
            </div>
            {state ? (<FullLIst />) : (<EmptyList />)}

        </>

    );
}

export default App;
