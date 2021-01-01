import React from 'react'
import Style from './Form.module.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
const Form = (props)=>{
    return(
        <div className={Style.Form}>
            <form autoComplete="off">
                <div className={Style.Half}>
                <TextField fullWidth id="email" error={props.error["email"]} required onChange={(e)=>{props.changeHandler(e,"email")}} value={props.form.email} label="Email Address" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="bname" required error={props.error["BusinessName"]} onChange={(e)=>{props.changeHandler(e,"BusinessName")}} value={props.form.BusinessName} label="Business Name" variant="outlined" />
                </div> 
                <TextField id="baddress" required error={props.error["BusinessAddress"]} onChange={(e)=>{props.changeHandler(e,"BusinessAddress")}} value={props.form.BusinessAddress} fullWidth multiline rows={3} label="Address of the Business" variant="outlined" />
                <div className={Style.Half}>
                <TextField fullWidth id="pan" required error={props.error["PAN"]} onChange={(e)=>{props.changeHandler(e,"PAN")}} value={props.form.PAN} label="PAN card" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="gst" onChange={(e)=>{props.changeHandler(e,"GST")}} value={props.form.GST} label="GST No." variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="name" required error={props.error["PersonName"]} onChange={(e)=>{props.changeHandler(e,"PersonName")}} value={props.form.PersonName} label="Name of the Person" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="number" required error={props.error["PhoneNumber"]} onChange={(e)=>{props.changeHandler(e,"PhoneNumber")}} value={props.form.PhoneNumber} label="Mobile Number" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="landline" onChange={(e)=>{props.changeHandler(e,"Landline")}} value={props.form.Landline} label="Landline Number" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="whatsapp" onChange={(e)=>{props.changeHandler(e,"BusinessWhatsapp")}} value={props.form.BusinessWhatsapp} label="Business Whatsapp" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="pemail" onChange={(e)=>{props.changeHandler(e,"PersonalEmail")}} value={props.form.PersonalEmail} label="Personal Email" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="Pincode" required error={props.error["Pincode"]} onChange={(e)=>{props.changeHandler(e,"Pincode")}} value={props.form.Pincode} helperText="Only 600001,600079,600003 allowed" label="Pincode" variant="outlined" />
                </div>
                <TextField fullWidth id="category" required error={props.error["Categories"]} onChange={(e)=>{props.changeHandler(e,"Categories")}} value={props.form.Categories} label="Product category - List at least 10 different product types" variant="outlined" />
                <div className={Style.Half}>
                <TextField fullWidth id="btype" required error={props.error["BusinessType"]} onChange={(e)=>{props.changeHandler(e,"BusinessType")}} value={props.form.BusinessType} label="Type of Business" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="website" onChange={(e)=>{props.changeHandler(e,"Website")}} value={props.form.Website} label="Website" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="facebook" onChange={(e)=>{props.changeHandler(e,"Facebook")}} value={props.form.Facebook} label="facebook" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="instagram" onChange={(e)=>{props.changeHandler(e,"Instagram")}} value={props.form.Instagram} label="instagram" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="youtube" onChange={(e)=>{props.changeHandler(e,"Youtube")}} value={props.form.Youtube} label="youtube" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="customer" required error={props.error["CustomerProfile"]} onChange={(e)=>{props.changeHandler(e,"CustomerProfile")}} value={props.form.CustomerProfile} label="Customer Profile" variant="outlined" />
                </div>
                <TextField fullWidth id="search" error={props.error["Search"]} required onChange={(e)=>{props.changeHandler(e,"Search")}} value={props.form.Search} label="People Search for you (List out with Comma Separation.)" variant="outlined" />
                <TextField fullWidth id="comments" onChange={(e)=>{props.changeHandler(e,"comments")}} value={props.form.comments} label="Comments" variant="outlined" multiline rows={3} />
                <Button variant="contained" color="primary" onClick={(e)=>{props.submit(e)}}>Submit Response</Button>
            </form>
        </div>
    )
}

export default Form;