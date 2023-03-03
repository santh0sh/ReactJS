import Table from 'react-bootstrap/Table';

function BasicExample(props) {
  return (
    <div>sagsa - {props.customerMap}</div>
    // <Table striped bordered hover>
    //   <thead>
    //     <tr>
    //       <th>AccNo</th>
    //       <th>Name</th>
    //       <th>Share</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>1</td>
    //       <td>Mark</td>
    //       <td>Otto</td>
    //     </tr>
    //     <tr>
    //       <td>2</td>
    //       <td>Jacob</td>
    //       <td>Thornton</td>
    //     </tr>
    //     <tr>
    //       <td>3</td>
    //       <td> Larry the Bird</td>
    //       <td>@twitter</td>
    //     </tr>
    //     {props.customerMap}
    //     {/* {
    //         this.props.customerMap.map( (customer,index)=> 
    //             <tr>
    //                 <td>{customer.acno}</td>
    //                 <td>{customer.name}</td>
    //                 <td>{customer.balance}</td>
    //             </tr>
    //         )
    //     } */}
    //   </tbody>
    // </Table>
  );
}
/*
{
    this.props.customerMap.map( (customer,index)=> 
        <tr>
            <td>{customer.acno}</td>
            <td>{customer.name}</td>
            <td>{customer.balance}</td>
        </tr>
    )
}
*/
export default BasicExample;