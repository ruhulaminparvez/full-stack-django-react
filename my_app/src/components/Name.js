import React, {Component} from "react";
import './Name.css';


class Name extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Ruhul Amin Parvez',
        };
    }

    clicked = () => {
        this.setState({
        name:this.state.name === 'Ruhul Amin Parvez' ? 'Ruhul Amin' : 'Ruhul Amin Parvez',
        }); 
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center alert alert-primary text-white name">My name is {this.state.name}</h1>
                <button className="btn btn-primary" onClick={this.clicked} >Click Me</button>
            </div>
        );
    }
}

export default Name;