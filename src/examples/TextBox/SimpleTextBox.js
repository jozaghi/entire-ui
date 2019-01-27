import React from "react";
import TextBox from "entire-ui/TextBox";

const SimpleTextBox = props =>(
    <React.Fragment>
        <TextBox id="sampleId" label="first name" placeholder="please enter your name" />
        <TextBox 
            id="textBoxWithHint"
            label="Social security number"
            placeholder="0000000000"
            hint="please skip dashes in your social security number"/>
    </React.Fragment>
);
    

export default SimpleTextBox;