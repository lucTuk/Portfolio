import Section from "../Section";
import watch from "../../../public/images/watch.png";

export default function Start() {
  return (
    <Section
      title="Start training already on your watch"
      description="Nisi ullamco tempor tempor nulla labore ad labore sit eu duis. Ut et esse cupidatat consequat.Nisi ullamco tempor tempor nulla labore ad labore sit eu duis. Ut et esse cupidatat consequat."
    >
      <div className="section__body">
        <div className="start__wrapper">
          <div className="container">
            <div className="start">
              <div className="start__left">
                <div className="start__text">
                  <h2 className="start__title">
                    Start training already on your watch
                  </h2>
                  <p className="start_description">
                    Nisi ullamco tempor tempor nulla labore ad labore sit eu
                    duis. Ut et esse cupidatat consequat.Nisi ullamco tempor
                    tempor nulla labore ad labore sit eu duis. Ut et esse
                    cupidatat consequat.
                  </p>
                </div>

                <form action="" className="start__form">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="input start__email-input"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="submit"
                    value="Let's GO!"
                    className="button button--yellow start__form-button"
                  />
                </form>
              </div>
              <img src={watch} alt="watch" className="start__image" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
