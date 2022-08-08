import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstNameIs: '',
    lastNameIs: '',
    isFirstNameEntered: false,
    isLastNameEntered: false,
    successCardShow: false,
  }

  firstName = event => {
    const firstNameEntered = event.target.value
    if (firstNameEntered === '') {
      this.setState({
        isFirstNameEntered: true,
      })
    } else {
      this.setState({
        firstNameIs: firstNameEntered,
      })
      this.setState({
        isFirstNameEntered: false,
      })
    }
  }

  lastName = event => {
    const lastNameEntered = event.target.value
    if (lastNameEntered === '') {
      this.setState({
        isLastNameEntered: true,
      })
    } else {
      this.setState({
        lastNameIs: event.target.value,
      })
      this.setState({
        isLastNameEntered: false,
      })
    }
  }

  submitForm = event => {
    event.preventDefault()
  }

  submitButtonClicked = () => {
    const {firstNameIs, lastNameIs} = this.state
    if (firstNameIs === '') {
      this.setState({isFirstNameEntered: true})
    }
    if (lastNameIs === '') {
      this.setState({isLastNameEntered: true})
    }
    if (firstNameIs !== '' && lastNameIs !== '') {
      this.setState({successCardShow: true})
    }
  }

  another = () => {
    this.setState({
      firstNameIs: '',
      lastNameIs: '',
      isFirstNameEntered: false,
      isLastNameEntered: false,
      successCardShow: false,
    })
  }

  render() {
    const {isFirstNameEntered, isLastNameEntered, successCardShow} = this.state
    return (
      <div className="bg">
        <h1 className="Registration">Registration</h1>
        {successCardShow ? (
          <div className="card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
              alt="success"
              className="image"
            />
            <p>Submitted Successfully</p>
            <button type="button" onClick={this.another}>
              Submit Another Response
            </button>
          </div>
        ) : (
          <div className="card">
            <form className="form" onSubmit={this.submitForm}>
              <label className="first-name" htmlFor="firstName">
                FIRST NAME
              </label>
              <input
                type="text"
                id="firstName"
                className="first-input"
                placeholder="First Name"
                onBlur={this.firstName}
              />
              {isFirstNameEntered ? <p>Required</p> : null}
              <label className="first-name" htmlFor="firstName">
                LAST NAME
              </label>
              <input
                type="text"
                id="firstName"
                className="first-input"
                placeholder="Second Name"
                onBlur={this.lastName}
              />
              {isLastNameEntered ? <p>Required</p> : null}
              <div className="button-container">
                <button
                  className="submit"
                  type="submit"
                  onClick={this.submitButtonClicked}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    )
  }
}

export default RegistrationForm
