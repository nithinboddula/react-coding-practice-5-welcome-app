// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(() => ({isSubscribed: true}))
  }

  onSubscribed = () => {
    this.setState(() => ({isSubscribed: false}))
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="greetings">Thank you!Happy Learning</p>
        {isSubscribed ? (
          <button type="button" className="button" onClick={this.onSubscribed}>
            Subscribed
          </button>
        ) : (
          <button type="button" className="button" onClick={this.onSubscribe}>
            Subscribe
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
