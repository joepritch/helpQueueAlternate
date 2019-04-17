import React from 'react';

function MyStyledComponent(props) {

  return (
    <div>
      <p className="red-text">only this paragraph will get the style :)</p>
      <style jsx>{`
        .red-text {
          color: white;
        }
    `}</style>
  </div>
  );
}

export default MyStyledComponent;
