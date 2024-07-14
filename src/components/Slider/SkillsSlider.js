import Slider from "react-slick";
import reactLogo from "../../assets/skills/react.png";
import reduxLogo from "../../assets/skills/redux.png";
import nodeLogo from "../../assets/skills/nodejs.png";
import awsLogo from "../../assets/skills/aws.png";
import htmlLogo from "../../assets/skills/html.png";
import cssLogo from "../../assets/skills/css.png";
import scssLogo from "../../assets/skills/sass.png";
import awsLambdaLogo from "../../assets/skills/awslambda.png";
import tailwindLogo from "../../assets/skills/tailwind.png";
import nextLogo from "../../assets/skills/nextjs.png";
import jiraLogo from "../../assets/skills/jira.png";
import jenkinsLogo from "../../assets/skills/jenkins.png";
import bootsstrapLogo from "../../assets/skills/bootstrap.png";
import bibucketLogo from "../../assets/skills/bitbucket.png";
import materialUiLogo from "../../assets/skills/materialui.png";
import npmLogo from "../../assets/skills/npm.png";
import pythonLogo from "../../assets/skills/python.png";
import styledComponentsLogo from "../../assets/skills/styledcomponents.png";
import vueLogo from "../../assets/skills/vue.png";
import javascriptLogo from "../../assets/skills/javascript.png";
import typescriptLogo from "../../assets/skills/typescript.png";
import mongoDbLogo from "../../assets/skills/mongodb.png";
import rxjsLogo from "../../assets/skills/rxjs.png";

import "./SkillsSlider.css";

const SkillsSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
  };
  return (
   <div className="mainContainer">
     <Slider {...settings}>
      <div className="slider-container">
        <img src={reactLogo} alt="react" />
      </div>
      <div className="slider-container">
        <img src={reduxLogo} alt="redux" />
      </div>
      <div className="slider-container">
        <img src={nodeLogo} alt="node" />
      </div>
      <div className="slider-container">
        <img src={awsLogo} alt="aws" />
      </div>
      <div className="slider-container">
        <img src={htmlLogo} alt="html" />
      </div>
      <div className="slider-container">
        <img src={cssLogo} alt="css" />
      </div>
      <div className="slider-container">
        <img src={scssLogo} alt="scss" />
      </div>
      <div className="slider-container">
        <img src={awsLambdaLogo} alt="awslambda" />
      </div>
      <div className="slider-container">
        <img src={tailwindLogo} alt="tailwind" />
      </div>
      <div className="slider-container">
        <img src={nextLogo} alt="next" />
      </div>
      <div className="slider-container">
        <img src={jiraLogo} alt="jira" />
      </div>
      <div className="slider-container">
        <img src={jenkinsLogo} alt="jenkins" />
      </div>
      <div className="slider-container">
        <img src={bootsstrapLogo} alt="bootsstrap" />
      </div>
      <div className="slider-container">
        <img src={bibucketLogo} alt="bitbucket" />
      </div>
      <div className="slider-container">
        <img src={materialUiLogo} alt="materialui" />
      </div>
      <div className="slider-container">
        <img src={npmLogo} alt="npmlogo" />
      </div>
      <div className="slider-container">
        <img src={pythonLogo} alt="pythonLogo" />
      </div>
      <div className="slider-container">
        <img src={styledComponentsLogo} alt="styledComponentsLogo" />
      </div>
      <div className="slider-container">
        <img src={vueLogo} alt="vueLogo" />
      </div>
      <div className="slider-container">
        <img src={javascriptLogo} alt="javascriptLogo" />
      </div>
      <div className="slider-container">
        <img src={typescriptLogo} alt="typescriptLogo" />
      </div>
      <div className="slider-container">
        <img src={mongoDbLogo} alt="mongoDbLogo" />
      </div>
      <div className="slider-container">
        <img src={rxjsLogo} alt="rxjsLogo" />
      </div>
    </Slider>
   </div>
  );
};

export default SkillsSlider;
