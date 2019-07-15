import React, { Component } from 'react';
import SearchForm from './components/SearchForm';
import RestaurantList from './components/RestaurantList';
import './App.css';
import ACTIONS from "./modules/action";
import { connect } from "react-redux";

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      restaurants: [],
      submitText: 'Submit'
    }
  }
  
  filterRestaurantList = (data, needle) => {
    return data.filter(item =>
      Object.keys(item).some(key => 
        String(item[key]).toLowerCase().includes(needle.toLowerCase())
      )
    )    
  }

  apiCall = (e) => {
    if (!e.city) {
      document.querySelector('#city').classList.add('invalid');
      this.setState({ restaurants: [], submitText: 'Submit' });
      this.props.deleteAllItems();
      return;
    }

    fetch(`https://opentable.herokuapp.com/api/restaurants?city=${e.city}`)
    .then(res => res.json())
    .then((data) => {
      // Filter the result if there is a value for Refine
      if (e.refine) {
        this.res = this.filterRestaurantList(data.restaurants, e.refine);
      } else {
        this.res = data.restaurants;
      }

      // Update the submit button text.
      this.setState({ submitText: 'Update' });

      // Update the restaurant list.
      this.setState({ restaurants: this.res });

      // Update redux store.
      this.props.addAllItems(this.state.restaurants);
    })
    .catch(console.log)
  }
  
  render() {
    return (
        <div className="container">
          <SearchForm apiCall={this.apiCall} submitText={this.state.submitText} />
          <table summary="List of restaurants from OpenTable API">
            <thead>
              <tr>
                  <th>Name</th>
                  <th>Area</th>
                  <th>Address</th>
                  <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <RestaurantList restaurants={this.state.restaurants} />
            </tbody>
          </table>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  restaurants: state.restaurants
});

const mapDispatchToProps = dispatch => ({
  addAllItems: item => dispatch(ACTIONS.addAllItems(item)),
  deleteAllItems: () => dispatch(ACTIONS.deleteAllItems()),
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;

