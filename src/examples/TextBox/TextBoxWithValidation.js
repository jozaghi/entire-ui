import React from "react";
import TextBox from "entire-ui/TextBox";

const TextBoxWithValidation = props =>(
    <React.Fragment>
        <TextBox 
            id="textBoxWithHint"
            label="Social security number"
            placeholder="0000000000"
            hint="please skip dashes in your social security number"
            errors={[
                "this field is required"
            ]}
            required
            />
    </React.Fragment>
);
    

export default TextBoxWithValidation;