import Section from "../Section";
import TariffPlanCard from "../TariffPlanCard";

export default function TariffPlan() {
  return (
    <Section
      title="Choose your tariff plan"
      description="We have selected the best payment solutions for you."
      onHeader={true}
      reverse={true}
    >
      <div className="section__body container">
        <div className="tariff-plan">
          <TariffPlanCard
            color="red"
            name="Free Plan"
            coast="0"
            benefitsList={[
              "5 Email",
              "Free Share",
              "200 Clients",
              "Chat support",
            ]}
            date="mounth"
          />
          <TariffPlanCard
            color="blue"
            name="Basic"
            coast="5"
            benefitsList={[
              "200 Email",
              "Free Share",
              "300 Clients",
              "Chat + Email support",
            ]}
            date="mounth"
          />
          <TariffPlanCard
            color="viollet"
            name="Advanced"
            coast="9"
            benefitsList={[
              "2 000 Email",
              "Free Share",
              "1 000 Clients",
              "Chat + Email support",
            ]}
            date="mounth"
          />
          <TariffPlanCard
            color="yellow"
            name="Most Advanced"
            coast="12"
            benefitsList={[
              "Unium Email",
              "Free Share",
              "10 000 Clients",
              "Personal Manager",
            ]}
            date="mounth"
          />
        </div>
      </div>
    </Section>
  );
}
