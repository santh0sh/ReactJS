import React, { Component } from 'react'

export default class StatefulApp extends Component {
    constructor(props){
        super(props)

        this.state={
            data:[ 
                {"id":1,"name":'Murthy','balance':50000},
                { "id": 2, "name": 'raju', 'balance': 150000 },
                { "id": 3, "name": 'laxmi', 'balance': 60000 },
            ]
        }
    }
    
  render() {
    return (
        <>
              <h3 className="bg-danger">Account Holder Details</h3>   
              <table className="table table-hover table-striped">
                  <tbody>
                      {
                          this.state.data.map( (person,index)=>
                           <TableRow key={index} data={person}/>
                          )
                      }
                  </tbody>
            </table>
        </>
    )
  }
}

const TableRow = (props)=>{
      return (
          <tr>
              <td>{props.data.id}</td>
              <td>{props.data.name}</td>
              <td>{props.data.balance}</td>
          </tr>
      )
}