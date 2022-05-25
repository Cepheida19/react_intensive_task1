import React, { Component } from 'react';
import s from "./Textareas.module.css";

class Textareas extends React.Component {
    render(){
        return (
            <div className={s.item}>
              <div><label for={this.props.name}>{this.props.text}</label></div>
              <div><textarea type={this.props.type} name={this.props.name} rows={this.props.rows} cols={this.props.cols} 
              maxLength={this.props.maxlength} placeholder={this.props.placeholder}></textarea></div>
            </div>
        )
    }
}
export default Textareas;