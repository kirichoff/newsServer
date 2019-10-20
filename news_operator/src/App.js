import React, { Component } from 'react';
import News from "./components/News";
import "./shadowlll.jpg"
import './night.jpg'
import './Style.css'
import {connect} from 'react-redux'
import {Link}from 'react-router'
import ImgRender from "./components/ImgRender";
import Bar from "./components/Bar";
import Tagsbar from "./components/Tagsbar";

class App extends Component {
    constructor(){
        super()
    }


    render() {
    return (
        <div>
            <Bar/>
            <Tagsbar/>

        <div className={"Img"}>
            <ImgRender/>
            </div>
            <footer>hear foter</footer>
        </div>
    );
  }
}
function mapStateToProps(state) {
    return {
        base: state
    }
}
export default connect(mapStateToProps)(App);
