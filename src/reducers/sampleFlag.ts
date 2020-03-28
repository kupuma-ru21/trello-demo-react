import React from 'react';
import { CHANGE_SAMPLE_FLAG } from 'actions/index';
import { State } from 'components/App';

const sampleFlag = (state = false, action: any) => {
  switch (action.type) {
    case CHANGE_SAMPLE_FLAG:
      console.log('CHANGE_SAMPLE_FLAG');
      return state;
    default:
      return state;
  }
};

export default sampleFlag;
