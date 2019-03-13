import React from 'react';
import {
    CSSTransition,
    TransitionGroup
  } from 'react-transition-group';

 const FadeTransition = (props) => (
    <CSSTransition {...props} classNames="fade" timeout={ props.timeout | 500 } appear={true} />
  );

  export {
    FadeTransition,
    TransitionGroup
};
 
