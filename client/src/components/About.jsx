import '../styles/Modal.css'

function About({show, click}) {


    return (
        <>
            <div id="myModal" className="modal" style={{display: show}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={click}>&times;</span>
                        <h2>About</h2>
                    </div>
                    <div className="modal-body">
                        <p>Tamagotchi Project Made By Marcos Wang.</p>
                        <p>Inspired by the Original<a target="_blank" href="https://tamagotchi.com/">Tamagotchi</a></p>
                        <p><a target="_blank" href="https://icons8.com/icon/18066/leaf">Leaf</a>icon by<a target="_blank" href="https://icons8.com">Icons8.</a></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
