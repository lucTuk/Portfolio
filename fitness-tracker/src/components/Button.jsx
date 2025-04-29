export default function Button({ children, classes, color }) {
  const className = classes ? `button ${classes}` : "button";

  return (
    <>
      <button
        className={
          color ? `button ${className} button--${color}` : `button ${className}`
        }
      >
        {children}
      </button>
    </>
  );
}
