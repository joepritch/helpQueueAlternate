import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import MyStyledComponent from './MyStyledComponent';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){

  function randColor(){
    var colorNumber = Math.floor(100000 + Math.random()*900000);
    var color = '#'+colorNumber.toString();
    return color;
  }

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Dokdo" rel="stylesheet"/>
      <style global jsx>{`
        .redBackground{
          background-color: ${randColor()};
        }
        .redBackground:hover{
          background-color: ${randColor()};
          color: white;
        }
        html{
          font-family: 'Dokdo', cursive;
        }
      `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newTicket' component={NewTicketControl} />
        <Route component={Error404} />
      </Switch>
      <MyStyledComponent/>
    </div>
  );
}

export default App;
