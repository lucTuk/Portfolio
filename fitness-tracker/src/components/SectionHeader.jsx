export default function SectionHeader({ title, description, reverse }) {
  return (
    <header className="section__header">
      <div className="section__header-inner container">
        <div
          className={
            reverse ? "section__info section__info--reverse" : "section__info"
          }
        >
          <h2 className="section__title">{title}</h2>
          <p className="section__description">{description}</p>
        </div>
      </div>
    </header>
  );
}
