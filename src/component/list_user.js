import { Route } from 'react-router-dom'
import React, { Component } from 'react'
import TablePage from './table';
import allservices from '../services/allservices'

class List_user extends Component {
    constructor(props) {
        super(props)
    this.state = {
        data: {}
    }
    this.allservices = new allservices()
        // console.log(  this.allservices.FactCAT(2))
    }
    getcolumn = (res) => {
        let $column;
        res.forEach(el => {
            delete el["address"]
            delete el["company"]
        });
        const newData = Object.keys(res[0])

        $column = newData.filter((v) => v != "address" && v != "company").map((val, i) => {
            return {
                "label": val,
                "field": val,
                "minimal": "sm"
            }
        }

        );
        this.setState({
            data: {
                column: $column,
                rows: res
            }

        });


    }

   componentDidMount(){
    // console.log(  this.allservices)
    const RQ =  this.allservices.Feachdata();
    RQ.then((data) => { return data.json() }).then((data) => {
      this.getcolumn(data)
    })
   }
    render() {
      
        let { data } = this.state
    
        let isNull = data.hasOwnProperty('column');

        return (
            isNull && <TablePage data={data} />
        )
    }
}

export default List_user
