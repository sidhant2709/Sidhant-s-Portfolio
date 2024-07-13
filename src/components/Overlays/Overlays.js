import { createPortal } from "react-dom";
import TimelineModal from "../TimelineModal/TimelineModal";

const mountElement = document.getElementById("overlays");

const Overlays = ({ isOpen }) => {
  if (!isOpen) return null;
  return createPortal(<TimelineModal />, mountElement);
};
export default Overlays;