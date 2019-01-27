import React from "react";
import TextBox from "entire-ui/TextBox";

const MultilineTextBox = props =>(
    <React.Fragment>
        <TextBox 
            id="sampleId" 
            label="first name" 
            placeholder="please enter your name" 
            multiline
        />
    </React.Fragment>
);
    

export default MultilineTextBox;