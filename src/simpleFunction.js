
const simpleFunction = (string="",count=0)=>{

    let str="";

     for(let i=0;i<count;i++){
        console.log(string)
        let k=Math.floor(Math.random() * string.length);
        //if(k==10)k=9;
        console.log(k)
        str=str+string.charAt(k);
     }

     return str;
}
export default simpleFunction;