import {Component} from 'react'
import './index.css'

let firstLength = 0
let secondLength = 0

class RegistrationForm extends Component {
  state = {
    username: '',
    password: '',
    firstshowErrorMsg: false,
    lastshowErrorMsg: false,
    firsterrMsg: '',
    lasterrMsg: '',
    canSubmit: false,
  }

  onFirstLostFocus = () => {
    const firstEl = document.getElementById('firstName')
    const textLength = firstEl.value.length
    firstLength = textLength
    if (textLength < 1) {
      this.setState({firsterrMsg: 'Required', firstshowErrorMsg: true})
    } else {
      this.setState({firsterrMsg: '', firstshowErrorMsg: false})
    }
    return firstLength
  }

  onSecondLostFocus = () => {
    const secondEl = document.getElementById('secondName')
    const textLength = secondEl.value.length
    secondLength = textLength
    if (textLength < 1) {
      this.setState({lasterrMsg: 'Required', lastshowErrorMsg: true})
    } else {
      this.setState({lasterrMsg: '', lastshowErrorMsg: false})
    }
    return secondLength
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmission = event => {
    event.preventDefault()
    const first = this.onFirstLostFocus()
    const second = this.onSecondLostFocus()
    if (first > 0 && second > 0) {
      this.setState({canSubmit: true})
    } else {
      this.setState({canSubmit: false})
    }
  }

  onNewResponse = event => {
    event.preventDefault()
    this.setState({canSubmit: false, username: '', password: ''})
  }

  render() {
    const {
      username,
      password,
      firsterrMsg,
      lasterrMsg,
      firstshowErrorMsg,
      lastshowErrorMsg,
      canSubmit,
    } = this.state
    const formPage = (
      <form className="formContainer" onSubmit={this.onSubmission}>
        <h1 className="heading">Registration</h1>
        <label htmlFor="firstName">FIRST NAME</label>
        <input
          id="firstName"
          placeholder="First name"
          value={username}
          onBlur={this.onFirstLostFocus}
          onChange={this.onUsername}
        />
        {firstshowErrorMsg ? (
          <p className="errorMessage">{firsterrMsg}</p>
        ) : null}
        <label htmlFor="firstName">LAST NAME</label>
        <input
          id="secondName"
          placeholder="second name"
          value={password}
          onBlur={this.onSecondLostFocus}
          onChange={this.onPassword}
        />
        {lastshowErrorMsg ? <p className="errorMessage">{lasterrMsg}</p> : null}
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    )

    const submitPage = (
      <form className="submitContainer" onSubmit={this.onNewResponse}>
        <h1 className="heading">Registration</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          className="submitImg"
          alt="success"
        />
        <p>Submitted Successfully</p>
        <button type="submit" className="btn">
          Submit Another Response
        </button>
      </form>
    )
    return (
      <div className="registrationContainer">
        {canSubmit ? <div>{submitPage}</div> : <div>{formPage}</div>}
      </div>
    )
  }
}

export default RegistrationForm
