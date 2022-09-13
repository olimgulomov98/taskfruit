import './index.css';  
import React, { Component } from "react";
class fruits extends Component {
    render() {
        console.log(this.props.title.color);
        return (
            <div className='card'>
                <img src={this.props.title.img} alt='fruit' className='fruit' />
                <h2 className='name'>{this.props.title.name}</h2>
            </div>
        )
    }
}
export default fruits





