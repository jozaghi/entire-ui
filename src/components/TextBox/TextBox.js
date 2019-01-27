import React from "react";
import PropTypes from "prop-types";
import Label from "entire-ui/Label";

/**
 * Text box component 
 */
class TextBox extends React.Component{

    constructor(props){
        super(props);

    }

    prepareInput(){
        let { 
            id,
            multiline,
            placeholder,
            errors
        } = this.props;
        if(!multiline){
            return <input type="text" id={id} className={`text-box ${ errors.length>0?"text-box--error":""}`} placeholder={placeholder}/>
        }else{
            return <textarea id={id} className={`text-box text-box--multiline  ${ errors.length>0?"text-box--error":""}`} placeholder={placeholder}></textarea>
        }
    }
    prepareHint(){
        let { hint } = this.props;
        if(hint)
            return <div className="form__hint">{hint}</div>;
    }
    prepareErrors(){
        let { errors } = this.props;
        if( errors.length > 0){
            return <div className="form__error-box">
                {errors.map(error=><div>{error}</div>)}
            </div>;
        }
    }

    render(){
        let {
            id,
            label,
            required
        }= this.props;
        let input= this.prepareInput();
        let hint = this.prepareHint();
        let errors = this.prepareErrors();
        return (<div className="form__group" >
            <Label text={label} for={id} required={required}/>
            {hint}
            {input}
            {errors}
        </div>);
    }
}

TextBox.propTypes = {
    /** required id */
    id:PropTypes.string.isRequired,
    /** Label text */
    label:PropTypes.string.isRequired,
    /** value of textbox */
    value:PropTypes.string,
    /** use textarea insted of text input */
    multiline:PropTypes.bool,
    placeholder:PropTypes.string,
    /** hint text */
    hint:PropTypes.string,
    required:PropTypes.bool,
    /** list of error messages for this field */
    errors:PropTypes.array
};

TextBox.defaultProps = {
    multiline:false,
    required:false,
    errors:[]
};

export default TextBox;