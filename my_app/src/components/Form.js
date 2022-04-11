import React, { Component } from 'react'
import './Form.css'

export class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            pass: '',
            posts: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({ posts: data }))
    }

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    } 

    passHandler = (event) => {
        this.setState({
            pass: event.target.value
        })
    }

  render() {

    const {posts} = this.state

    return (
      <div className='container'>

          <input type='text' value={this.state.username} placeholder='Enter Your Name' className='form-control text-form' onChange={this.usernameHandler} />
          <input type='password' value={this.state.pass} placeholder='Enter Your Password' className='form-control pass-form' onChange={this.passHandler}/>
          <button className='btn btn-primary btn-form'>Clicked Me</button>

          {posts.map(post => 
          <h3 key={post.id}>{post.title}</h3>
          
          )}
         
      </div>
    )
  }
}

export default Form