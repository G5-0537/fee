console.clear();
const fs=require("fs/promises");
async function readLocalFile(){
  try{
    console.log("begin");
    const data=await fs.readFile("sample.txt","utf8");
    console.log("Success! File content below");
    console.log(data);
  }
  catch(error){
    console.error("error reading the file",error.message);
  }finally{
    console.log("End....");
  }

}
readLocalFile();

console.log("This was the last sync cod ewhich is displayed here");