import React from 'react'
import Style from './Form.module.css'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import InputLabel from '@material-ui/core/InputLabel'
import Link from '@material-ui/core/Link'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
const Form = (props)=>{
    const upload = ()=>{
        let imag = document.querySelector('#image')
        if(imag.files[0]){
            for(let i=0;i<imag.files.length;i++)
                props.uploadImgHandler(imag.files[i])
        }
        else{
            return null;
        }
    }
    const uploadVid = ()=>{
        let imag = document.querySelector('#video')
        if(imag.files[0]){
            for(let i=0;i<imag.files.length;i++)
                props.uploadVidHandler(imag.files[i])
        }
        else{
            return null;
        }
    }
    return(
        <div className={Style.Form}>
            <p className={Style.require}> All fields marked '*' are required. </p>
            <form autoComplete="off">
                <div className={Style.Half}>
                <TextField fullWidth id="email" error={props.error["email"]} required onChange={(e)=>{props.changeHandler(e,"email")}} value={props.form.email} label="Email Address" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="bname" required error={props.error["BusinessName"]} onChange={(e)=>{props.changeHandler(e,"BusinessName")}} value={props.form.BusinessName} label="Business Name" variant="outlined" />
                </div> 
                <TextField id="baddress" required error={props.error["BusinessAddress"]} helperText="shop no.,market name,street,floor,etc." onChange={(e)=>{props.changeHandler(e,"BusinessAddress")}} value={props.form.BusinessAddress} fullWidth multiline rows={3} label="Address of the Business" variant="outlined" />
                <div className={Style.Half}>
                <TextField fullWidth id="pan" required error={props.error["PAN"]} onChange={(e)=>{props.changeHandler(e,"PAN")}} value={props.form.PAN} helperText={props.error["PAN"]?"Invalid PAN number":null} label="PAN card" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="gst" onChange={(e)=>{props.changeHandler(e,"GST")}} error={!props.validGST} value={props.form.GST} label="GST No." helperText="GST no. only starting with 33" variant="outlined" />
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
                    <div className={Style.Media}>
                        <label for="video">Upload Video</label>
                        <input type="file" name="video" id="video" onChange={()=>{uploadVid()}}/>
                    </div>
                </div>
                <div className={Style.Half}>
                <TextField fullWidth id="youtube" onChange={(e)=>{props.changeHandler(e,"Youtube")}} value={props.form.Youtube} label="youtube" variant="outlined" />
                </div>
                <div className={Style.Half}>
                <div className={Style.Media}>
                        <label for="image">Upload Images</label>
                        <input type="file" id="image" name="image" multiple onChange={()=>{upload()}}/>
                        <span className = {Style.helper}>upload minimum 3 and maximum 5 images</span>
                    </div>
                </div>
                <div className={Style.Half}>
                    {console.log(props.form.customerProfile)}
                    <InputLabel id="demo-mutiple-name-label"><div style={{textAlign:'left'}}>customer profile</div></InputLabel>
                <Select labelId="demo-mutiple-name-label"  multiple fullWidth id="customer" label="customer profile" error={props.error["CustomerProfile"]} value={props.form.CustomerProfile} required onChange={(e)=>{props.changeHandler(e,"CustomerProfile")}} variant="outlined">
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="Wholesale">Wholesale</MenuItem>
                    <MenuItem value="semi-wholesale">semi-wholesale</MenuItem>
                    <MenuItem value="Manufacture">Manufacture</MenuItem>
                    <MenuItem value="Distributor">Distributor</MenuItem>
                    <MenuItem value="retail">retail</MenuItem>
                    <MenuItem value="other">other</MenuItem>
                </Select>   
                </div>
                <TextField fullWidth id="search" error={props.error["Search"]} required onChange={(e)=>{props.changeHandler(e,"Search")}} value={props.form.Search} label="People Search for you (List out with Comma Separation.)" variant="outlined" />
                <TextField fullWidth id="comments" onChange={(e)=>{props.changeHandler(e,"comments")}} value={props.form.comments} label="Comments" variant="outlined" multiline rows={3} />
                <div>    
                    <Checkbox checked={props.checked} onChange={(e)=>{props.checkedHandler()}} color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                    <Link component="button" variant="body2" onClick={(e) => {props.ModalHandler(e) }} > Terms And Conitions </Link>
                    {console.log(props.termError)}
                    <span className={props.termError?Style.term:Style.termerror}>Accept terms and conditions to continue.</span>
                </div>
                <Button variant="contained" color="primary" onClick={(e)=>{props.submit(e)}}>Submit Response</Button>
            </form>
        </div>
    )
}

export default Form;