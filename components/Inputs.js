import React, { Component } from 'react';
import s from "./Inputs.module.css";

class Inputs extends React.Component {
    render(){
        return (
            <div className={s.item}>
              <div><label for={this.props.name}>{this.props.text}</label></div>
              <div><input type={this.props.type} name={this.props.name} maxlength={this.props.maxlength} 
              minlength={this.props.minlength} placeholder={this.props.placeholder} value={this.props.value}></input></div>
            </div>
        )
    }
}
export default Inputs;