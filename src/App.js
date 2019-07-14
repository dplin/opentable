import React, { Component } from 'react';
import Rest from './components/Rest';
import Table from './components/Table';
import './App.css';

class App extends Component {
  state = {
    restaurants: []
  }

  apiCall = (e) => {
    fetch(`http://opentable.herokuapp.com/api/restaurants?city=${e.city}`)
    .then(res => res.json())
    .then((data) => {
      //this.setState({ contacts: data })
      console.log(data);

      if (e.refine) {
        let refinedResult = data.restaurants.filter(x => 
          x.area.toLowerCase().includes(e.refine.toLowerCase()) || 
          x.address.toLowerCase().includes(e.refine.toLowerCase()) || 
          x.name.toLowerCase().includes(e.refine.toLowerCase())
        )
        this.res = refinedResult;
      } else {
        this.res = data.restaurants;
      }
      
      this.setState({ restaurants: this.res });

      console.log(this.res);
    })
    .catch(console.log)    
  }
  
  render() {
    return (
      <div className="container">
        <Rest apiCall={this.apiCall}/>
        <table>
          <thead>
            <tr>
                <th>Name</th>
                <th>Area</th>
                <th>Address</th>
                <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <Table restaurants={this.state.restaurants} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
