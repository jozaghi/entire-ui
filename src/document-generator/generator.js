const path = require("path");
const {file,parser}=require("./util");


const componentsPath=path.resolve(__dirname, "../component");
const examplesPath=path.resolve(__dirname, "../example");
const documentationConfigPath=path.resolve(__dirname, "../doc-config.js");
const log=console.log;

const getExamples= (examples,componentName)=>{
    return examples
    .filter(examplefile=>examplefile.path.startsWith(path.join(examplesPath,componentName)))
    .map(examplefile=>{
        try{
            let parsedComponent= parser.parse(examplefile.content);
            return{
                name:parsedComponent.displayName,
                description:parsedComponent.description,
                code:examplefile.content
            };   
        }catch(err){
            log(err);
            return{
                error:"error in parsing react component!!!"
            }
        }
    });
}

const mapContentToDocuments= (componentfiles,examples)=>{
    let docs=[];
    componentfiles.map(componentfile=>{
        let parsedComponent= parser.parse(componentfile.content);
        docs.push({
            name:parsedComponent.displayName,
            description:parsedComponent.description,
            props:parsedComponent.props?parsedComponent.props:[],
            examples:getExamples(examples,parsedComponent.displayName)
        });   
    });
    return docs;
}

const generateAndSaveDocumentation= async ()=>
    {
        let files= await file.readAllFiles(componentsPath);
        let examples= await file.readAllFiles(examplesPath);
        let docs=mapContentToDocuments(files,examples);
        let jsonDoc= `module.exports=${docs.length>0?JSON.stringify(docs):'[]'}`;
        await file.saveAllText(documentationConfigPath,jsonDoc);
    };




generateAndSaveDocumentation()
.then(r=>log("done!!!"))
.catch(log);




