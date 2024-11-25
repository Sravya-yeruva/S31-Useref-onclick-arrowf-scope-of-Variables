import React, { useRef } from "react";

function StudentForm() {
  let FirstNameInputRef=useRef();
  let LastNameInputRef=useRef();
  let EngMarksInputRef=useRef();
  let TelMarksInputRef=useRef();
  let HinMarksInputRef=useRef();
  let SciMarksInputRef=useRef();
  let MatMarksInputRef=useRef();
  let SocMarksInputRef=useRef();
  let ResultLabelRef=useRef();
  
  
  return (
    <div class="mainD">
      <form>
        <fieldset>
        <legend class="headingH">Please Enter Your Details</legend>
        </fieldset>
        <div>
          <label for="input">First Name:</label>
          <input id="input" type="text" ref={FirstNameInputRef} ></input>
        </div>
        <div>
          <label for="input1">Last Name:</label>
          <input id="input1" type="text" ref={LastNameInputRef}></input>
        </div>
        <div>
          <label for="input2">English Marks:</label>
          <input id="input2" type="number" ref={EngMarksInputRef}></input>
        </div>
        <div>
          <label for="input3">Telugu Marks:</label>
          <input id="input3" type="number"  ref={TelMarksInputRef}></input>
        </div>
        <div>
          <label for="input4">Hindi Marks:</label>
          <input id="input4" type="number" ref={HinMarksInputRef}></input>
        </div>
        <div>
          <label for="input5">Science Marks:</label>
          <input id="input5" type="number" ref={SciMarksInputRef}></input>
        </div>
        <div>
          <label for="input6">Maths Marks:</label>
          <input id="input6" type="number" ref={MatMarksInputRef}></input>
        </div>
        <div>
          <label for="input7">Social Marks:</label>
          <input id="input7" type="number" ref={SocMarksInputRef}></input>
        </div>
        <div>
         <label ref={ResultLabelRef}>Result</label>
        </div>
        <div>
            <button type="button" onClick={()=>{
              let FirstName=FirstNameInputRef.current.value;
              let LastName=LastNameInputRef.current.value;
              let EngMarks=Number(EngMarksInputRef.current.value);
              let TelMarks=Number(TelMarksInputRef.current.value);
              let HinMarks=Number(HinMarksInputRef.current.value);
              let SciMarks=Number(SciMarksInputRef.current.value);
              let MatMarks=Number(MatMarksInputRef.current.value);
              let SocMarks=Number(SocMarksInputRef.current.value);
              let TotalMarks= EngMarks+ TelMarks+ HinMarks+ SciMarks+ MatMarks+ SocMarks;
              ResultLabelRef.current.innerHTML=`${FirstName} ${LastName} got Total Marks ${TotalMarks}` 


              alert(`Total marks are ${TotalMarks}`);
            
            }}>Result</button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
