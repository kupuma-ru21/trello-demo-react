import React, { useContext } from 'react';
import AppContext from 'contexts/AppContext';

interface IProps {
  afterAddListModalIndex: number;
}

const AfterAddListModalTextArea = (props: IProps) => {
  const { state } = useContext(AppContext);
  return (
    <div>
      {state.createBoardReducer.afterAddListModalTextArea.map(
        (
          val: { id: number; text: string },
          afterAddListModalTextAreaIndex: number
        ) => (
          <div
            key={afterAddListModalTextAreaIndex}
            className={
              val.id === props.afterAddListModalIndex
                ? 'addListContentText'
                : ''
            }
          >
            {val.id === props.afterAddListModalIndex ? val.text : ''}
          </div>
        )
      )}
    </div>
  );
};

export default AfterAddListModalTextArea;
