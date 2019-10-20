import React, {Component} from 'react';
import '../Style.css'
import {connect} from 'react-redux'
import {Link} from 'react-router'
class Bar extends Component {
    render() {
        return (
            <div>
                <div className={"Bar"}>
                    <Link className={'point'} to={'/'} >News</Link>
                    <Link className={'point'} to={'/About'} >About</Link>
                    <Link className={'point'} to={'/You'} >You</Link>
                    <Link className={'point'} to={'/Post'} >Post</Link>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        base: state
    }
}
export default connect(mapStateToProps)(Bar);