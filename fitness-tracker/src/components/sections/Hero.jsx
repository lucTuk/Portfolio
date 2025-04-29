import heroIllustration from "../../../public/images/hero-Illustration.png";
import Button from "../Button";
import Section from "../Section";

export default function Hero() {
  return (
    <Section className="hero">
      <div className="container">
        <div className="hero__body">
          <div className="hero__left">
            <div className="hero__text">
              <h1 className="hero__title">The best fitness tracker!</h1>
              <p className="hero__description">
                Nisi ullamco tempor tempor nulla labore ad labore sit eu duis.
                Ut et esse cupidatat consequat ea exercitation.
              </p>
            </div>
            <div className="hero__download-buttons">
              <Button classes="hero__download-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.873 0H5.12695C2.29995 0 0 2.29995 0 5.12695V19.873C0 22.7 2.29995 25 5.12695 25H19.873C22.7 25 25 22.7 25 19.873V5.12695C25 2.29995 22.7 0 19.873 0ZM7.9252 19.5043C7.69913 19.9255 7.28753 20.1612 6.86487 20.1613C6.65767 20.1613 6.44789 20.1047 6.25594 19.9855C5.67243 19.623 5.47178 18.8175 5.80865 18.1897L6.04899 17.7419H8.871L7.9252 19.5043ZM5.21867 16.9355C4.56476 16.9355 4.03276 16.3989 4.03276 15.7394C4.03276 15.0799 4.56476 14.5434 5.21867 14.5434H7.5515L10.7513 8.95385L9.88409 7.43898C9.55716 6.86785 9.75184 6.13491 10.3181 5.80514H10.3182C10.8845 5.47541 11.6112 5.67185 11.9381 6.24294L12.1207 6.56181L12.3032 6.24299C12.6303 5.6718 13.357 5.47546 13.9232 5.80519C14.1975 5.96493 14.3937 6.22285 14.4757 6.53143C14.5577 6.84001 14.5156 7.16236 14.3572 7.43903L10.2902 14.5434H12.8556L14.225 16.9355H5.21867ZM19.699 16.9094H18.6685L19.5037 18.3138C19.8535 18.9017 19.6452 19.6563 19.0396 19.9958C18.8441 20.1053 18.6271 20.1613 18.4074 20.1613C18.2972 20.1613 18.1864 20.1473 18.077 20.1188C17.7497 20.0336 17.4762 19.8299 17.3068 19.545L12.9028 12.14L14.3674 9.67742L17.2039 14.4468H19.699C20.3984 14.4468 20.9673 14.9991 20.9673 15.6781C20.9673 16.357 20.3984 16.9094 19.699 16.9094Z"
                    fill="#1C1C1D"
                  />
                </svg>
                Download
              </Button>
              <Button classes="hero__download-button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.76418 0.833374C1.70627 1.04956 1.66666 1.28275 1.66666 1.54913V23.4599C1.66666 23.7222 1.70627 23.953 1.76189 24.1667L13.3333 12.5162L1.76418 0.833374Z"
                    fill="#1C1C1D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.3333 8.26903L4.09826 0.362865C3.53072 0.0182122 2.97201 -0.0691532 2.5 0.0510745L14.7435 11.6667L18.3333 8.26903Z"
                    fill="#1C1C1D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.1304 11.0569L19.5257 9.16663L15.8333 12.4633L19.5942 15.8333L23.1014 14.0177C24.8136 13.098 24.189 11.6176 23.1304 11.0569Z"
                    fill="#1C1C1D"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 24.9389C2.97687 25.0729 3.5464 24.9926 4.12551 24.6389L18.3333 16.804L14.6965 13.3334L2.5 24.9389Z"
                    fill="#1C1C1D"
                  />
                </svg>
                Download
              </Button>
            </div>
          </div>

          <div className="hero__right">
            <img
              src={heroIllustration}
              alt="mobile"
              className="hero__illustration"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
