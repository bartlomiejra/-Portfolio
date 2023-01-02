import React from 'react';
import '../../../Styles/App.css';

// import  { Component } from 'react';
import './Skills.css';
import { default as html } from '../../../assets/svg/html.svg';
import { default as sass } from '../../../assets/svg/sass.svg';
import { default as javascript } from '../../../assets/svg/javascript.svg';
import { default as figma } from '../../../assets/svg/figma.svg';
import { default as git } from '../../../assets/svg/git.svg';
import { default as react } from '../../../assets/svg/react.svg';
import { default as pwa } from '../../../assets/svg/pwa.svg';
import { default as php } from '../../../assets/svg/php.svg';
import { default as mysql } from '../../../assets/svg/mysql.svg';
import { default as linux } from '../../../assets/svg/linux.svg';
import { default as webpack } from '../../../assets/svg/webpack.svg';
import { default as typescript } from '../../../assets/svg/typescript.svg';
import { default as graphql } from '../../../assets/svg/graphql.svg';
import { default as gatsby } from '../../../assets/svg/gatsby.svg';
import { default as bash } from '../../../assets/svg/bash.svg';
import { default as vim } from '../../../assets/svg/vim.svg';
import { motion } from 'framer-motion';
import { useScroll } from '../../../assets/useScroll';

import {
  imageAnimation,
  fromRightAnimation,
  fromLeftAnimation,
} from '../../../assets/Animation';

function Skills() {
  const [element, controls] = useScroll();
  return (
    <div className="skills__container" ref={element}>
      <motion.h2
        //  ref={element}

        animate={controls}
        transition={{ dalay: 0.1, type: 'tween' }}
        variants={imageAnimation}
      >
        Tech Stack
      </motion.h2>
      <motion.h3
        animate={controls}
        transition={{ dalay: 0.5, type: 'tween' }}
        variants={fromRightAnimation}
      >
        I am proficient in
      </motion.h3>
      <motion.div
        animate={controls}
        transition={{ dalay: 0.5, type: 'tween' }}
        variants={fromLeftAnimation}
        className="skills"
      >
        <img
          src={html}
          height="120px"
          width="120px"
          alt="html"
          className="techlogo"
        />
        <img
          src={sass}
          height="120px"
          width="120px"
          alt="sass"
          className="techlogo"
        />
        <img
          src={javascript}
          height="120px"
          width="120px"
          alt="js"
          className="techlogo"
        />
        <img
          src={figma}
          height="120px"
          width="120px"
          alt="figma"
          className="techlogo"
        />
        <img
          src={git}
          height="120px"
          width="120px"
          alt="git"
          className="techlogo"
        />
        <img
          src={vim}
          height="120px"
          width="120px"
          alt="vim"
          className="techlogo"
        />
        <img
          src={react}
          height="120px"
          width="120px"
          alt="react"
          className="techlogo"
        />
        <img
          src={pwa}
          height="120px"
          width="120px"
          alt="pwa"
          className="techlogo"
        />
      </motion.div>
      <motion.h3
        animate={controls}
        transition={{ dalay: 0.5, type: 'tween' }}
        ref={element}
        variants={fromRightAnimation}
      >
        Familaiar with{' '}
      </motion.h3>
      <motion.div
        animate={controls}
        transition={{ dalay: 0.5, type: 'tween' }}
        variants={fromLeftAnimation}
        className="skills"
      >
        <img
          src={php}
          height="120px"
          width="120px"
          alt="php"
          className="techlogo"
        />
        <img
          src={mysql}
          height="120px"
          width="120px"
          alt="myslq"
          className="techlogo"
        />
        <img
          src={linux}
          height="120px"
          width="120px"
          alt="linux"
          className="techlogo"
        />
        <img
          src={bash}
          height="120px"
          width="120px"
          alt="bash"
          className="techlogo"
        />
        <img
          src={webpack}
          height="120px"
          width="120px"
          alt="webpack"
          className="techlogo"
        />
      </motion.div>
      <motion.h3
        animate={controls}
        transition={{ dalay: 0.5, type: 'tween' }}
        variants={fromRightAnimation}
      >
        Exploring
      </motion.h3>

      <motion.div
        animate={controls}
        transition={{ dalay: 1, type: 'tween' }}
        variants={fromLeftAnimation}
        className="skills"
      >
        <img
          src={typescript}
          height="120px"
          width="120px"
          alt="typescript"
          className="techlogo"
        />
        <img
          src={graphql}
          height="120px"
          width="120px"
          alt="graphql"
          className="techlogo"
        />
        <img
          src={gatsby}
          height="120px"
          width="120px"
          alt="gatsby"
          className="techlogo"
        />
      </motion.div>
    </div>
  );
}

export default Skills;
