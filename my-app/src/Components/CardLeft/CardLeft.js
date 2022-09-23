import React from 'react'

function CardLeft() {
    return (
        <>
            <div className="ProfileCard">
                <div className="avatar">
                    <h2>Hassan</h2>
                    <i className="photo" />
                    <span>45 posts</span>
                </div>
                <h3>Bio</h3>
                <p>
                </p>
                <div>
                </div>
                <div>
                    <div>
                        <h3>Technologies</h3>
                        {technologies.length > 0 && (
                            <ul data-test-id="technologies-list">
                                {technologies.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                        <div>
                            <button onClick={handleBioVisibility}>View Bio</button>
                            {!!location && (
                                <p className="location" data-test-id="location">
                                    Location: {location}
                                </p>
                            )}
                        </div>
                    </>
        )}
                </div>
            </div>
            );
}
        </div>
        </>
    )
}

export default CardLeft;