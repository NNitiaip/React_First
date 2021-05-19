import React, { Component } from 'react'

export default class allservices extends Component {
   constructor(props){
       super(props)
     
   }

   async Feachdata(url,json,setdata){
    const RQ =  await fetch("https://jsonplaceholder.typicode.com/users");
    // let res = await RQ.json();
   
    return RQ
}
 FactCAT(amount){
  return  this.Feachdata(amount);
}

  }