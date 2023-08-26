import {Component} from 'react'

import Item from './Item'

import './index.css'

class Feedback extends Component {
  state = {isBoll: true}

  fun1 = () => {
    console.log('yes')
    this.setState({isBoll: false})
  }

  render() {
    const {isBoll} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="container">
        <div className="column">
          {isBoll ? (
            <div className="card">
              <h1>
                How satisfied are you with our customer support performances?
              </h1>
              <div className="row">
                <ul>
                  {emojis.map(e => (
                    <Item
                      pics={e}
                      key={e.id}
                      a={loveEmojiUrl}
                      fun={this.fun1}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="card1">
              <div>
                <img src={loveEmojiUrl} alt="love emoji" />
              </div>
              <h1>Thank you!</h1>
              <p>
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
