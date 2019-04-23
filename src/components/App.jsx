import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import MyStyledComponent from './MyStyledComponent';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component{

  randColor(){
    var colorNumber = Math.floor(100000 + Math.random()*900000);
    var color = '#'+colorNumber.toString();
    return color;
  }

  constructor(props){
    super(props);
    this.state = {
      masterTicketList: []
    }
    this.handleAddNewTicket = this.handleAddNewTicket.bind(this);
  }

  handleAddNewTicket(newTicket){
    var newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.push(newTicket);
    this.setState({masterTicketList: newMasterTicketList})
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
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList}/>}/>
          <Route path='/newTicket' render={()=><NewTicketControl onAddNewTicket={this.handleAddNewTicket}/>}/>
          <Route component={Error404} />
        </Switch>
        <MyStyledComponent/>
      </div>
    );
  }
}

export default App;
