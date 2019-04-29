import React from 'react';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import PropTypes from 'prop-types';

function Admin(props){
  let optionalSelectedTicketContent = null;
  if (props.selectedTicket !=null) {
    optionalSelectedTicketContent = <TicketDetail selectedTicket={props.ticketList[props.selectedTicket]}/>;
  }

  return(
    <div>
      {optionalSelectedTicketContent}
      <TicketList
        ticketList={props.ticketList} currentRouterPath={props.currentRouterPath}
        onSelectTicket={props.onSelectTicket}/>
    </div>
  );
}

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onSelectTicket: PropTypes.func.isRequired,
  selectedTicket: PropTypes.string
};

export default Admin;
