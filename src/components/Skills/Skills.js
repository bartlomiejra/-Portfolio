import React from "react";
import "../../App.css";
// import  { Component } from 'react';
import "./Skills.css";
import { default as html } from "./svg/html.svg";
import { default as sass } from "./svg/sass.svg";
import { default as javascript } from "./svg/javascript.svg";
import { default as figma } from "./svg/figma.svg";
import { default as git } from "./svg/git.svg";
import { default as react } from "./svg/react.svg";
import { default as pwa } from "./svg/pwa.svg";
import { default as php } from "./svg/php.svg";
import { default as mysql } from "./svg/mysql.svg";
import { default as linux } from "./svg/linux.svg";
import { default as webpack } from "./svg/webpack.svg";
import { default as ajax } from "./svg/ajax.svg";
import { default as typescript } from "./svg/typescript.svg";
import { default as graphql } from "./svg/graphql.svg";
import { default as gatsby } from "./svg/gatsby.svg";

function Skills() {
  return (
    <div className="skills__container">
      <h3>I am proficient in</h3>
      <div className="skills">
        <img src={html} alt="" className="techlogo" />
        <img src={sass} alt="" className="techlogo" />
        <img src={javascript} alt="" className="techlogo" />
        <img src={figma} alt="" className="techlogo" />
        <img src={git} alt="" className="techlogo" />
        <img src={react} alt="react" className="techlogo" />
        <img src={pwa} alt="react" className="techlogo" />
      </div>
      <h3>Familaiar with </h3>
      <div className="skills">
        <img src={php} alt="" className="techlogo" />
        <img src={mysql} alt="" className="techlogo" />
        <img src={linux} alt="" className="techlogo" />
        <img src={ajax} alt="" className="techlogo" />
        <img src={webpack} alt="" className="techlogo" />
      </div>
      <h3>Exploring</h3>

      <div className="skills">
        <img src={typescript} alt="" className="typescript" />
        <img src={graphql} alt="" className="graphql" />
        <img src={gatsby} alt="" className="gatsby" />
      </div>
    </div>
  );
}

export default Skills;
