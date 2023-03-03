import React, { Component } from 'react'
import BasicExample from './Table'
//container
export default class StatefulApp extends Component {
    state={ 
        data:[
            {'acno':101,'name':'Sandy','balance':50000},
            {'acno':102,'name':'Vedha','balance':70000},
            {'acno':103,'name':'Madan','balance':46000}
        ]
    }
  render() {
    return (
      <div className="bg-info">
        <h3 className="bg-success text-warning">Account Holder Details</h3>
        <table className="table table-hover table-striped">
            <tbody>
                {
                    this.state.data.map( (customer,index)=> 
                      <TableRow key={customer.acno} dataProp={customer}/>
                    )
                }
            </tbody>
        </table>
        <BasicExample customerMap = "welcome"/>
      </div>
    )
  }
}
//---------------------------------------------
const TableRow= (props)=>{
    return(
    <tr>
        <td>{props.dataProp.acno}</td>
        <td>{props.dataProp.name}</td>
        <td>{props.dataProp.balance}</td>
    </tr>
    )
}
//state is mutable, 
// prop is immutable, readonly , do not change