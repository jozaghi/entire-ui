import React from "react";
import PropTypes from 'prop-types';
/**
   * this is basic documentation for this component 
   */
class Sample extends React.Component {
    render(){
        return(<h1>ok2</h1>);
    }
}



Sample.propTypes = {
  /**
   * Description of prop "foo".
   */
  foo1: PropTypes.number,
  /**
   * Description of prop "bar" (a custom validation function).
   */
  bar1: function(props, propName, componentName) {
    // ...
  },
  baz: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
};

Sample.defaultProps = {
  foo1: 42,
  bar1: 21
};
export default Sample;