const path = require("path");
const {file,parser}=require("./util");
const chokidar = require('chokidar');

const componentsPath=path.resolve(__dirname, "../component");
const examplesPath=path.resolve(__dirname, "../example");
const documentationConfigPath=path.resolve(__dirname, "../doc-config.js");
const log=console.log;

const getExamples= (examples,componentName)=>{
    
    return examples
    .filter(examplefile=>{
        let cleanExampleFilePath=examplefile.path.replace(/\/\//g, '/');
        let cleanExampleDirPath=path.join(examplesPath,componentName).replace(/\/\//g, '/');
        return cleanExampleFilePath.startsWith(cleanExampleDirPath);
    })
    .map(examplefile=>{
        try{
            let parsedComponent= parser.parse(examplefile.content);
            return{
                name:parsedComponent.displayName,
                description:parsedComponent.description,
                code:examplefile.content,
                exampleFor:componentName
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

const run=()=>{
    log("start generating documents...")
    generateAndSaveDocumentation()
    .then(r=>log("documents generated!!!"))
    .catch(log);
}

if(process.argv.includes("--watch")){
    chokidar.watch([componentsPath,examplesPath]).on("change",()=>{
        log("new changes has been detected");
        run();
    });
}
run();





