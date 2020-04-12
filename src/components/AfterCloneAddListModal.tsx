import React, { useContext } from 'react';
import AppContext from 'contexts/AppContext';
import 'styles/ModalArea.scss';

const AfterCloneAddListModal = () => {
  const { state } = useContext(AppContext);
  return (
    <div>
      {state.createBoardReducer.afterCloneAddList.map(
        (val: { addListText: string }, index: number) => (
          <div key={index} className="afterCloneAddListStyle">
            <h4
              style={{
                textAlign: 'center',
              }}
            >
              {val.addListText}
            </h4>
            <hr />
            <div style={{ margin: 10 }}>
              <label>
                <input className="afterCloneAddListStyle-input"></input>
              </label>
            </div>
            <div className="saveButton">保存</div>
          </div>
        )
      )}
    </div>
  );
};

export default AfterCloneAddListModal;
