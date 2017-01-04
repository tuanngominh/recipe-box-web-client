import {withRouter} from 'react-router'
import React from 'react'
import auth from '../auth'

const Login = withRouter(
  React.createClass({

    getInitialState() {
      return {
        error: false
      }
    },

    handleSubmit(event) {
      event.preventDefault()

      const email = this.refs.email.value
      const pass = this.refs.pass.value

      auth.login(email, pass, (loggedIn) => {
        if (!loggedIn)
          return this.setState({ error: true })

        const { location } = this.props
        if (location.state && location.state.nextPathname) {
          this.props.router.replace(location.state.nextPathname)
        } else {
          this.props.router.replace('/')
        }
      })
    },

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input ref="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" defaultValue="joe@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input ref="pass" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" /> (hint: password1)
            </div>
            <button type="submit" className="btn btn-default">Login</button>
            <br/><br/>
            {this.state.error && (
              <p className="text-danger">Bad login information</p>
            )}            
          </form>        
        </div>
      )
    }
  })
)

export default Login