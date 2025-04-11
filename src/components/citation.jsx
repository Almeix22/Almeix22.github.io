import React from 'react';

function Citation({ text, author }) {
  return (
    <div className="citation-container">
      <p className="citation-text">“{text}”</p>
      <p className="citation-author">- {author}</p>
    </div>
  );
}

export default Citation;