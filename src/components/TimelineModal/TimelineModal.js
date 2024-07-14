import React, { useEffect, useRef } from "react";
import { useSetAtom } from "jotai";
import { uiAtom } from "../../state";
import "./TimelineModal.css";

const TimelineModal = ({ details }) => {
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

  useEffect(() => {
    // Add a class to the body to disable scrolling
    document.body.classList.add("no-scroll");

    return () => {
      // Remove the class when the component unmounts or the modal closes
      document.body.classList.remove("no-scroll");
    };
  }, []);

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
        <div
          style={{ backgroundColor: details.title.background }}
          className="modal-content__header"
        >
          <div style={{ width: details.description.logoWidth }}>
            {details.title.company}
          </div>
        </div>
        <div className="modal-content__description-header">
          <h3>Work Experience</h3>
        </div>
        <div className="modal-content__description-content">
          <div>
            <h5>Development and Implementation</h5>
            <ul>
              <li>
                Developed and implemented React and Redux applications to
                enhance user experience and improve overall performance.
              </li>
              <li>
                Created efficient and dynamic web applications using Node.js and
                the Express.js framework.
              </li>
              <li>
                Leveraged JavaScript, TypeScript, and Vue.js to deliver
                responsive and interactive user interfaces.
              </li>
              <li>
                Utilized Next.js framework to develop scalable and efficient
                server-side rendered applications.
              </li>
              <li>
                Developed Single Page Applications (SPAs) and Backend for
                Frontend (BFF) architectures, improving overall performance and
                user experience.
              </li>
              <li>
                Integrated third-party APIs to enhance application
                functionalities and provide seamless user experiences.
              </li>
            </ul>
          </div>
          <div>
            <h5>Development and Implementation</h5>
            <ul>
              <li>
                Developed and implemented React and Redux applications to
                enhance user experience and improve overall performance.
              </li>
            </ul>
          </div>
          <div>
            <h5>Development and Implementation</h5>
            <ul>
              <li>
                Developed and implemented React and Redux applications to
                enhance user experience and improve overall performance.
              </li>
            </ul>
          </div>
          <div>
            <h5>Development and Implementation</h5>
            <ul>
              <li>
                Developed and implemented React and Redux applications to
                enhance user experience and improve overall performance.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TimelineModal;
