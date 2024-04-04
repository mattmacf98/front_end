import {Component} from "react";
import axios from "axios";
import "../css/LoginForm.css";

class LoginForm extends Component {
    state = {
        username: "",
        password: ""
    }

    submitLogin = (e) => {
        e.preventDefault();
        axios.post(`${window.location.href}v1/auth/login`,
            {
                "username": this.state.username,
                "password": this.state.password
            },
            {headers: {"Access-Control-Allow-Origin": "*"}}
        ).then(response => {
            this.props.handleLogin(response.data["token"]);
        }).catch(error => {
           alert(error);
        }).finally(() => {
            this.setState({username: "", password: ""});
        });
    }

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    }

    handleUsernameChange = (e) => {
        this.setState({username: e.target.value});
    }

    render() {
       return(
           <form className="login" onSubmit={this.submitLogin}>
               <h1 className="login-title">Login</h1>
               <input type="text" className="login-input" placeholder="Username" autoFocus onChange={this.handleUsernameChange} value={this.state.username}/>
               <input type="password" className="login-input" placeholder="Password" autoFocus onChange={this.handlePasswordChange} value={this.state.password}/>
               <input type="submit" value="Lets Go" className="login-button"/>
           </form>
       );
    }
}

export default LoginForm;
