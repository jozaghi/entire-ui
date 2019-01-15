import React from "react";
import PropTypes from 'prop-types';

class Test extends React.Component {
    render(){
        return(<h1>ok</h1>);
    }
}


Test.propTypes = {
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

Test.defaultProps = {
  foo: 42,
  bar: 21
};
export default Test;