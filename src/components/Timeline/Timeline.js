import React from "react";
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
    },
    location: "Hyderabad, India",
    description:
      "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
    buttonText: "View Frontend Projects",
    date: "August 2016 - present",
    icon: <CogniIcon />,
  },
];

const Timeline = () => {
  return (
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
              <div className="title__styles-logo">{element.title.company}</div>
            </div>
            <div id="details" className="details__styles">
              <h5>{element.location}</h5>
              <p>{element.description}</p>
            </div>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
