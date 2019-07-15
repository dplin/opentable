import React, { Component } from 'react'
import uuid from 'uuid';
import PropTypes from 'prop-types';

export class RestaurantList extends Component {
    render() {
        return this.props.restaurants.map((restaurant) => (
            <tr key={uuid.v4()}>
                <td>{restaurant.name}</td>
                <td>{restaurant.area}</td>
                <td>{restaurant.address}</td>
                <td>${restaurant.price}</td>
            </tr>
        ));
    }
}

RestaurantList.propTypes = {
    restaurants: PropTypes.array.isRequired,
}

export default RestaurantList
