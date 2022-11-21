import React from 'react';
import { render } from "@testing-library/react";


//import React from "react";
  
const Teams = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'Right',
        alignItems: 'Right',
        height: '100vh'
      }}
    >
      <h1><h1>Welcome To web readers!!!!</h1></h1>
      <Array />
    </div>
  );
};
class Array extends React.Component {
    constructor() {
        super();
        this.state={
            employees :[
                {id: 1, Name: 'Shruthi', country: 'Ausrtia'},
                {id: 2, Name: 'Shree', country: 'Belgium'},
                {id: 3, Name: 'Swetha', country: 'Canada'},
                {id: 4, Name: 'Venkat', country: 'Denmark'},
                {id: 5, Name: 'Naveen', country: 'Egypt'},
            ]
        }
    }
}
render()
    {this.state.employees.map(employee => {
        return (
            
            <div key={employee.id}>
                
                <h2>name: {employee.name}</h2>
                <h2>country: {employee.country}</h2>

            <hr/>
            </div>
        );
    })}


 
export default Teams;



 export {EmployeeArray};