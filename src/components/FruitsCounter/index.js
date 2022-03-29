import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoes: 0, bananas: 0}

  eatMangoes = () => {
    this.setState(prevState => ({mangoes: prevState.mangoes + 1}))
  }

  eatBananas = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  render() {
    const {mangoes, bananas} = this.state

    return (
      <div className="container">
        <h1>
          Bob ate <span className="mango">{mangoes}</span> mangoes
          <span className="banana">{bananas}</span> bananas
        </h1>
        <div className="con">
          <div className="con1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="img"
              alt="mangoes"
            />
            <button type="button" className="button" onClick={this.eatMangoes}>
              Eat Mango
            </button>
          </div>
          <div className="con1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="img"
              alt="banana"
            />
            <button type="button" className="button" onClick={this.eatBananas}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
