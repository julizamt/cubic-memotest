import React, { useState, useContext, useEffect } from "react"
import "./Board.css"
import Cube from "../components/Cube"
import AppContext from "../context/AppContext"
import { useSpring, animated, config } from 'react-spring'
import Timer from "../components/Timer"
import Tries from "../components/Tries"

const Board = (props) => {

    const context = useContext(AppContext)

    let seconds = null
    switch (context.level) {
        case 1:
            seconds = 20;
            break;
        default:
            seconds = 20;
            break;
    }

    let initialTriesValue = null;
    switch (context.level) {
        case 1:
            initialTriesValue = 6
            break
        default:
            initialTriesValue = 6
            break
    }

    const [tries, setTries] = useState(initialTriesValue)

    const fade = useSpring({
        to: {
            opacity: props.feedbackFlag ? 0 : 1
        },
        from: { opacity: 1 },
        delay: 2500,
        config: { ...config.slow },
        onRest: () => { props.setFeedbackFlag(false); props.setFeedbackMessage(null) },
    })

    return (
        <div className="board__container">
            <div className="feedback__container">
                {props.feedbackFlag ? <animated.div style={fade} className="feedback">{props.feedbackMessage}</animated.div> : null}
            </div>
            <Timer seconds={seconds} />
            <Tries tries={tries} />
            <Cube tries={tries} setTries={setTries} setFinalFlag={props.setFinalFlag} setWinFlag={props.setWinFlag} />
            {
                !context.login &&
                <div className="guest-advice">
                    Currently playing as <b>Guest</b>. Login for track your scores.
                </div>
            }
        </div>
    )
}

export default Board

/*For buttons variation */

/*import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';*/

/* const [value, setValue] = useState('front');

    const handleChange = (event) => {
        setValue(event.target.value);
    }; */

/* <FormControl component="fieldset">
    <RadioGroup aria-label="cube-face" name="cube-face" value={value} onChange={handleChange} row>
        <FormControlLabel value="show-front" control={<Radio />} label="Front" />
        <FormControlLabel value="show-back" control={<Radio />} label="Back" />
        <FormControlLabel value="show-left" control={<Radio />} label="Left" />
        <FormControlLabel value="show-right" control={<Radio />} label="Right" />
        <FormControlLabel value="show-top" control={<Radio />} label="Top" />
        <FormControlLabel value="show-bottom" control={<Radio />} label="Bottom" />
    </RadioGroup>
</FormControl> */