import React, { useContext, useRef } from 'react';
import AppContext from 'contexts/AppContext';
import { SEND_TEXT_AFER_ADD_LIST_MODAL } from 'actions/index';
import AfterAddListModalTextArea from 'components/AfterAddListModalTextArea';
import 'styles/AfterAddListModal.scss';

const AfterAddListModal = () => {
  const { state, dispatch } = useContext(AppContext);

  // 配列のinputを個々で判別
  const els = useRef<any>([]);
  state.createBoardReducer.afterAddListModal.forEach((val: any, index: any) => {
    els.current[index] = React.createRef<HTMLInputElement>();
  });

  const onSave = (event: any) => {
    const id = Number(event.currentTarget.dataset.index);
    if (els.current[id].current.value === '') return;
    dispatch({
      type: SEND_TEXT_AFER_ADD_LIST_MODAL,
      id,
      addListContentText: els.current[id].current.value,
    });
    els.current[id].current.value = '';
  };

  return (
    <div>
      {state.createBoardReducer.afterAddListModal.map(
        (val: { addListText: string }, afterAddListModalIndex: number) => (
          <div key={afterAddListModalIndex} className="afterAddListStyle">
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
                <input
                  ref={els.current[afterAddListModalIndex]}
                  className="afterAddListStyle-input"
                />
              </label>
            </div>
            <div
              className="saveButton"
              data-index={afterAddListModalIndex}
              onClick={onSave}
            >
              保存
            </div>
            <div
              style={
                state.createBoardReducer.afterAddListModalTextArea.length > 0
                  ? { marginTop: 70 }
                  : {}
              }
            >
              <AfterAddListModalTextArea
                afterAddListModalIndex={afterAddListModalIndex}
              />
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default AfterAddListModal;
