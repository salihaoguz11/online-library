import React from "react";
import { AboutContainer, IconContainer, InfoContainer } from "./About.style";
import profile from "../../assets/about.png";
import Icon from "../../components/icon/Icon";
import { iconData } from "../../helper/iconData";

const About = () => {
  return (
    <AboutContainer>
      <InfoContainer>
        <h2>Hi, I'm Saliha</h2>
        <h3>I have been learning Full-Stack Development Languages.</h3>
        <h4>I've already known JS, ReactJS, NextJs, ReactNative</h4>
        <h4>💬 You can ask me anything you want to know</h4>
      </InfoContainer>
      {/* <IconContainer>
        {iconData.map(item=> <a key={item.icon} href={item.href}>
          <Icon icon={item.icon} path={item.path} hoverColor={item.color} />
        </a>)}
      </IconContainer> */}
    </AboutContainer>
  );
};

export default About;
