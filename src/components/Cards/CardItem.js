import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="cards__item">
        <div href={props.href} className="cards__item__link">
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="Travel "
              className="cards__item__img"
              width="640"
              height="360"
            />
          </figure>
          <h5 className="cards__item__text">{props.text}</h5>
          <div className="cards__item_tag">{props.tags}</div>
          <div className="cards__item__info">
            {props.githublink != null ? (
              <button className="btnlink">
                <i class="fab fa-github" aria-hidden="true"></i>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-outline"
                  href={props.githublink}
                >
                  github
                </a>
              </button>
            ) : (
              ""
            )}
            {console.log(props.githublink)}
            <button className="btnlink">
              <i class="fas fa-link" aria-hidden="true"></i>
              <a
                rel="noreferrer"
                target="_blank"
                className="btn btn-outline"
                href={props.href}
              >
                live
              </a>
            </button>
          </div>
        </div>
      </li>
    </>
  );
}

export default CardItem;
