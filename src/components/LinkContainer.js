import React from 'react';
 import Table from './Table';
 import Form from './Form';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state = {favLinks: [],} // state to store the list of navLinks 
    }

    removeCharacter = index => {
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
       const tempArray = this.state.favLinks;

        tempArray.splice(index, 1); // it will remove one element starting from the index

        this.setState ({ favLinks : tempArray }); // setting the new state

    
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       this.setState({
        favLinks: [...this.state.favLinks, favLink] // spread operator which will append the new link at the end
        });
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
            <Table linkData= {this.state.favLinks} removeLink= {(index) => this.removeCharacter(index)} />
                


                <br/>

                <h3>Add New</h3>
                <Form addNew= {(favLink) => this.handleSubmit(favLink)}/>
            
            </div>
        );
    }
}

export default LinkContainer;