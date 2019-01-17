import React from "react";
import PropTypes from 'prop-types';

/**
   * asdasdas as asd asd asd asd sasdas 
   */
class SimpleText extends React.Component {
    render(){
        return(<h1>ok2<input type="text"/></h1>);
    }
}


SimpleText.propTypes = {
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

SimpleText.defaultProps = {
  foo: 42,
  bar: 21
};
export default SimpleText;