import React, {Component} from 'react';
import {Link} from 'react-router'
import auth from '../auth'

const activeStyle = { textDecoration: 'underline'}

class App extends Component {
    constructor() {
      super()
      this.state = {
        loggedIn: auth.loggedIn()
      }
    }

    updateAuth(loggedIn) {
      this.setState({
        loggedIn
      })
    }

    componentWillMount() {
      auth.onChange = this.updateAuth.bind(this)
      auth.login()
    }

    render () {
      const props = this.props
      return (
        <div>
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/about" activeStyle={activeStyle}>About</Link></li>
                <li><Link to="/recipe-box" activeStyle={activeStyle}>Recipe Box</Link></li>                    
                <li>                  
                  {this.state.loggedIn ? (
                    <Link to="/logout">Log out</Link>
                  ) : (
                    <Link to="/login">Sign in</Link>
                  )}
                </li>
              </ul>
            </div>
          </nav>
          <div className="container">
            <div className="row">
              <div className="col-xs-11 col-xs-offset-1">
                <div className="jumbotron">
                  {props.children}
                </div>
              </div>
            </div>
          </div>
        </div>       
      )
    }
}

export default App;