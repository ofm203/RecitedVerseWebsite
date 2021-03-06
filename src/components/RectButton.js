import React, { Component } from 'react';

class RectButton extends Component {
    constructor() {
        super();
        this.state = {hover:false};
    }

    getMenuBtnStyle() {
        return {
            position: 'relative',
            top: this.props.top,
            width: this.props.width,
            height: this.props.height,
            textAlign:'center',
            border: 'none',
            fontSize: this.props.fontSize || '11px',
            fontFamily: '-apple-system',
            color: this.props.textColor || 'white',
            backgroundColor: this.props.backgroundColor || 'gray',
            WebkitTransitionDuration: '0.3s'
        }
    }
    getHoverStyles() {
        return {
            position: 'relative',
            top: this.props.top,
            width: this.props.width,
            height: this.props.height,
            textAlign:'center',
            border: 'none',
            fontSize: this.props.fontSize || '11px',
            fontFamily: '-apple-system',
            color: this.props.textColor || 'white',
            backgroundColor: this.props.hoverColor || 'gray',
            WebkitTransitionDuration: '0.3s'
        }
    }


    render() {
        if(this.state.hover) {
            return (
                <button style={this.getHoverStyles()} onMouseEnter={this.mouseOver.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onClick={this.handleClick.bind(this)}>
                    {this.props.children}
                </button>
            );
        } else {
            return (
                <button style={this.getMenuBtnStyle()} onMouseEnter={this.mouseOver.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onClick={this.handleClick.bind(this)}>
                    {this.props.children}
                </button>
            );
        }
    }


    mouseOver() {
        this.setState({hover:true});
    }
    mouseLeave() {
        this.setState({hover:false});
    }
    handleClick() {
        if(this.props.clickFunction) {
            this.props.clickFunction();
        }
    }
}

export default RectButton;
