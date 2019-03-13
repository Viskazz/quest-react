
import React, { Component, Fragment } from 'react';
import './App.css';
import { fetchQuestions, fetchVariants, fetchSettings } from './api';
import { connect } from 'react-redux';
import { getQuestions} from './actions/questActions';
import { getVariants} from './actions/variantActions';
import { getSettings } from './actions/settingsActions';
import { resetAnswers } from './actions/answersActions';
import TouchRippleCard from './components/TouchRippleCard/TouchRippleCard';
import { TouchRippleButton } from './components/TouchRippleButton/TouchRippleButton';
import Agree from './components/Agree/Agree';
import { FadeTransition, TransitionGroup } from './components/Transitions/FadeTransition';

class App extends Component {

  componentWillMount = function() {
      fetchQuestions().then(result => this.props.onGetQuestions(result));
      fetchVariants().then(result => this.props.onGetVariants(result));
      fetchSettings().then(result => this.props.onGetSettings(result));
  };

  componentDidMount = ()=>{
    // this.props.onResetAnswers();
    console.log(this.props.answers);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // не знаю работает ли
    return nextProps.variants !== this.props.variants || nextProps.questions !== this.props.questions || nextProps.settings !== this.props.settings;

  }

  styles ={
    back : {
        // backgroundImage: `url(../../${this.props.settings.backgroundImage})`, 
        backgroundColor: this.props.settings.backgroundColor,
        
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
  render() {
    // if (this.props.questions!=undefined)
 
    return (
      <Fragment>
       
        <TransitionGroup className="questions" appear={true} style={this.styles.back}>
         <FadeTransition>
           <div>
           <img src="/images/logo.png" width="333px"></img>
           { this.props.questions.map((quest, i) => {
              return (
                <FadeTransition key={ i }>
                  <Fragment>
                  
                    <TouchRippleCard
                       qTitle={ quest.title } qIndex={ quest.index } qType={ quest.type }
                       isFirstLetterUppercase = { quest.type === 'email'? false: true } 
                      
                       />
                    </Fragment>
                </FadeTransition>
              )
                
            }) }
              <Agree />
              </div>
        </FadeTransition>
      </TransitionGroup>
      </Fragment>
      );
  } //end render
}

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    variants: state.variants,
    settings: state.settings
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetQuestions: (items) => dispatch(getQuestions(items)),
    onGetVariants: (items) => dispatch(getVariants(items)),
    onGetSettings: (items) => dispatch(getSettings(items)),
    onResetAnswers: () => dispatch(resetAnswers())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
