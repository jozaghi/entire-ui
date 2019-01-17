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

const renderExamples= examples=>{
    return examples.map((item,i)=>{
        const ExampleComponent =  require(`../../example/${item.exampleFor}/${item.name}`).default;
        return (<div key={i} >
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <ExampleComponent/>
                <CodeExample>
                    {item.code}
                </CodeExample>
                <h1>{item.path}</h1>
            </div>);
    });
}

const Example = props=>{
    let { config } = props;
    return (<div>
        <h1>{config.name}</h1>
        <p>{config.description}</p>
        <div>
            {renderExamples(config.examples)}
        </div>
        <Props props={config.props}/>
    </div>);
}

export default Example; 