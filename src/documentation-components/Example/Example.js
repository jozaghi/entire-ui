import React from "react";
import CodeExample from "./CodeExample";
import Props from "./Props";

const renderProps=props=>{
    let rows=[];
    Object.keys(props).forEach(key=>{
        rows.push(<tr key={key}>
            <td>{key}</td>
            <td>{props[key].description}</td>
            <td>{props[key].type.name}</td>
            <td>{props[key].required}</td>
            <td>{props[key].defaultValue?props[key].defaultValue.value:""}</td>
        </tr>);
    });

    return(<table>
            <thead>
                <tr>
                    <td>
                        Name
                    </td>
                    <td>
                        Description
                    </td>
                    <td>
                        Required
                    </td>
                    <td>
                        Default Value
                    </td>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>);
     
}

class CodeBox extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayCode:false
        };
        this.handleTaggleCodeButton=this.handleTaggleCodeButton.bind(this);
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
                <div className={`codebox__code ${this.state.displayCode?"codebox__code--show":""}`} >
                    <CodeExample>
                        {this.props.code}
                    </CodeExample>
                </div>
            </div>
        );
    }
}


const renderExamples= examples=>{
    return examples.map((item,i)=>{
        const ExampleComponent =  require(`../../examples/${item.exampleFor}/${item.name}`).default;
        return (<div key={i} >
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <div className="document__example-component" >
                    <ExampleComponent/>
                </div>
                <CodeBox code={item.code}/>
                
            </div>);
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
                        {renderExamples(config.examples)}
                    </div>
                }
                <Props props={config.props}/>
            </section>
        </div>
    );
}

export default Example; 