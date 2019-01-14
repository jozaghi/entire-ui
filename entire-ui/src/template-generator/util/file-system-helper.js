const fs=require("fs");
const recursiveReader= require("recursive-readdir");
const fileEncoding="utf8";

const getFileList= (path,filters=[])=>
    new Promise((resolve,reject)=>{
        recursiveReader(path,filters,(err,files)=>{
            if(err){
                reject(err);
            }
            resolve(files);
        });
    });


const readAllText= path=>
    new Promise((resolve,reject)=>{
        fs.readFile(path,fileEncoding,(err,content)=>{
            if(err){
                reject(err);
            }
            resolve(content);
        });
    });

const readAllFiles=(path,filters=[])=>
    new Promise((resolve,reject)=>
    {
        getFileList(path,filters).then(
            allFiles=>Promise.all(allFiles.map(readAllText))
                .then(resolve)
                .catch(reject)
            )
        .catch(reject);
    });

module.exports = {
    getFileList,
    readAllText,
    readAllFiles
};


