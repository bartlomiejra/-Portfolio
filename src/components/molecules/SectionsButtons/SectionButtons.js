import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Link } from 'react-scroll';
function SectionButtons() {
  return (
    <>
      <Link activeClass="active" to="whoiam" spy={true} smooth={true}>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          About Me
        </Button>
      </Link>
      <Link activeClass="active" to="skills" spy={true} smooth={true}>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Skills
        </Button>
      </Link>

      <Link activeClass="active" to="project" spy={true} smooth={true}>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          My Projects
        </Button>
      </Link>
      <Link activeClass="active" to="contactme" spy={true} smooth={true}>
        <Button
          className="btns"
          b
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Contact Me!
        </Button>
      </Link>
    </>
  );
}

export default SectionButtons;
