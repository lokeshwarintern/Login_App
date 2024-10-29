/* eslint-disable import/no-duplicates */
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {
    isClicked: false,
  }

  userLogin = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  render() {
    const {isClicked} = this.state
    return (
      <div className="bg-container">
        <div className="user-login-card">
          <h1 className="heading-ele">
            <Message status={isClicked} />
          </h1>

          <button type="button" className="btn-ele" onClick={this.userLogin}>
            {isClicked ? <Login /> : <Logout />}
          </button>
        </div>
      </div>
    )
  }
}

export default Home
