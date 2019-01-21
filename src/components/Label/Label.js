import React from "react";
import PropTypes from "prop-types";
/** 
    * label component for html inputs
    */
class Label extends React.Component{
    render(){
        return(
            <label className="label" for={this.props.for}>
                {this.props.text}
                {
                    this.props.required &&
                    <span className="label--required">*</span>
                }
            </label>
            );
    }
} 
  

Label.propTypes={
    /** 
     * distination component
     */
    for:PropTypes.string.isRequired,
    /** 
     * label's text 
     */
    text:PropTypes.string.isRequired,
    /**
     * required identifier 
     */
    required: PropTypes.bool
};

Label.defaultProps={
    required:false
}

export default Label;