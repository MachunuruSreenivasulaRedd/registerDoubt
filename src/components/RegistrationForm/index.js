import {Component} from 'react'
import './index.css'

let firstLength = 0
let secondLength = 0

class RegistrationForm extends Component {
  state = {
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

  onSubmission = () => {
    const first = this.onFirstLostFocus()
    const second = this.onSecondLostFocus()
    if (first > 0 && second > 0) {
      this.setState({canSubmit: true})
    } else {
      this.setState({canSubmit: false})
    }
  }

  onNewResponse = () => {
    this.setState({canSubmit: false})
  }

  render() {
    const {
      firsterrMsg,
      lasterrMsg,
      firstshowErrorMsg,
      lastshowErrorMsg,
      canSubmit,
    } = this.state
    const formPage = (
      <div className="formContainer">
        <h1 className="heading">Registration</h1>
        <label htmlFor="firstName">FIRST NAME</label>
        <input
          id="firstName"
          placeholder="First name"
          onBlur={this.onFirstLostFocus}
        />
        {firstshowErrorMsg ? (
          <p className="errorMessage">{firsterrMsg}</p>
        ) : null}
        <label htmlFor="firstName">LAST NAME</label>
        <input
          id="secondName"
          placeholder="second name"
          onBlur={this.onSecondLostFocus}
        />
        {lastshowErrorMsg ? <p className="errorMessage">{lasterrMsg}</p> : null}
        <button type="button" className="btn" onClick={this.onSubmission}>
          Submit
        </button>
      </div>
    )

    const submitPage = (
      <div className="submitContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          className="submitImg"
          alt="success"
        />
        <p>Submitted Successfully</p>
        <button type="button" className="btn" onClick={this.onNewResponse}>
          Submit Another Response
        </button>
      </div>
    )
    return (
      <div className="registrationContainer">
        {canSubmit ? <div>{submitPage}</div> : <div>{formPage}</div>}
      </div>
    )
  }
}

export default RegistrationForm
