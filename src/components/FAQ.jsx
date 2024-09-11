/* eslint-disable react/prop-types */
import { HiOutlinePlus } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const FAQ = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = (e) => {
    // Prevent event propagation if clicking on the button
    e.stopPropagation();
    setShowAnswer(prev => !prev);
  };

  return (
    <article className="faq" onClick={() => setShowAnswer(prev => !prev)}>
      <div>
        <h4>{question}</h4>
        <button className="faq_icon" onClick={toggleAnswer}>
          {showAnswer ? <IoMdClose /> : <HiOutlinePlus />}
        </button>
      </div>
      {showAnswer && <p>{answer}</p>}
    </article>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
