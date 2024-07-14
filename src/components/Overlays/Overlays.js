import { createPortal } from "react-dom";
import TimelineModal from "../TimelineModal/TimelineModal";

const mountElement = document.getElementById("overlays");

const Overlays = ({ isOpen, details }) => {
  if (!isOpen) return null;
  return createPortal(<TimelineModal details={details} />, mountElement);
};
export default Overlays;