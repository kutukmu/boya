import React, { Component } from 'react'
import withStyles from "@material-ui/core/styles/withStyles"
import Grid from "@material-ui/core/Grid"
import { Typography } from '@material-ui/core';
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { toast } from 'react-toastify';
import Layout from "../components/Layout"
import {connect} from "react-redux"
import {loginUser} from "../redux/actions/userActions"

import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const styles = {


    form:{
        textAlign:"center",
        height:"70vh"
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



class Login extends Component {

    constructor(props){
        super(props)


        this.state={
            email:"",
            password:"",
            errors:{}
        }
    }

    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    componentWillReceiveProps(nextProps){
           if(nextProps.UI.errors){
            this.setState({
                errors: nextProps.UI.errors
            })
           }
    }

handleSubmit = (e)=>{
    e.preventDefault();


    const userData ={ email:this.state.email,
        password:this.state.password}
    
    this.props.loginUser(userData, this.props.history)
   
   


}



    render() {
        const {classes, UI:{loading}} = this.props;
        const {errors} = this.state
        console.log(errors)
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
                           Login
                       </Typography>
                       <form noValidate onSubmit={this.handleSubmit}>
                        <TextField name="email" label="email" id="email" type="email"
                         className={classes.textField} value={this.state.email}
                             onChange={this.handleChange}
                             fullWidth
                              helperText= {errors.email}
                             error ={errors.email ? true: false}
                         />
                         <TextField name="password" label="password" id="password" type="password"
                         className={classes.textField} value={this.state.password}
                             onChange={this.handleChange}
                             fullWidth
                             helperText= {errors.password}
                             error ={errors.password ? true: false}
                         />
                         {errors.general && (
                             <Typography variant="body2"
                             className={classes.customError}>
                                 {errors.generated}
                             </Typography>
                         )}
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
    user: state.user,
    UI:state.UI
});

const mapActionsToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(Login))


