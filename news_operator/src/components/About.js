import React, {Component} from 'react';
import Bar from "./Bar";
import {connect} from "react-redux";

class About extends Component {
    render() {
        console.log(this.props.base.addNews)
        return (
            <div>
                <Bar/>
                About
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        base: state
    }
}
export default connect(mapStateToProps)(About);