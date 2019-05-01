import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import MyStyledComponent from './MyStyledComponent';
import Admin from './Admin';
import Error404 from './Error404';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      selectedTicket: null
    };
    this.handleSelectTicket = this.handleSelectTicket.bind(this);
  }

  randColor(){
    var colorNumber = Math.floor(100000 + Math.random()*900000);
    var color = '#'+colorNumber.toString();
    return color;
  }

  componentDidMount(){
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(),
    60000
    );
  }

  // updateTicketElapsedWaitTime() {
  //   var newMasterTicketList = Object.assign({}, this.state.masterTicketList);
  //   Object.keys(newMasterTicketList).forEach(ticketId => {
  //     newMasterTicketList[ticketId].formattedWaitTime = (newMasterTicketList[ticketId].fromNow(true));
  //   });
  //   this.setState({masterTicketList: newMasterTicketList});
  // }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  handleSelectTicket(ticketId){
    this.setState({selectedTicket: ticketId});
  }


  render(){
    return (
      <div>
        <link href="https://fonts.googleapis.com/css?family=Dokdo" rel="stylesheet"/>
        <style global jsx>{`
          .redBackground{
            background-color: ${this.randColor()};
          }
          .redBackground:hover{
            background-color: ${this.randColor()};
            color: white;
          }
          html{
            font-family: 'Dokdo', cursive;
          }
          `}</style>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.props.masterTicketList}/>}/>
          <Route path='/newTicket' render={()=><NewTicketControl/>}/>
          <Route path='/admin' render={(props)=><Admin ticketList={this.props.masterTicketList} currentRouterPath={props.location.pathname} onSelectTicket={this.handleSelectTicket} selectedTicket={this.state.selectedTicket}/>}/>
          <Route component={Error404} />
        </Switch>
        <MyStyledComponent/>
      </div>
    );
  }
}

App.propTypes - {
  masterTicketList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterTicketList: state
  }
}


export default withRouter(connect()(App));
