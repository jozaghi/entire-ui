import React from "react";

const Props = props=>{
    let _props=props.props;
    let rows=[];
    Object.keys(_props).forEach(key=>{
        rows.push(<tr key={key}>
            <td>{key}</td>
            <td>{_props[key].description}</td>
            <td>{_props[key].type.name}</td>
            <td>{_props[key].required}</td>
            <td>{_props[key].defaultValue?_props[key].defaultValue.value:""}</td>
        </tr>);
    });

    if(rows.length==0)return;

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th>Required</th>
                    <th>Default Value</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>);
     
}

export default Props;