import '../styles/Modal.css'

function Contact({show, click}) {


    return (
        <>
            <div id="myModal" className="modal" style={{display: show}}>
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={click}>&times;</span>
                        <h2>Contact Me</h2>
                    </div>
                    <div className="modal-body">
                        <p>Contact Me by My Phone Number: 949-506-9616</p>
                        <p>Or Email me at: wangfmarcos@gmail.com</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact
