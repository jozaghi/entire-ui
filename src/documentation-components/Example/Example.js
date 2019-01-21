import React from "react";
import CodeExample from "./CodeExample";
import Props from "./Props";



class CodeBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayCode:false
        };
        this.handleTaggleCodeButton=this.handleTaggleCodeButton.bind(this);
    }
    componentWillReceiveProps(){
        this.setState({displayCode:false});
    }
    handleTaggleCodeButton(){
        this.setState({
            displayCode:!this.state.displayCode
        });
    }

    render(){
        return(
            <div className="codebox">
                <button className="codebox__button" onClick={this.handleTaggleCodeButton} >{this.state.displayCode?"hide":"show"} code</button>
                <div className={`codebox__code`} >
                    {this.state.displayCode &&
                        <CodeExample>
                            {this.props.code}
                        </CodeExample>
                    }
                </div>
            </div>
        );
    }
}


const renderExamples= examples=>{
    return examples.map((item,i)=>{
        const ExampleComponent =  require(`../../examples/${item.exampleFor}/${item.name}`).default;
        return (
            <React.Fragment>
            { i>0 && <div key={i} className="divider"></div>}
            <div key={i} >
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <div className="document__example-component" >
                    <ExampleComponent/>
                </div>
                <CodeBox code={item.code} key={i}/>
            </div>
            </React.Fragment>
            );
    });
}

const Example = props=>{
    let { config } = props;
    return (
        <div className="document">
            <section className="document__header">
                <h1>{config.name}</h1>
            </section> 
            <section className="document__body">
                <p>{config.description}</p>
                {config.examples.length>0 &&
                    <div className="document__example-box" >
                        <div className="util-margin-bottom-large">
                            <h3>{`Example${config.examples.length>1?'s':''}:`}</h3>
                        </div>
                        {renderExamples(config.examples)}
                    </div>
                }
                <Props props={config.props}/>
            </section>
        </div>
    );
}

export default Example; 