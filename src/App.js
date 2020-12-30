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
      comments:'',
      Pincode:'',
      PersonalEmail:''
    },
    submitted:false,
    error:{
      email:false,
      BusinessName:false,
      BusinessAddress:false,
      PAN:false,
      PersonName:false,
      PhoneNumber:false,
      Categories:false,
      BusinessType:false,
      CustomerProfile:false,
      Search:false,
      Pincode:false
    }
  }
  changeHandler = (e,tag)=>{
    let copy = {...this.state.form}
    copy[tag] = e.target.value
    this.setState({form:copy})
  }
  submitHandler = (e)=>{
    e.preventDefault()
    let flag = false
    let errorCopy = {...this.state.error}
    let keys = Object.keys(errorCopy)
    for(let i = 0; i < keys.length; i++){
      if(this.state.form[keys[i]]===""){
        errorCopy[keys[i]] = true
      }
      else{
        errorCopy[keys[i]] = false
      }
    }
    if((this.state.form.Pincode === "600001" || this.state.form.Pincode === "600079" || this.state.form.Pincode === "600003")){
      errorCopy["Pincode"] = false 
     }
     else{
       errorCopy["Pincode"] = true
     }
    for(let i = 0; i < keys.length; i++){
      if(errorCopy[keys[i]]){
        flag = true
      }
    }
    this.setState({error:errorCopy})
    if(!flag){
      axios.post(`https://esowcarpet-default-rtdb.firebaseio.com/form.json`, this.state.form )
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({submitted:true})
      })
      .catch(function (error) {
        console.log(error)
      })
    }
    
    console.log(this.state.form)
  }
  render(){
    return (
      <div className="App">
        <Nav/>
        <h1>Shop Registration</h1>
        {this.state.submitted?<div><h1>Your Response has been submitted</h1></div>:<Form error={this.state.error} form={this.state.form} submit={this.submitHandler} changeHandler={this.changeHandler}/>}
      </div>
    );
  }
}

export default App;
