import React from 'react';
import './BookForm.scss'; // build-ignore-line

const BookForm = () => (
  <div className="BookForm">
    <div className="BookForm__inputs">
      <div className="BookForm__title">Book A Room</div>
    </div>
    <div className="BookForm__actions">
      <button type="submit" className="BookForm__submit">
        Find Rooms
      </button>
      <div className="BookForm__secondary-action">
        <a href="/" className="BookForm__secondary-action-link">
          Flexible Travel Dates
        </a>
      </div>
    </div>
  </div>
);

export default BookForm;
