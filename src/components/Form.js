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

          <p> Enter the <strong>total</strong> amounts for each, if a <strong>double</strong> course was studied (24 credit points), 
          include the course and grade <strong>twice</strong>. 
          <br></br> <br></br> 
          If you received a <strong>fail</strong> grade (NN), include it in the total courses studied.
           </p>
            
            <form onSubmit={submitHandler}>
                <label for="totalCourses"> Courses Studied:</label>
                <input 
                    name="totalCourses" 
                    type="number" 
                    className="gpa-input"
                    required
                    min="1"
                    max="99"
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
                    max="99"
                />
                <label for="totalDIs"> Distinctions (DI):</label>  
                <input 
                    name="totalDIs"
                    type="number" 
                    className="gpa-input" 
                    required
                    min="0"
                    defaultValue="0"
                    max="99"

                />

                <label for="totalCRs"> Credits (CR):</label>  
                <input 
                    name="totalCRs"
                    type="number" 
                    className="gpa-input" 
                    required
                    min="0"
                    defaultValue="0"
                    max="99"

                />
                <label for="totalPAs"> Passes (PA):</label>  
                <input
                    name="totalPAs"
                    type="number" 
                    className="gpa-input" 
                    required
                    min="0"
                    defaultValue="0"
                    max="99"


                />
                
                <button className="gpa-button" type="submit"> Submit </button>
               
            </form>
        </div>
    )
}



export default Form;