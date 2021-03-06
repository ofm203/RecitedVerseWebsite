import React, { Component, PropTypes } from 'react';

class PillButton extends Component {
    constructor() {
        super();
        this.state = {hover:false};
    }

    static propTypes = {
        width: PropTypes.string,
        height: PropTypes.string,
        border: PropTypes.string,
        borderRadius: PropTypes.string,
        textColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        hoverColor: PropTypes.string,
        clickFunction: PropTypes.func
    }

    static defaultProps = {
        width: '10px',
        height: '10px',
        border: 'none',
        borderRadius: '25px',
        textColor: 'black',
        backgroundColor: 'lightgray',
        hoverColor: 'gray',
        clickFunction: function(){}
    }


    getStyles() {
        return {
            width: this.props.width,
            height: this.props.height,
            border: this.props.border,
            borderRadius: this.props.borderRadius,
            color: this.props.textColor,
            backgroundColor: this.props.backgroundColor,
            WebkitTransitionDuration: '0.3s',
            cursor: 'pointer',
        }
    }
    getHoverStyles() {
        return {
            width: this.props.width,
            height: this.props.height,
            border: this.props.border,
            borderRadius: this.props.borderRadius,
            color: this.props.textColor,
            backgroundColor: this.props.hoverColor,
            WebkitTransitionDuration: '0.3s',
            cursor: 'pointer'
        }
    }


    render() {
        const { width,height,border,borderRadius,textColor,backgroundColor,hoverColor,clickFunction, ...props } = this.props;

        if(this.state.hover) {
            return (
                <button {...props} style={this.getHoverStyles()} onMouseEnter={this.mouseOver.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onClick={this.handleClick.bind(this)}>
                    {this.props.children}
                </button>
            );
        } else {
            return (
                <button {...props} style={this.getStyles()} onMouseEnter={this.mouseOver.bind(this)} onMouseLeave={this.mouseLeave.bind(this)} onClick={this.handleClick.bind(this)}>
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


export default PillButton;
