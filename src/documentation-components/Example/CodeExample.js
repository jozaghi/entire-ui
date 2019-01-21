import React from 'react';
import PropTypes from 'prop-types';
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/atom-one-light.css';

hljs.registerLanguage('javascript', javascript);
hljs.configure({useBR: true});

class CodeExample extends React.Component {
  componentDidMount() {
    hljs.highlightBlock(this.element);
  }
  componentDidUpdate(){
    hljs.highlightBlock(this.element);
  }
  render() {
    return (
      <pre ref={ref => { this.element = ref }}>
        <code className="javascript" >
          {this.props.children}
        </code>
      </pre>
    );
  }
}

CodeExample.propTypes = {
  children: PropTypes.string.isRequired
}

export default CodeExample;
