import { useState } from "react";
import './Nav.css'

function NavButton(props) {
    const [mouseHover, setMouseHover] = useState(false);
    return (
        <button
            onClick={() => {
                props.changePage(props.pageName);
                props.setMenuToggle(false);
            }}
            disabled={props.pageName === props.currentPage}
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}
            className="nav-button"
            style={{
                backgroundColor: props.pageName === props.currentPage ? '#08ff' : mouseHover ? '#08f4' : '#0000',
                cursor: props.pageName === props.currentPage ? 'default' : 'pointer',
                transition: 'background-color 0.2s',
            }}
        >
            {props.children}
        </button>
    )
}

export default function Nav(props) {
    const [menuToggle, setMenuToggle] = useState(false);

    function menuButtonClick() {
        const buttonContainer = document.getElementById('button-container');
        setMenuToggle(!menuToggle);
    }

    return (
        <div id="container">
            <button id="menu-button" onClick={menuButtonClick}></button>
            <div id="name-container">
                <h3>Tyler Davies</h3>
            </div>
            <div
                id="button-container"
                style={{right: menuToggle ? '40vw' : '101vw'}}
            >
                <NavButton
                    setMenuToggle={setMenuToggle}
                    currentPage={props.pageName}
                    pageName='home'
                    changePage={props.changePage}
                >
                    Home
                </NavButton>

                <NavButton
                    setMenuToggle={setMenuToggle}
                    currentPage={props.pageName}
                    pageName='about'
                    changePage={props.changePage}
                >
                    About
                </NavButton>

                <NavButton
                    setMenuToggle={setMenuToggle}
                    currentPage={props.pageName}
                    pageName='skills'
                    changePage={props.changePage}
                >
                    Skills
                </NavButton>

                <NavButton
                    setMenuToggle={setMenuToggle}
                    currentPage={props.pageName}
                    pageName='projects'
                    changePage={props.changePage}
                >
                    Projects
                </NavButton>

                <NavButton
                    setMenuToggle={setMenuToggle}
                    currentPage={props.pageName}
                    pageName='contact'
                    changePage={props.changePage}
                >
                    Contact
                </NavButton>
            </div>
            <div
                id="backdrop"
                onClick={() => setMenuToggle(false)}
                style={{
                    pointerEvents: menuToggle ? 'auto' : 'none',
                    opacity: menuToggle ? 1 : 0,
                    backdropFilter: menuToggle ? 'blur(20px)' : 'blur(0px)',
                }}
            />
        </div>
    );
}