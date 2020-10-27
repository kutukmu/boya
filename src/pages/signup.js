import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles"
import Grid from "@material-ui/core/Grid"
import { Typography } from '@material-ui/core';
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import {connect} from "react-redux";
import {signupUser} from "../redux/actions/userActions"
import Layout from "../components/Layout"

import 'react-toastify/dist/ReactToastify.css';

const styles = {


    form:{
        textAlign:"center",
        height:"69vh"
    },
     pageTitle:{
         margin:"20x auto 20px auto"
     },
      button:{
          margin: "20px auto",
          position:"relative"
      },
       customError:{
           color:"red",
           fontSize:"0.8rem"
       },
       

}



class Signup extends Component {

    constructor(props){
        super(props)


        this.state={
            email:"",
            password:"",
            confirmPassword:"",
            handle:"",
            errors:{}
        }
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.UI.errors){
         this.setState({
             errors: nextProps.UI.errors
         })
        }
 }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }


handleSubmit = (e)=>{
    e.preventDefault();

    this.setState({
        loading:true
    })

    const userData ={ email:this.state.email,
        password:this.state.password,
        confirmPassword: this.state.confirmPassword
        ,
    handle:this.state.handle}

    this.props.signupUser(userData, this.props.history)
   


}



    render() {
        const {classes, UI:{loading}} = this.props;
        const {errors} = this.state

        return (
            <Layout>
            <div className="container">
            <Grid container className={classes.form}>
                    <Grid item sm />
                    <Grid item sm >
                       <Typography 
                       variant="h3"
                       className={
                           classes.pageTitle
                       }
                       >
                           Signup
                       </Typography>
                       <form noValidate onSubmit={this.handleSubmit}>
                        <TextField name="email" label="email" id="email" type="email"
                         className={classes.textField} value={this.state.email}
                             onChange={this.handleChange}
                             fullWidth
                              helperText= {errors.email}
                             error ={errors.email ? true: false}
                         />
                         <TextField name="handle" label="Username" id="userhandle" type="text"
                         className={classes.textField} value={this.state.handle}
                             onChange={this.handleChange}
                             fullWidth
                             helperText= {errors.handle}
                             error ={errors.handle ? true: false}
                         />
                         <TextField name="password" label="password" id="password" type="password"
                         className={classes.textField} value={this.state.password}
                             onChange={this.handleChange}
                             fullWidth
                             helperText= {errors.password}
                             error ={errors.password ? true: false}
                         />
                         <TextField name="confirmPassword" label="Confirm Password" id="confirmpassword" type="password"
                         className={classes.textField} value={this.state.confirmPassword}
                             onChange={this.handleChange}
                             fullWidth
                             helperText= {errors.confirmPassword}
                             error ={errors.confirmPassword ? true: false}
                         />
                         
                         <Button disabled={loading} type="submit" variant="contained" color="primary" className={classes.button}>
                             Submit
                         </Button>
                       </form>
                    </Grid>
                    <Grid item sm />
                </Grid>
            </div>
                
            </Layout>
        )
    }
}

const mapStateToProps = (state) => ({
    user:state.user,
    UI:state.UI
});





export default connect(mapStateToProps,{signupUser})(withStyles(styles)(Signup))