import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class SearchForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: {
                city: '',
                refine: ''
            }
        }
    }
    
    updateValue = (event) => {
        // Set state
        this.setState({ value: 
            { 
                city: document.querySelector('#city').value.trim(), 
                refine: document.querySelector('#refine').value.trim()
            }
        });
    }

    refineResult = (event) => {
        // Set state and then make a callback(API call) to filter/refine the result.
        this.setState(
            { value: 
                { 
                    city: document.querySelector('#city').value.trim(), 
                    refine: document.querySelector('#refine').value.trim()
                }
            },
            () => this.props.apiCall.bind(this, this.state.value)
        );
    }

    render() {
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="city" type="text" className="validate" onChange={this.updateValue.bind(this)} required/>
                            <label htmlFor="city">City (Required)</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="refine" type="text" className="validate" onChange={this.refineResult.bind(this)} />
                            <label htmlFor="refine">Refine (Name / Address / Area / etc.)</label>
                        </div>
                    </div>
                    <div className="row">
                        <button type="button" className="waves-effect waves-light btn-large" role="button" onClick={this.props.apiCall.bind(this, this.state.value)}>{this.props.submitText}</button>
                    </div>
                </form>
            </div>
        )
    }
}

SearchForm.propTypes = {
    apiCall: PropTypes.func.isRequired,
}
  
export default SearchForm
