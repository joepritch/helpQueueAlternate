import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import MyStyledComponent from './MyStyledComponent';

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
      <TicketList/>
      <MyStyledComponent/>
    </div>
  );
}

export default App;
