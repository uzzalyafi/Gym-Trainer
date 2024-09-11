/* eslint-disable react/prop-types */


const Card = ({ className , children }) => {
  return (
    <article className={`card ${className}`}>
      {children}
    </article>
  );
};

export default Card;
