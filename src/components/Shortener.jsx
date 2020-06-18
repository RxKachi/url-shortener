import React from "react";

const Shortener = props => {
  return (
    <div className='shortener'>
      <div className="shortener-input">
        <form action="">
          <input type="text" className="textInput" placeholder='shorten a link here...' required />
          <button type="submit" className="btn btn-primary">
            Shorten it!
          </button>
        </form>
      </div>
      <div className='shortener-result'>
          <div className='input-url'>https://example.com</div>
          <div className='result'>
            <a href="#!">https://relink.xy</a>
            <button className='btn btn-primary'>Copy</button>
          </div>
      </div>
    </div>
  );
};

export default Shortener;
