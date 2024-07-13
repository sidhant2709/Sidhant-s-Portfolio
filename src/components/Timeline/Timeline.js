import React from "react";
import { useSetAtom } from "jotai";
import { useAtomValue } from "jotai";
import { uiAtom } from "../../state";
import Overlays from "../Overlays/Overlays";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as GlIcon } from "../../assets/globallogic_logo_orange.svg";
import { ReactComponent as GlLogo } from "../../assets/globallogic_logo.svg";
import { ReactComponent as IcimsLogo } from "../../assets/icims_logo.svg";
import { ReactComponent as IcimsIcon } from "../../assets/icims_icon.svg";
import { ReactComponent as CogniLogo } from "../../assets/cognizant_logo.svg";
import { ReactComponent as CogniIcon } from "../../assets/cognizant_icon.svg";
import "./TimeLine.css";

let timelineElements = [
  {
    id: 1,
    title: {
      company: <IcimsLogo />,
      background: "#FFFFFF",
      width: "30%",
    },
    location: "Hyderabad, India",
    description:
      "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
    buttonText: "View Frontend Projects",
    date: "August 2016 - present",
    icon: <IcimsIcon />,
  },
  {
    id: 2,
    title: {
      company: <GlLogo />,
      background: "#414042",
      width: "40%",
    },
    location: "Hyderabad, India",
    description:
      "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
    buttonText: "View Frontend Projects",
    date: "August 2016 - present",
    icon: <GlIcon />,
  },
  {
    id: 3,
    title: {
      company: <CogniLogo />,
      background: "#FFFFFF",
      width: "50%",
    },
    location: "Kolkata, India",
    description:
      "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
    buttonText: "View Frontend Projects",
    date: "August 2016 - present",
    icon: <CogniIcon />,
  },
];

const Timeline = () => {
  const setUi = useSetAtom(uiAtom);
  const ui = useAtomValue(uiAtom);
  const handleClick = (id) => {
    setUi((prev) => ({
      ...prev,
      modal:{
        open: true,
        id: id,
      },
    }));
  }

  return (
    <>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              icon={element.icon}
            >
              <div style={{ backgroundColor: element.title.background }} className="title__styles">
                <div style={{width: element.title.width}}>{element.title.company}</div>
              </div>
              <div id="details" className="details__styles">
                <h5>{element.location}</h5>
                <p>{element.description}</p>
                <button onClick={() => handleClick(element.id)}>Toggle Modal</button>
                <Overlays isOpen={ui.modal.id === element.id} />
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
