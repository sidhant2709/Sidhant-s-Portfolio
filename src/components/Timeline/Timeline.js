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
    designation: "Software Engineer",
    date: "August 2016 - present",
    icon: <IcimsIcon />,
    description: {
      logoWidth: "10%",
    }
  },
  {
    id: 2,
    title: {
      company: <GlLogo />,
      background: "#414042",
      width: "40%",
    },
    location: "Hyderabad, India",
    designation: "Software Engineer",
    date: "August 2016 - present",
    icon: <GlIcon />,
    description: {
      logoWidth: "20%",
    }
  },
  {
    id: 3,
    title: {
      company: <CogniLogo />,
      background: "#FFFFFF",
      width: "50%",
    },
    location: "Kolkata, India",
    designation: "Program Analyst",
    date: "August 2016 - present",
    icon: <CogniIcon />,
    description: {
      logoWidth: "20%",
    }
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
                <h6>{element.designation}</h6>
                <button onClick={() => handleClick(element.id)}>more...</button>
                <Overlays isOpen={ui.modal.id === element.id} details={element}/>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
