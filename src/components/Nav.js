import { useState } from "react";

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
            className="h-16 md:h-12"
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
        <div className="flex flex-col top-0 left-0 md:items-center w-screen bg-slate-800 md:bg-slate-200 md:bg-opacity-10 md:backdrop-blur-md md:max-w-64 md:rounded-2xl">
            <button
                className="w-16 h-16 md:hidden bg-slate-400 z-50"
                onClick={menuButtonClick}
            />
            <div className="hidden md:flex my-10">
                <h3>Tyler Davies</h3>
            </div>
            <div
                id="button-container"
                className="flex flex-col bg-slate-800 md:bg-transparent top-0 fixed h-full transition-all w-3/5 md:w-32 z-50 md:static md:mb-10"
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
                onClick={() => setMenuToggle(false)}
                className="w-screen h-screen transition-all z-40 top-0 fixed"
                style={{
                    pointerEvents: menuToggle ? 'auto' : 'none',
                    opacity: menuToggle ? 1 : 0,
                    backdropFilter: menuToggle ? 'blur(20px)' : 'blur(0px)',
                }}
            />
        </div>
    );
}