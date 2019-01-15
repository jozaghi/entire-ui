const fs=require("fs");
const recursiveReader= require("recursive-readdir");
const fileEncoding="utf8";

const getFileList= (path,filters=[])=>
    new Promise((resolve,reject)=>{
        recursiveReader(path,filters,(err,files)=>{
            if(err){
                return reject(err);
            }
            resolve(files);
        });
    });


const readAllText= path=>
    new Promise((resolve,reject)=>{
        fs.readFile(path,fileEncoding,(err,content)=>{
            if(err){
                return reject(err);
            }
            resolve({path,content});
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

const saveAllText=(path,text)=>new Promise((resolve,reject)=>{
    fs.writeFile(path,text,err=>{
        if(err){
            return reject(err);
        } 
        resolve();
    });
});

module.exports = {
    getFileList,
    readAllText,
    readAllFiles,
    saveAllText
};


