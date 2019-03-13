import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TouchRipple from 'material-ui/internal/TouchRipple';

export class TouchRippleButton extends Component {

    render() {
        this.props.buttonStyle !== undefined ? (
            // list button style
            this.styles = {
                wrapper: {
                    // translate(0px, 0px) for proper ripple effect
                    transform: 'translate(0, 0)',
                    backgroundColor: this.props.backButton === true ? this.props.buttonStyle.backButtonBackgroundColor : this.props.buttonStyle.backgroundColor,
                    color: this.props.backButton === true ? this.props.buttonStyle.backButtonForegroundColor : this.props.buttonStyle.color,
                    padding: this.props.buttonStyle.padding,
                    margin: this.props.buttonStyle.margin,
                    borderRadius: this.props.buttonStyle.borderRadius,
                    borderStyle: this.props.buttonStyle.borderStyle,
                    borderColor: this.props.buttonStyle.borderColor,
                },
                text: {
                    fontSize: 'normal',
                    color: this.props.buttonStyle.buttonForegroundColor
                },
                // sets ripple-effect border-radius same as normal button border-radius
                ripple: {
                    borderRadius: this.props.buttonStyle.borderRadius
                }

            }
            ) :
            // control button style
            this.styles = {
                wrapper: {
                    // translate(0px, 0px) for proper ripple effect
                    transform: 'translate(0px, 0px)',
                    margin: '.5rem'
                },
                text: {
                    fontSize: 'smaller',
                    color: this.props.textColor
                }

            }

        return (
            <Link disabled={true} to={ this.props.linkTo }>
            <div onClick={this.props.onClick} style={ this.styles.wrapper } className={ this.props.className }>
              <TouchRipple style={ this.styles.ripple } >
                <h1 style={ this.styles.text }>{ this.props.title }</h1>
                
                { this.props.buttonStyle !== undefined ? 
                <span style={ this.styles.text }> { this.props.subtitle }</span>
                :
                ''
                }
              </TouchRipple>
            </div>
            </Link>
        )
    }
}

