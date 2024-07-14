import React, { useEffect, useRef } from 'react';
import { useSetAtom } from "jotai";
import { uiAtom } from "../../state";
import "./TimelineModal.css";

const TimelineModal = ({details}) => {
  const setUi = useSetAtom(uiAtom);
  const modalRef = useRef(null);

  const closeModal = () => {
    setUi((prev) => ({
      ...prev,
      modal: {
        open: null,
        id: null,
      },
    }));
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  console.log(details)

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        {/* <button className="close-btn" onClick={closeModal}>
          &times;
        </button> */}
        <div style={{ backgroundColor: details.title.background }} className='modal-content__header'>
          <div style={{width: details.title.width}}>{details.title.company}</div>
        </div>
        <div>
          <p>
            The FitnessGram Pacer Test is a multistage aerobic capacity test that
            progressively gets more difficult as it continues. The running speed
            starts slowly, but gets faster each minute signal.
          </p>
        </div>
      </div>
    </div>
  );
};
export default TimelineModal;