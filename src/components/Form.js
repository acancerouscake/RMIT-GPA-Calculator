import React from "react";


const Form = ({ onSubmit }) => {
    const submitHandler = (e) => {
        e.preventDefault();
       // console.log(e);
        const submittedTexts = {};
        Array.from(e.target.children).forEach(input => {
            if (input.name) {
                submittedTexts[input.name] = parseFloat(input.value);
            }
        }, );

        onSubmit(submittedTexts);
        e.target.reset();
    };
    
    return (
       
        <div className="gpa-form">

          <p> Enter the <strong>total</strong> amounts for each, if a <strong>double</strong> course was studied (24 credit points), include the course and grade <strong>twice</strong>.  </p>
            
            <form onSubmit={submitHandler}>
                <label for="totalCourses"> Courses Studied:</label>
                <input 
                    name="totalCourses" 
                    type="number" 
                    className="gpa-input"
                    required
                    min="1"
                    defaultValue="24"
                />

                <label for="totalHDs"> High Distinctions (HD):</label>     
                <input 
 
                    name="totalHDs"
                    type="number" 
                    className="gpa-input"
                    required 
                    min="0"
                    defaultValue="0"

                />
                <label for="totalDIs"> Distinctions (DI):</label>  
                <input 
                    name="totalDIs"
                    type="number" 
                    className="gpa-input" 
                    required
                    min="0"
                    defaultValue="0"

                />

                <label for="totalCRs"> Credits (CR):</label>  
                <input 
                    name="totalCRs"
                    type="number" 
                    className="gpa-input" 
                    required
                    min="0"
                    defaultValue="0"

                />
                <label for="totalPAs"> Passes (PA):</label>  
                <input
                    name="totalPAs"
                    type="number" 
                    className="gpa-input" 
                    required
                    min="0"
                    defaultValue="0"


                />

                <label for="totalSPs"> Supplementary Passes (SP):</label>  
                <input 
                    name="totalSPs"
                    type="number" 
                    className="gpa-input" 
                    required
                    min="0"
                    defaultValue="0"

                />
                
                <button className="gpa-button" type="submit"> Submit </button>
               
            </form>
        </div>
    )
}



export default Form;