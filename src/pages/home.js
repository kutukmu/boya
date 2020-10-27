import React, { Component } from 'react'
import Grid from "@material-ui/core/Grid"
import axios from "axios"
import Scream from "../components/scream/Scream"
import Profile from "../components/Profile"
import { connect } from 'react-redux';
import { getScreams } from '../redux/actions/dataActions';
import Layout from "../components/Layout"


class Home extends Component {



    componentDidMount(){
        this.props.getScreams();
    }



    render() {
        const { screams, loading } = this.props.data;
        let recentScreamsMarkup = !loading? (
            screams.map(scream => <Scream key={scream.screamId} scream={scream}>

            </Scream>)
        ): <p>Loading ...</p>
        return (
            <Layout>
            <div className="container">
            <Grid container spacing={10}>
                <Grid item sm={8} xs={12}>
                    {recentScreamsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                <Profile/>
                </Grid>
                </Grid>
            </div>
                
            
            </Layout>
           
        )
    }
}

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
    mapStateToProps,
    { getScreams }
  )(Home);
  
