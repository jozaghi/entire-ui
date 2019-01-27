import React from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight.js';
//import hljs from 'highlight.js/lib/highlight'
//import javascript from 'highlight.js/lib/languages/javascript';
//import 'highlight.js/styles/atom-one-light.css';

//hljs.registerLanguage('javascript', javascript);
//hljs.configure({useBR: true});

class CodeExample extends React.Component {
  componentDidMount() {
    //hljs.highlightBlock(this.element);
  }
  componentDidUpdate(){
    //hljs.highlightBlock(this.element);
  }
  render() {
    return (
      <Highlight className="javascript" >
        {this.props.children}
      </Highlight>
    );
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample;
