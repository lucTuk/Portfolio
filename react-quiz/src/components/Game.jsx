import questions from "../questions";

export default function Game({ step, question, onClickVariant }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className='progress'>
        <div
          style={{ width: `${percentage}%` }}
          className='progress__inner'
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li
            key={text}
            onClick={() => onClickVariant(index)}
            className={index === question.correct ? "success" : "error"}
          >
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}
