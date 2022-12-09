import React from 'react';
import { Button } from '../../atoms/Button/Button';
import { Link } from 'react-scroll';
function SectionButtons() {
  return (
    <>
      <Link active ClassName="active" to="whoiam" spy={true} smooth={true}>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          About Me
        </Button>
      </Link>
      <Link active ClassName="active" to="skills" spy={true} smooth={true}>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Skills
        </Button>
      </Link>

      <Link active className="active" to="project" spy={true} smooth={true}>
        <Button
          className="btns"
          b
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          My Projects
        </Button>
      </Link>
      <Link active ClassName="active" to="contactme" spy={true} smooth={true}>
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
