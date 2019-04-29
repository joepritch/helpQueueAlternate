import React from 'react';
import PropTypes from 'prop-types';

function Ticket(props){
  const ticketInfo =
    <div>
      <style global jsx>{`
        div {
          background-color: red;
        }
        `}</style>
      <h3>{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime} ago</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/admin') {
    return (
      <div onClick={()=> {props.onSelectTicket(props.ticketId);}}>
        {ticketInfo}
      </div>
    );
  } else {
    return (
      <div>
        {ticketInfo}
      </div>
    );
  }
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onSelectTicket: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};

export default Ticket;
