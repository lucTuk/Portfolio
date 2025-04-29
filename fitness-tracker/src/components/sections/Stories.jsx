import Section from "../Section";
import StoryCard from "../StoryCard";

import storyCardImageGreen from "../../../public/images/story-card-image-1.png";
import storyCardImageViollet from "../../../public/images/story-card-image-2.png";

export default function Stories() {
  return (
    <Section title="Stories of our users" onHeader={true}>
      <div className="section__body">
        <div className="stories container">
          <ul className="stories__list">
            <li className="stories__story">
              <StoryCard
                title="Stories of our users"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                image={storyCardImageGreen}
                date="2020-10-17"
              />
            </li>
            <li className="stories__story">
              <StoryCard
                title="Stories of our users"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                image={storyCardImageViollet}
                date="2020-10-17"
              />
            </li>
            <li className="stories__story">
              <StoryCard
                title="Stories of our users"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                image={storyCardImageGreen}
                date="2020-10-17"
              />
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
