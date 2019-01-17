import React from "react";
import PropTypes from 'prop-types';
/**
   * this is basic documentation for this component 
   */
class Text extends React.Component {
    render(){
        return(<h1>ok1</h1>);
    }
}



Text.propTypes = {
  /**
   * Description of prop "foo".
   */
  foo: PropTypes.number,
  /**
   * Description of prop "bar" (a custom validation function).
   */
  bar: function(props, propName, componentName) {
    // ...
  },
  baz: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
};

Text.defaultProps = {
  foo: 42,
  bar: 21
};
export default Text;