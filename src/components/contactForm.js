import React from 'react';


export class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: '',
      inputNameError: '',
      inputEmail: '',
      inputEmailError: '',
      inputCompany: '',
      select: 'other',
      message: '',
      formSent: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleChange = e => {
      this.props.onChange({ [e.target.name]: e.target.value })
      this.setState({ [e.target.name]: e.target.value });
  }

  validate = () => {
    let isError = false;
    const errors = {};
    if (this.state.inputName.length < 2) {
      isError = true;
      errors.inputNameError = ('Name should be 2 or more letters');
    }

    if (!this.state.inputEmail.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      isError = true;
      errors.inputEmailError = ('Needs valid email address');
    }

    if (isError) {
      this.setState(errors)
      errors.formSent = ('Please check the form for errors');
      };

    return isError;
  }

  handleSubmit = e => {
      e.preventDefault();
      const err = this.validate();

      if (!err) {
        const encode = (data) => {
          return Object.keys(data)
          .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
          .join("&");
        }
        fetch("/", {
          method: "POST",
          headers: {"content-type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contactForm", ...this.state })
        })
          .then(() => this.setState({formSent: 'Thank you for your enquiry, we will be in touch as soon as possible'}))
          .catch(error => alert(error));

      {/* Clear Form */}
          this.setState({
          inputName: '',
          inputNameError: '',
          inputEmail: '',
          inputEmailError: '',
          inputCompany: '',
          select: '',
          message: ''

        });
        this.props.onChange({
        inputName: '',
        inputNameError: '',
        inputEmail: '',
        inputEmailError: '',
        inputCompany: '',
        select: '',
        message: ''

        });
       const clearMessageTimer = setTimeout(() => { this.setState({ formSent: '' })}, 5000);
      }
    }



  render() {

    return (
      <div className="text-center">
        <form name="contactForm" onSubmit={ this.handleSubmit } netlify>
          <div>
            <input type="hidden" name="form-name" value="contactForm" />
            <label>Name:  </label>
            <input
              value={this.state.inputName}
              name="inputName"
              type="text"
              onChange={this.handleChange}
              required />
          </div>
          <br />
          <span>{this.state.inputNameError}</span>
          <br />
          <div>
            <label> email:</label>
            <input
              value={this.state.inputEmail}
              name="inputEmail" type="text"
              onChange={this.handleChange}
              required />
            <br />
          </div>
          <span>{this.state.inputEmailError}</span>
          <br />
          <div>
            <label> Company:</label>
            <input
              value={this.state.inputCompany}
              name="inputCompany" type="text"
              onChange={this.handleChange}
               />
            <br />
          </div>
          <div>
            <label>
              <i>Talk to me about:</i>
              <br />
              <br />
            </label>
          </div>
          <select value={this.state.select} name="select" className="text-center" onChange={this.handleChange}>
            <option value="other">Something else</option>
            <option value='Brochure'>A brochure site</option>
            <option value="e-commerce">An e-commerce site</option>
            <option value="content managed">Content-Managed site (like Wordpress)</option>
            <option value="modifying">Modifying an existing App/Site</option>
            <option value="custom">Custom React Components</option>
            <option value="traffic">Traffic generation</option>
          </select>
          <br />
          <br />
          <label> Message: </label>
          <textarea type="text" value={this.state.message} name="message" onChange={this.handleChange} maxLength="200"></textarea>
          <br />
          <br />
        <button id="submit" type="submit" name="dataSubmit" disabled={this.state.lockSubmit}>Submit</button>
        <br />
        <br />
        <span>{this.state.formSent}</span>
        <br />
        <br />
        </form>
      </div>
    );
  }
}
