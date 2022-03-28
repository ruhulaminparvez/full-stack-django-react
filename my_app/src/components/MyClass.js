import React from 'react';


class MyClass extends React.Component {
    render() {
        return (
            <h1>I love to work with {this.props.lang}</h1>
        );
    }
}


export default MyClass;