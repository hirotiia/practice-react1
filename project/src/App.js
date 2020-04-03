import React from 'react';


class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const field = event.target.name;
    const value = event.target.value;
    this.setState({
      [field]: value
    });

  }
  handleSubmit(event){
    const fullName = this.state.lastName + '' + this.state.firstName;
    alert('姓名:' + fullName);
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          姓:
          <input 
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={ this.handleChange }
          />
        </label>
        <br/>
        <label>
          名:
          <input 
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={ this.handleChange }
          />
        </label><br />
        <input type="submit" value="submit"/>
      </form>
    );
  }
   
}

export default Form;