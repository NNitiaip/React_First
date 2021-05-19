import react from 'react'
async function Getdata(amount){
    // const RQ =  await fetch("testjson.json");
    const RQ =  await fetch("https://jsonplaceholder.typicode.com/users");
    return RQ
    
}

function FactCAT(amount){
  return  Getdata(amount);
}

export default FactCAT