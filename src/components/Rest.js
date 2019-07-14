import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Rest extends Component {
    state = {
        value: {
            city: '',
            refine: ''
        }
    }
    
    updateValue = (event) => {
        this.setState({ value: 
            { 
                city: document.querySelector('#city').value, 
                refine: document.querySelector('#refine').value
            }
        });
    }
    componentDidMount(){

    }
    render() {
        const vv = document.querySelector('#city');

        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="city" type="text" className="validate" onChange={this.updateValue.bind(this)} />
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="refine" type="text" className="validate" onChange={this.updateValue.bind(this)} />
                            <label htmlFor="refine">Refine (Name / Address / Area)</label>
                        </div>
                    </div>
                    <div className="row">
                        <a className="waves-effect waves-light btn-large" onClick={this.props.apiCall.bind(this, this.state.value)}>Submit</a>
                    </div>
                </form>
            </div>
        )
    }
}

Rest.propTypes = {
    apiCall: PropTypes.func.isRequired,
}
  
export default Rest
