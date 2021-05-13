import React from "react";
import Lottie from "lottie-react";
import confetti from "../lotties/confetti.json";

const Results = ( {gpaData, close, show} ) => {
        if (Object.keys(gpaData).length === 0) {
            return null;
        };    
        
    const credits = gpaData.totalCourses * 12;
    const hd = gpaData.totalHDs === 0 ? 0 : gpaData.totalHDs * 4 * 12
    const di = gpaData.totalDIs === 0 ? 0 : gpaData.totalDIs * 3 * 12
    const cr = gpaData.totalCRs === 0 ? 0 : gpaData.totalCRs * 2 * 12
    const pa = gpaData.totalPAs === 0 ? 0 : gpaData.totalPAs * 1 * 12
    const sp = gpaData.totalSPs === 0 ? 0 : gpaData.totalSPs * 1 * 12

    const totalGradePoint = hd + di + cr + pa + sp;
    const finalGPA = Math.min(Math.round(totalGradePoint/credits * 10 ) /10, 4);
    
    return (   
        <div className="results-gpa" 
            style={{ 
                transform: show ? 'translateY(0vh)' : 'translateY(-100vh)', 
                opacity: show ? '1' : '0' 
            }}>  

            <div className="inner-results">
                <p>Your GPA is:</p>
                <div className="lottie-confetti"><Lottie animationData={confetti} />  </div>
                <h3>  {finalGPA} </h3>   
                <button className="close-btn" onClick={close}> Close </button>
            </div>
        </div>      
    )
};

export default Results;
