import React, { useContext, useState } from "react"
import AppContext from "../context/AppContext"
import "./Final.css"
import Feedback from "../components/Feedback"
import Ranking from "../components/Ranking"
import { useSpring, animated as a, config } from 'react-spring'
import AboutModal from "../components/AboutModal"

const Final = (props) => {
    // About dialog logic
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false);
    };

    const { startGame, exitGame, bonusFlag, score, login } = useContext(AppContext)

    const handleClick = (e) => {
        const name = e.target.name
        const id = e.target.id
        if (name === "play__again") {
            startGame();
        }
        else if (name === "exit") {
            exitGame();
        }
        else if (id === "about") {
            setOpen(true);
        }
    }

    const standUp = useSpring({
        from: { transform: 'rotateX(-90deg)' },
        to: { transform: 'rotateX(0deg)' },
        config: { mass: 3, tension: 180, friction: 12 }
    })

    return (
        <div className="final__container">
            {bonusFlag ? <a.div className="result" style={standUp}> You win! :)</a.div> : <a.div className="result" style={standUp}>You lose :(</a.div>}
            <div className="final__score">Score {score} pts</div>
            <div style={{ textAlign: "center" }}>
                <div>Thanks for playing Cubic Memotest (Demo)</div>
                <div>©2021 Julián Zamt | <span id="about" className="about" onClick={handleClick}>About</span></div>
            </div>
            <Ranking />
            <div className="buttons__container">
                <button onClick={handleClick} name="play__again" className="final__button">Play again</button>
                <button onClick={handleClick} name="exit" className="final__button">Exit Game</button>
            </div>
            {props.feedbackFlag || login ? <Feedback setFeedbackFlag={props.setFeedbackFlag} feedbackMessage={props.feedbackMessage} setFeedbackMessage={props.setFeedbackMessage} feedbackFlag={props.feedbackFlag} /> : null}
            <AboutModal open={open} onClose={handleClose} />
        </div>
    )
}

export default Final