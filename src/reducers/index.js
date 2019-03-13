import { combineReducers } from 'redux';
import questions from './questions';
import variants from './variants';
import settings from './settings';
import answers from './answers';

export default combineReducers({
    questions, variants, settings, answers
});