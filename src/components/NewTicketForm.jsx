import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketSubmit(event){
    event.preventDefault();
    props.onAddNewTicket({
      names:_names.value,
      location:_location.value,
      issue:_issue.value,
      timeOpen: new Moment()
    });
    _names.value = '';
    _location.value = '';
    _issue.value = '';
    location.hash='/';
  }


  return (
    <div>
      <form onSubmit={handleNewTicketSubmit}>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
        <textarea
          id='issue'
          placeholder='Describe your issue.'
          ref={(textarea) => {_issue = textarea;}}/>
        <button type='submit'>Help!</button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  onAddNewTicket: PropTypes.func
};

export default NewTicketForm;
