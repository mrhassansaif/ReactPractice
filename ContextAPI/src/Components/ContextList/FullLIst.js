import { React, useContext } from 'react'
import { userContext } from '../../index'

export default function FullLIst() {
    const data = useContext(userContext)
    console.log("hello" + " " + data)
    return (
        <userContext.Consumer>
            {userValue => (

                <div className="container" style={{ marginTop: "90px" }}>
                    <ul class="list-group" style={{ fontSize: "30px" }}>
                        <li class="list-group-item">This is {userValue} </li>
                        <li class="list-group-item">This is {userValue}</li>
                        <li class="list-group-item">This is {userValue}</li>
                        <li class="list-group-item">This is {userValue}</li>

                    </ul>
                </div>
            )}
        </userContext.Consumer>

    )
}
