import React from 'react'

export default function Posts(props) {
    return (
        <div id="textBack" style={{
            // backgroundColor: '#4b134f',
            width: '50%',
            height: '10%',
            borderRadius: '20px',
            margin: 'auto',
            marginTop: '15%'
        }}>
            <h2 className='username' style={{ color: 'white', textAlign: 'center', textTransform: 'uppercase', fontFamily: '-webkit-pictograph' }}>{props.post}</h2>
        </div>
    )
}
