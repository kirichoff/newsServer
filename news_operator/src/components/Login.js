import React, {Component} from 'react';
import Bar from "./Bar";
import crypto from 'crypto'
import { Query,graphql } from "react-apollo";
import gql from "graphql-tag";




class Login extends Component {
    sub = (e) =>{
        e.preventDefault()
        let inputs = e.target.childNodes
        console.log(inputs[0].value)
        console.log(inputs[1].value)

        let crupt = crypto.createHash('sha256');

        let hashed = crupt.update(inputs[1].value, "utf8");//utf8 here
        let result = crupt.digest("base64");

        console.log("prop")
        console.log(this.props.data)
    }

    render() {
        return (
            <div>
                <Bar/>
                <form onSubmit={this.sub}>
                    <input type="email"/>
                    <input type="password"/>
                    <input type="submit" value={"вхоод"} />
                </form>
            </div>
        );
    }
}


const request =  gql`
    {
      users{
          user_login
      }
    }
`

const LoginGraph = graphql(
    request,
    {
        options: {
            variables: {
                name: "tuts"
            }
        }
    }
    )(Login)







export default LoginGraph;
