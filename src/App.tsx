import { useState } from "react"
import styled from "styled-components"

function App() {
    const [isAscii, isSwitch] = useState(false)

    return (
        <HomeDetails>
            {
                isAscii ? (
                    <>
                        <div className="screen output">
                            <div className="easter">
                                <img src="cover.png" alt="" onClick={() => isSwitch(!isAscii)} />
                            </div>
                        </div>
                        <div className="screen scanlines"></div>
                    </>
                ) :
                    <>
                        <div className="screen output">
                            <div className="header">
                                <img className="icon" src="https://github.com/Yagasaki7K.png" alt="" />
                                <nav>
                                    <a href="https://ascii.yagasaki.dev">Intro</a>
                                    <a href="https://twitter.com/yagasaki7k">Twitter!</a>
                                    <a href="https://github.com/yagasaki7k">GitHub</a>
                                    <a href="https://yagasaki.dev">Blog</a>
                                </nav>
                            </div>
                            <h1>Welcome to <span onClick={() => isSwitch(!isAscii)}>ASCII</span> Yagasaki</h1>
                            <article>
                                <p>You can imagine this like a monitor, right?</p>
                                <p>That's the feeling to code in ASCII mode.</p>

                                <h2 id="how-do-i-fix-it">How do that?</h2>
                                <p>Follow this steps and you will know how to do that.</p>
                                <ul>
                                    <li>
                                        Follow me on Twitter at <a href="https://twitter.com/yagasaki7k" target="_blank" rel="noreferrer">@yagasaki7k</a>{" "}
                                        and Github at <a href="https://github.com/yagasaki7k" target="_blank" rel="noreferrer">yagasaki7k</a>.</li>
                                    <li>Fork this repo: <a href="https://github.com/yagasaki7k/website-ascii.dev">yagasaki7k/website-ascii.dev</a> and clone him</li>
                                    <li>Change the things you want to change.</li>
                                    <li>Hosted it on Vercel, for example.</li>
                                </ul>

                                <h2 id="how-do-i-scan-for-malware">What technologies I use in this project?</h2>
                                <ul>
                                    <li>Basic: HTML, CSS and JS</li>
                                    <li>Framework/Lang: Vite/React/Typescript</li>
                                    <li>Style: Styled-Components</li>
                                    <li>Host: Vercel</li>
                                </ul>
                                <h2 id="how-do-i-scan-for-malware">How can see more projects like this?</h2>
                                <ul>
                                    <li>You can follow some steps like a follow me, if you don't do that yet.</li>
                                    <li>Read my blog articles on <a href="https://yagasaki.dev" target="_blank" rel="noreferrer">yagasaki.dev</a></li>
                                </ul>

                                <p>That's all. Thank you.</p>
                                <p>You can find a easter egg here?</p>

                            </article>
                            <footer>
                                ©Yagasaki7K - Published 2024-06-15<span className="blinky" aria-hidden="true">_</span>
                            </footer>
                        </div>
                        <div className="screen scanlines"></div>
                    </>
            }
        </HomeDetails>
    )
}

export default App

const HomeDetails = styled.div`
        display: block;
        position: absolute;
        top: 1rem;
        right: 1rem;
        bottom: 1rem;
        left: 1rem;
        background-color: transparent;
        pointer-events: none;

        border-radius: 3rem;
        border: 1rem solid;
        border-bottom-color: #121212;
        border-left-color: #080808;
        border-right-color: #080808;
        border-top-color: #020202;

        box-shadow:
        inset 0 0 18rem black,
        inset 0 0 3rem black,
        0 0 10rem black;

        .screen {
            position: absolute;
            display: block;
            height: 100%;
            left: 0;
            top: 0;
            width: 100%;
            border-radius: 2rem;
        }

        .header {
            display: flex;
            align-items: center;
            margin-bottom: -3rem;
        }

        .icon {
            width: 120px;
            margin-left: 0rem;
        }

        .easter {
            img {
                width: 100%;
                margin-left: 0rem;
                margin-top: 0rem;
                cursor: pointer;
            }
        }

        .banner {
            font-size: calc(var(--font-size) / 2);
        }

        .output {
            background: var(--bg-color);
            overflow-x: hidden;
            overflow-y: auto;
            padding: 3rem 2rem;
            text-shadow: 0rem 0.2rem 1rem lighten(var(--bg-color),20%);
            z-index: -1;
            background: radial-gradient(
            var(--bg-color) 0%,
            var(--edge-color) 100%
            );
            pointer-events: all;
        }

        .scanlines {
            background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0,0,0,0.1) 70%,
            rgba(0,0,0,0.25)
            );
            background-size: 100% 0.33rem;
            border-radius: 2rem;
            position: absolute;
            pointer-events: none;
            z-index: 5;
        }


        .blinky {
            animation: blinker 1.25s linear infinite;
        }

        @keyframes blinker {
            50% {
                opacity: 0;
            }
        }
`