export default function TariffPlanCard({
  color,
  coast,
  name,
  benefitsList,
  date,
}) {
  return (
    <>
      <div
        className={
          color
            ? `traffic-plan-card traffic-plan-card--${color}`
            : "traffic-plan-card"
        }
      >
        <div className="traffic-plan-card__name">
          <p>{name}</p>
        </div>

        <div className="traffic-plan-card__coast">
          <span>
            ${coast} {date}
          </span>
        </div>

        <ul className="traffic-plan-card__benefits-list">
          {benefitsList.map((benefit) => (
            <li className="traffic-plan-card__benefits-list-item">{benefit}</li>
          ))}
        </ul>

        <button className="traffic-plan-card__button button">
          Get started
        </button>
      </div>
    </>
  );
}
