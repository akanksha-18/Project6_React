import React from 'react';
import "../Quote/Quote.css"
const Quote = ({ quoteText, writerName }) => {
  return (
    <div className="quote">
      <p className="quote-text">{quoteText}</p>
      <p className="writer-name">- {writerName}</p>
    </div>
  );
};

export default Quote;
