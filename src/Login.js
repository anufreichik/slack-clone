import React from 'react';
import "./Login.css"
import {Button} from "@material-ui/core";
import {auth, provider} from "./firebase";
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";
function Login(props) {
    const [state, dispatch]=useStateValue()

    const signIn=(e)=>{
       // e.preventDefault();
        auth.signInWithPopup(provider)
            .then(result=>{
                console.log(result, 'inside sign in');
                dispatch({
                    type:actionTypes.SET_USER,
                    user:result.user,
                })
            })
            .catch(err=>{
                console.log(err.message);
            })

    }
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://d34u8crftukxnk.cloudfront.net/slackpress/prod/sites/6/2019-01_BrandRefresh_slack-brand-refresh_header-1.png" alt=""/>

                <h1> Sign In to My Clone</h1>
                <p>groupbillz.slack.com</p>
                <Button onClick={signIn}>Sign in with Google</Button>
            </div>
        </div>
    );
}

export default Login;
