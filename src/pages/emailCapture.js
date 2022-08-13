import * as React from "react"
import { Link } from "gatsby"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Seo from "../components/seo"


export default class EmailCapture extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       listFields: ''
    }
  }
  // _handleSubmit = this.state._handleSubmit.bind(this)

  _getEmail = (e) => {
      this.setState({email: Event.currentTarget.value})
      console.log("Email: " + this.state.email)
  }
  
  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  // 1. via `.then`
  _handleSubmit = e => {
   //e.preventDefault();
    addToMailchimp(this.email, this.listFields) // listFields are optional if you are only capturing the email address.
    .then(data => {
      alert(data.result);

      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log(data)
    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })
  }

  // // 2. via `async/await`
  // _handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const result = await addToMailchimp(this.email, this.listFields)
  //   // I recommend setting `result` to React state
  //   // but you can do whatever you want
  // }

  render () {
    return (
      <form onSubmit={this._handleSubmit(this.email)}>
        <h1>JOIN THE CLUB</h1>
          <p>Sign up with our email list to get special access to events, deals, and new releases!</p>
          <input
            placeholder="Email Address"
            name="email"
            type="text"
            defaultValue={this.state.email}
            // onChange={}
          />
                  <button type="submit">Subscribe</button>

      </form>
    )
  }
}
