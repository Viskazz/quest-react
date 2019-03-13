import React, { Component } from 'react';
import { FadeTransition, TransitionGroup } from '../Transitions/FadeTransition';
import { TouchRippleButton } from '../TouchRippleButton/TouchRippleButton';
import { connect } from 'react-redux';
import {prepareAnswers} from '../../actions/answersActions';

class Agree extends Component {
  constructor(props)  {
    super(props);
  };

    styles ={
        back : {
            backgroundColor: this.props.settings.backgroundColor
        },
        button: {
          backgroundColor: this.props.settings.buttonBackgroundColor,
          backButtonBackgroundColor: this.props.settings.backButtonBackgroundColor,
          backButtonForegroundColor: this.props.settings.backButtonForegroundColor,
          color: this.props.settings.buttonForegroundColor,
          borderRadius: this.props.settings.buttonBorderRadius,
          borderStyle: this.props.settings.buttonBorderStyle,
          borderColor: this.props.settings.buttonBorderColor,
          padding: this.props.settings.buttonPadding,
          margin: this.props.settings.buttonMargin,
          textShadow: this.props.settings.buttonTextShadow
        }
      };

     

    render()
     {
        return (
            <FadeTransition >
                <TouchRippleButton className="backButton" 
                    enabled ={false}
                    buttonStyle={this.styles.button}
                    onClick={this.handleClick}
                    style={this.styles.button} 
                    backButton={true}
                    linkTo='/print'
                    title="Согласен на обработку моих данных" /> 
            </FadeTransition>
        )
    };
};

const mapStateToProps = state => {
    return {
      questions: state.questions,
      variants: state.variants,
      settings: state.settings,
      answers: state.answers
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onPrepareAnswers: (questions) => dispatch(prepareAnswers(questions))
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Agree);

