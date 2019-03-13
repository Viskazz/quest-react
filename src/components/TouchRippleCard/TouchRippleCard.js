import React, { Component } from 'react';
import { connect } from 'react-redux';
import TouchRipple from 'material-ui/internal/TouchRipple';
import './TouchRippleCard.css';
import { selectVariantAction } from '../../actions/variantActions';
import { inputDataAction } from '../../actions/questActions';
import KeyboardedInput from 'react-touch-screen-keyboard';
import 'react-touch-screen-keyboard/lib/Keyboard.css'; // if you just want css

class TouchRippleCard extends Component {

  constructor(props){
    super(props)
    this.state = {
      value: '',
      customMapping: [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '.'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '@', '*sh'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm', '@', '.ru', '.com'],
      ]
    };

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(value, qIndex) {
    this.setState({ value: value });
    // console.log('prop changed: ', qIndex)
    this.props.onInputData(qIndex, value);
  }

  handleClick =function(e){
    this.props.onSelectVariant(e);
  };
   
    render(){
      // рендер целого вопроса
        return (
           
            <div className="TouchRippleCard" style={this.props.cardStyle}>
              <TouchRipple>
                <div>
                  <p className="title">{this.props.qTitle}</p>
                </div>
                
                {/* рендер вариантов ответа к тем вопросам, которые подразумевают варианты */}
                {this.props.variants !== undefined ?
                    this.props.variants.map((variant, i) => {
                   return (
                     this.props.qIndex === variant.question? 
                     <div key={i} className="variant" style={{width:'auto', display: 'inline-flex'}}>
                      <p className={variant.selected? 'selected': ''} onClick={(e)=>this.handleClick(variant)}>{variant.name}</p>
                    </div>
                     :''
                   )
                }) :''
                }
              
              {/* рендер поля ввода к каждому вопросу */}
              <KeyboardedInput
                  value={this.state.value}
                  onChange={(value, e) => {
                    this.handleValueChange(value, this.props.qIndex)
                  }}
                  opacity={.7}
                  placeholder={'прикоснитесь для ввода'}
                  required
                  enabled
                  defaultKeyboard= { this.props.qType === 'ru' ? 'ru': this.state.customMapping }
                  secondaryKeyboard={ this.props.qType === 'ru' ? 'us': 'ru' } // optional
                  isFirstLetterUppercase={this.props.isFirstLetterUppercase} // optional, default is `false`
                  uppercaseAfterSpace={true} // optional, default is `false`
                  isDraggable={false}
                 
                />
              </TouchRipple>  
               
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.questions,
    variants: state.variants
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectVariant: variant => dispatch(selectVariantAction(variant)),
    onInputData: (qIndex, answer) => dispatch(inputDataAction(qIndex, answer))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TouchRippleCard);

