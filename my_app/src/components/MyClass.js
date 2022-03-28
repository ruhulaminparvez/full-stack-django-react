import React from 'react';


class MyClass extends React.Component {

    

    render() {
        return (   
            <div>
                <h1>I love to work with {this.props.lang}</h1>
                <button className='btn btn-success' onClick={this.props.myclick}>Click Me Inside Class</button>

            </div>
            
        );
    }
}


export default MyClass;