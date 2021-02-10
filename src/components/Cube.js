import React, { useEffect, useState } from "react"
import logo from "../img/cube-outline.svg"
import "./Cube.css"
import { roll } from "../helpers/roll"
import randomFrancellas from "../helpers/randomFrancellas"
import randomCubeFaces from "../helpers/randomCubeFaces"

const Cube = (props) => {

    const [frontFlip, setFrontFlip] = useState(false)
    const [backFlip, setBackFlip] = useState(false)
    const [leftFlip, setLeftFlip] = useState(false)
    const [rightFlip, setRightFlip] = useState(false)
    const [topFlip, setTopFlip] = useState(false)
    const [bottomFlip, setBottomFlip] = useState(false)

    return (
        <div className="scene">
            <div className={`cube ${props.face}`}>
                <div className={`cube__face cube__face--${randomCubeFaces[0]}`}>
                    <div className="card__scene">
                        <div className={`card__object ${frontFlip ? "is-flipped" : null}`} onClick={() => setFrontFlip(!frontFlip)}>
                            <div className="card__face card__face--front">
                                <img src={logo} alt="" width="100%" height="100%" />
                            </div>
                            <div className="card__face card__face--back">
                                <img src={randomFrancellas[0]} alt="francella" width="100%" height="100%" className="francella" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`cube__face cube__face--${randomCubeFaces[1]}`}>
                    <div className="card__scene">
                        <div className={`card__object ${backFlip ? "is-flipped" : null}`} onClick={() => setBackFlip(!backFlip)}>
                            <div className="card__face card__face--front">
                                <img src={logo} alt="" width="100%" height="100%" />
                            </div>
                            <div className="card__face card__face--back">
                                <img src={randomFrancellas[1]} alt="francella-2" width="100%" height="100%" className="francella" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`cube__face cube__face--${randomCubeFaces[2]}`}>
                    <div className="card__scene">
                        <div className={`card__object ${rightFlip ? "is-flipped" : null}`} onClick={() => setRightFlip(!rightFlip)}>
                            <div className="card__face card__face--front">
                                <img src={logo} alt="" width="100%" height="100%" />
                            </div>
                            <div className="card__face card__face--back">
                                <img src={randomFrancellas[2]} alt="francella-2" width="100%" height="100%" className="francella" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`cube__face cube__face--${randomCubeFaces[3]}`}>
                    <div className="card__scene">
                        <div className={`card__object ${leftFlip ? "is-flipped" : null}`} onClick={() => setLeftFlip(!leftFlip)}>
                            <div className="card__face card__face--front">
                                <img src={logo} alt="" width="100%" height="100%" />
                            </div>
                            <div className="card__face card__face--back">
                                <img src={randomFrancellas[0]} alt="francella-1" width="100%" height="100%" className="francella" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`cube__face cube__face--${randomCubeFaces[4]}`}>
                    <div className="card__scene">
                        <div className={`card__object ${topFlip ? "is-flipped" : null}`} onClick={() => setTopFlip(!topFlip)}>
                            <div className="card__face card__face--front">
                                <img src={logo} alt="" width="100%" height="100%" />
                            </div>
                            <div className="card__face card__face--back">
                                <img src={randomFrancellas[1]} alt="francella-3" width="100%" height="100%" className="francella" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`cube__face cube__face--${randomCubeFaces[5]}`}>
                    <div className="card__scene">
                        <div className={`card__object ${bottomFlip ? "is-flipped" : null}`} onClick={() => setBottomFlip(!bottomFlip)}>
                            <div className="card__face card__face--front">
                                <img src={logo} alt="" width="100%" height="100%" />
                            </div>
                            <div className="card__face card__face--back">
                                <img src={randomFrancellas[2]} alt="francella-3" width="100%" height="100%" className="francella" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cube