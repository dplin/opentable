import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import RestaurantList from './components/RestaurantList';
import SearchForm from './components/SearchForm';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const storez = configureStore([
    thunk,
])();

export const mountWithProvider = children => (store = storez) =>
  mount(<ReduxProvider store={store}>{children}</ReduxProvider>);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ReduxProvider store={storez}>
      <App />
    </ReduxProvider>, 
  div);
});

describe('App component', () => {
  it('App component created successfully', () => {
    const wrapper = mountWithProvider(<App />)();
    expect(wrapper.exists()).toBe(true);
  });

  it('should render Search Form', () => {
    const props = {
      apiCall: () => {},
      submitText: 'Submit'
    };
    const wrapper = mountWithProvider(<SearchForm {...props} />)();
    expect(wrapper.exists()).toBe(true);
  });

  it('should set submit button text in the Search Form to "Update"', () => {
    const props = {
      apiCall: () => {},
      submitText: 'Update'
    };
    const wrapper = mountWithProvider(<SearchForm {...props} />)();
    expect(wrapper.find('SearchForm a').text()).toEqual('Update');
  });  

  it('should render Restaurant List Component', () => {
    const props = {
      restaurants: [
        {
          address: "1227, rue de la Montagne",
          area: "Montreal / Quebec",
          city: "Montreal",
          country: "CA",
          id: 23323,
          image_url: "https://www.opentable.com/img/restimages/23323.jpg",
          lat: 45.497334,
          lng: -73.573668,
          mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=23323",
          name: "Europea",
          phone: "5143989229",
          postal_code: "H3G1Z2",
          price: 4,
          reserve_url: "http://www.opentable.com/single.aspx?rid=23323",
          state: "QC"
        }              
      ]
    };
    const wrapper = mountWithProvider(<table><tbody><RestaurantList {...props} /></tbody></table>)();
    expect(wrapper.exists()).toBe(true);
  });
  
  it('should render Restaurant List table with 2 rows', () => {
    const props = {
      restaurants: [
        {
          address: "1227, rue de la Montagne",
          area: "Montreal / Quebec",
          city: "Montreal",
          country: "CA",
          id: 23323,
          image_url: "https://www.opentable.com/img/restimages/23323.jpg",
          lat: 45.497334,
          lng: -73.573668,
          mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=23323",
          name: "Europea",
          phone: "5143989229",
          postal_code: "H3G1Z2",
          price: 4,
          reserve_url: "http://www.opentable.com/single.aspx?rid=23323",
          state: "QC"
        },
        {
          address: "443 rue St-Francois-Xavier",
          area: "Montreal / Quebec",
          city: "Montreal",
          country: "CA",
          id: 28072,
          image_url: "https://www.opentable.com/img/restimages/28072.jpg",
          lat: 45.503286,
          lng: -73.556355,
          mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=28072",
          name: "Bonaparte",
          phone: "5148444368",
          postal_code: "H2Y 2T1",
          price: 3,
          reserve_url: "http://www.opentable.com/single.aspx?rid=28072",
          state: "QC"  
        }              
      ]
    };
    const wrapper = mountWithProvider(<table><tbody><RestaurantList {...props} /></tbody></table>)();
    expect(wrapper.find('RestaurantList tr').length).toEqual(2);
  });

  it('should render Restaurant List table with 0 rows', () => {
    const props = {
      restaurants: []
    };
    const wrapper = mountWithProvider(<table><tbody><RestaurantList {...props} /></tbody></table>)();
    expect(wrapper.find('RestaurantList tr').length).toEqual(0);
  });
});