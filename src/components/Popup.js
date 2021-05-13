import React from 'react'

function Popup(props) {
    return  (
        <div className="popup"
        style={{ 
            transform: props.timedPopup ? 'translate(0vh)' : 'translate(-100vh)', 
            opacity: props.timedPopup ? '1' : '0'
        }}>  
            <div className="popup-inner">
            <h3>Attention!</h3>
            <p> This calculator is not to be used for a perfect GPA determination. 
                Contact RMIT University for your true GPA or erroneous GPA scores.
                <br></br>Refer to the 'GPA' section via the RMIT University website 
                for guidance on how to calculate your GPA manually.
            </p>
                <button className="close-btn" onClick={props.close}>Close</button>
                { props.children }
            </div>
        </div> 
    )
}

export default Popup
