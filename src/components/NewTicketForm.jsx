import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function NewTicketForm(props){
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketSubmit(event){
    event.preventDefault();
    const { dispatch } = props;
    const action = {
      type: 'ADD_TICKET',
      names:_names.value,
      location:_location.value,
      issue:_issue.value,
      timeOpen: new Moment(),
      id: v4()
    };
    dispatch(action);
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

export default connect()(NewTicketForm);
