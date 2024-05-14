import React from 'react';
import Quote from '../Quote/Quote';
import quotesData from '../Quote.json';
import './QuotePage.css'; 

const QuotePage = () => {
  return (
    <>
      <center className="center">Geek Food Quotes</center>
    <div className="quote-page-container">
      <div className="quotes-container">
        {quotesData.map((quote, index) => (
          <div key={index} className="quote-wrapper">
            <Quote quoteText={quote.quoteText} writerName={quote.writerName} />
          </div>
        ))}
      </div>
      
    </div>
    <footer className="footer">
        ❤️ by Akanksha
      </footer>
    </>
  );
};

export default QuotePage;
