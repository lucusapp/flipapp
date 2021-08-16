import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import { withRouter } from 'react-router-dom'


class FacebookAuth extends Component {

    state = {
        username:'',
        isSignedIn:false
    }

    componentClicked = () => {
       
    }
    
    responseFacebook = response => {  
        this.setState({
            isSignedIn:response.status !== "unknown" ? true : null,
            username:response.name
        }) 
        this.props.history.push('/')         
    }
    
    
    render() {
        let FBcontent;
        if (this.state.isSignedIn) {
            this.props.history.push("/")
        } else {
            const fbScope = "pages_show_list,user_events,user_managed_groups";
            FBcontent = (
                <FacebookLogin 
                cssClass="my-facebook-button-class"
                icon="fa-facebook"
                appId="792985757511365"
                autoLoad={true}
                fields="name,email,picture"
                scope={fbScope}
                onClick={this.componentClicked}
                callback={this.responseFacebook}
                
                
                
                /> 
            )
        }
    return (
      <div>
        {FBcontent}
      </div>
    )
  }
}

export default withRouter(FacebookAuth)