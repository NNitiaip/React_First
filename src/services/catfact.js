import react from 'react'
async function Getdata(amount){
    const RQ =  await fetch("testjson.json");

    let res = await RQ.json();
   
 
    return res
}

function FactCAT(amount){
  return  Getdata(amount);
}

export default FactCAT