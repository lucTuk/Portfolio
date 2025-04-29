export default function StoryCard({ image, title, description, date }) {
  return (
    <>
      <div className="story-card">
        <img src={image} alt="image" className="story-card__image" />

        <div className="story-card__text">
          <h4 className="story-card__title">{title}</h4>
          <div className="story-card__description">
            <p>{description}</p>
          </div>
        </div>

        <span className="story-card__date">
          <time dateTime="2020-10-17">
            {date.split("-").reverse().join(".")}
          </time>
        </span>
      </div>
    </>
  );
}
