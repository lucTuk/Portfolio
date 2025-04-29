import cardImage from "../../public/images/card-image.svg";

export default function Card({ color }) {
  return (
    <>
      <div className={color ? `card card--${color}` : "card"}>
        <div className="card__header">
          <img
            src={cardImage}
            alt="card-image"
            className="card__header-image"
          />
          <h5 className="card__header-text">
            Nisi ullamco tempor tempor nulla.
          </h5>
        </div>
        <div className="card__description">
          <p className="card__description-text">
            Nisi ullamco tempor tempor nulla labore ad labore sit eu duis.{" "}
          </p>
        </div>
      </div>
    </>
  );
}
