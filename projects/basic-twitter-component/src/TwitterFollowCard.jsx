//Hooks -> funcionalidad para mejorar el rendimiento, utilidades para dotar de funcinalidad los componentes
import { useState } from "react"
//las props como estado inicial solo se inician UNA VEZ!...
export function TwitterFollowCard({children, format , userName = "unknown" , initialIsFolowing}) {
    const [isFollowing, setIsFollowing] = useState(initialIsFolowing)

    const imageSrc = `https://unavatar.io/instagram/${userName}`

    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing ? "tw-followCard-button is-following" : "tw-followCard-button"

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    src={imageSrc}
                    alt="avatar de will"
                    className="tw-followCard-avatar" />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-infoUserName">{format(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-fllowCard-text">{text}</span>
                    <span className="tw-fllowCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}