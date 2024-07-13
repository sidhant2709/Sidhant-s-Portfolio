import React, { useEffect, useRef } from 'react';
import { useSetAtom } from "jotai";
import { useAtomValue } from "jotai";
import { uiAtom } from "../../state";
import "./TimelineModal.css";

const TimelineModal = () => {
  const setUi = useSetAtom(uiAtom);
  const modalRef = useRef(null);
  const ui = useAtomValue(uiAtom);

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
        <button className="close-btn" onClick={closeModal}>
          &times;
        </button>
        <h2>Modal</h2>
        <p>
          The FitnessGram Pacer Test is a multistage aerobic capacity test that
          progressively gets more difficult as it continues. The running speed
          starts slowly, but gets faster each minute after you hear this signal.
        </p>
      </div>
    </div>
  );
};
export default TimelineModal;