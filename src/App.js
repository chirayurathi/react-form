import './App.css';
import Nav from './Nav/Nav';
import Form from './Form/Form'
import React, { Component } from 'react'
import axios from 'axios'
class App extends Component {
  state = {
    form:{
      email:'',
      BusinessName:'',
      BusinessAddress:'',
      PAN:'',
      GST:'',
      PersonName:'',
      PhoneNumber:'',
      Landline:'',
      BusinessWhatsApp:'',
      Categories:'',
      BusinessType:'',
      Website:'',
      Facebook:'',
      Instagram:'',
      Youtube:'',
      CustomerProfile:'',
      Search:'',
      comments:''
    },
    submitted:false
  }
  changeHandler = (e,tag)=>{
    let copy = {...this.state.form}
    copy[tag] = e.target.value
    this.setState({form:copy})
  }
  submitHandler = (e)=>{
    e.preventDefault()
    axios.post(`https://esowcarpet-default-rtdb.firebaseio.com/form.json`, this.state.form )
    .then(res => {
      console.log(res);
      console.log(res.data);
      this.setState({submitted:true})
    })
    .catch(function (error) {
      console.log(error)
    })
    console.log(this.state.form)
  }
  render(){
    return (
      <div className="App">
        <Nav/>
        <h1>Shop Registration</h1>
        {this.state.submitted?<div><h1>Your Response has been submitted</h1></div>:<Form form={this.state.form} submit={this.submitHandler} changeHandler={this.changeHandler}/>}
      </div>
    );
  }
}

export default App;
