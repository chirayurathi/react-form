import Style from './Registration.module.css';
import Form from '../Form/Form'
import Modal from '../Modal/Modal'
import React, { Component } from 'react'
import axios from 'axios'
import firebase from '../Firebase'
class Registration extends Component {
  state = {
    form:{
      email:'',
      BusinessName:'',
      FloorNo:'',
      ShopNo:'',
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
      CustomerProfile:[],
      Search:'',
      comments:'',
      Pincode:'',
      PersonalEmail:'',
      images:[],
      video:""
    },
    submitted:false,
    checked:false,
    modal:false,
    termError:true,
    gstValid:true,
    ImgError:false,
    VidError:false,
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
      Pincode:false,
      FloorNo:false,
      ShopNo:false
    }
  }
  changeHandler = (e,tag)=>{
    let copy = {...this.state.form}
    copy[tag] = e.target.value
    this.setState({form:copy})
  }
  ModalHandler = (e)=>{
    if(e){
      e.preventDefault();
    }
    this.setState({modal:!this.state.modal})
  }
  checkedHandler = ()=>{
    this.setState({checked:!this.state.checked})
  }
  submitHandler = (e)=>{
    e.preventDefault()
    let flag = false
    let regPan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
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
    if((this.state.form.GST[0]==="3" && this.state.form.GST[1]==="3") || this.state.form.GST===""){
      if(regPan.test(this.state.form.PAN)){
        if(this.state.checked)
        {
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
        }
        else{
          this.setState({termError:false})
        }
      }
      else{
        errorCopy["PAN"] = true
        this.setState({error:errorCopy})
      }
    }
    else{
      this.setState({gstValid:false})
    }
    console.log(this.state.form)
  }
  uploadImgHandler = (file)=>{
    let ref = firebase.storage.ref()
    let fileName = new Date() + '-' + file.name
    let metadata = {contentType:file.type}
    let task = ref.child("seller"+fileName).put(file,metadata)
    task
    .then(snapShot => snapShot.ref.getDownloadURL()
    .then(url =>{
        let productImage = [...this.state.form.images,url]
        let formCopy = {
            ...this.state.form,
            images:productImage
        }
        this.setState({form:formCopy})
    }))
}
  uploadVidHandler = (file)=>{
    let ref = firebase.storage.ref()
    let fileName = new Date() + '-' + file.name
    let metadata = {contentType:file.type}
    let task = ref.child("seller"+fileName).put(file,metadata)
    task
    .then(snapShot => snapShot.ref.getDownloadURL()
    .then(url =>{
        let formCopy = {
            ...this.state.form,
            video:url
        }
        this.setState({form:formCopy})
    }))
}
  render(){
    return (
      <div className={Style.Registration}>
        <h1>Shop Registration</h1>
        {this.state.submitted?<div><h1>Your Response has been submitted</h1></div>:<Form error={this.state.error} uploadVidHandler={this.uploadVidHandler} uploadImgHandler={this.uploadImgHandler} validGST={this.state.gstValid} termError={this.state.termError} ModalHandler={this.ModalHandler} form={this.state.form} checked={this.state.checked} checkedHandler={this.checkedHandler} submit={this.submitHandler} changeHandler={this.changeHandler}/>}
      {this.state.modal?<Modal ModalHandler={this.ModalHandler} />:null}
      </div>
    );
  }
}

export default Registration;
