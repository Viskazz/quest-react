import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setTimeout, clearTimeout } from 'timers';
import { FadeTransition, TransitionGroup } from './Transitions/FadeTransition';
import { postAnswers } from '../api';
import { prepareAnswers } from '../actions/answersActions';

class Print extends Component {
  timerId = null;
  startTimer = function() {
    this.timerId = setTimeout(() => {
      this.props.history.push('/');
    }, 4000);
  };

  startPrinter = function() {
    this.timerId = setTimeout(() => {
      window.print({
        printer: "",
        headerFooterEnabled: false
      });
    }, 1000);
  };

  submitAnswers = (answers) => {
    postAnswers(answers)
      .then((result) => {
        console.log('result:', result);
        this.startTimer();
        this.startPrinter();
      })
      .catch(error => {
        console.log(error.message);
      });
  }


  prepareAndSubmit = () => {
    const newStateObject = Object.assign({}, this.props.questions);
    const temp = Array.from(Object.keys(newStateObject), k => newStateObject[k]);
    const vars = Object.assign({}, this.props.variants);
    const temp2 = Array.from(Object.keys(vars), k => vars[k]);
    const temp3 = temp.concat(temp2);
    this.submitAnswers(temp3);
  }

  // передаем стор вопросов для вычленения из них ответов
  componentDidMount = function() {
    this.prepareAndSubmit();
    clearTimeout(this.timerId);
  };

  render() {
    return (
      <Fragment>
        <TransitionGroup className="unions" appear={ true }>
          <FadeTransition>
            <div>
              { this.props.answers.map((item, i) => {
                  return (
                    <p key={ i } className="no-print">
                      { item }
                    </p>
                  )
                }) }
              <p> </p>
              <p> </p>
              <p> </p>
              <p className="no-print" style={ { fontSize: '32px' } }>Спасибо за Ваше участие!</p>
              <p className="no-print" style={ { fontSize: '38px' } }>Пожалуйста, возьмите ваш талон !</p>
              <img className="only-print" src="/images/logo.png" alt='Логотип'></img>
              <p className="only-print" style={ { fontSize: '38px' } }>Молекулярный коктейль от Axoft</p>
            </div>
          </FadeTransition>
        </TransitionGroup>
      </Fragment>
      );
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Print);