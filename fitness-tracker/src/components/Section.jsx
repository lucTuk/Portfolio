import SectionHeader from "./SectionHeader";

export default function Section({
  children,
  title,
  description,
  reverse,
  onHeader,
  className,
}) {
  return (
    <section className={className ? className : "section"}>
      {onHeader ? (
        <SectionHeader
          title={title}
          description={description}
          reverse={reverse}
        />
      ) : null}

      {children}
    </section>
  );
}
