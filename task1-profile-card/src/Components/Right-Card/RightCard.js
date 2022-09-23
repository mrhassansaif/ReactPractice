import React from 'react'
import SkillsLink from './Links/SkillsLink'

export default function RightCard() {
    return (
        <div id="rightCard" style={{
            backgroundColor: 'white',
            width: '40%', height: '400px',
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px'
        }}>
            <h2 style={{ marginTop: '5%', textAlign: 'center', fontFamily: '-webkit-pictograph', fontSize: '50px' }}>Bio</h2>
            <p style={{ textAlign: 'center', fontFamily: '-webkit-pictograph', fontSize: '20px', fontWeight: 'bold', padding: '5%' }}>Discovered as a slave on Tatooine by Qui-Gon Jinn and Obi-Wan Kenobi, Anakin Skywalker had the potential to become one of the most powerful Jedi ever, and was believed by some to be the prophesied Chosen One who would bring balance to the Force.</p>
            <SkillsLink skillslink={'View SKills'} />
            <p style={{ textAlign: 'center', fontFamily: '-webkit-pictograph', fontSize: '20px', fontWeight: 'bold', marginLeft: '40%', display: 'inline' }}>Joined: 01.01.2021</p>

        </div>
    )
}
