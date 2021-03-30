import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            url: ''
        };
        this.handleChange = this.handleChange.bind(this); // must bind 
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();


        this.setState({name: ''}); // reset the states 
        this.setState({url: ''}); // addNew was passed as props from linkContainer 
    }

    render() {

        return (

            <form onSubmit={this.onFormSubmit}>
                <label>
                    Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                    URL: <input type="text" name="url" value={this.state.url} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        )

    }
}

export default Form;
