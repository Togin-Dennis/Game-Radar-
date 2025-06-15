import React from 'react';
import './showlist.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Showlist({ Gamedata, platform }) {
  return (
    <div className='showlistmaindiv'>
      <h2 className='Showlistheader'>Top Discounts On {platform}</h2>

      <div className='listrow headerrow'>
        <div className='titlecol'>Game</div>
        <div className='pricecol'>Discount</div>
        <div className='pricecol'>Current</div>
        <div className='pricecol'>Normal</div>
      </div>

      {Gamedata.sort((a, b) => b.savings - a.savings).map((data, index) => (
        <div
          className='listrow'
          key={index}
          onClick={() => window.open(`https://www.cheapshark.com/redirect?dealID=${data.dealID}`, '_blank')}
        >
          <div className='titlecol'>
            <LazyLoadImage src={data.thumb} alt="" className='listimg' />
            <span className='listtitle'>{data.title}</span>
          </div>
          <div className='pricecol'>{data.savings.slice(0, 2)}%</div>
          <div className='pricecol saleprice'>${data.salePrice}</div>
          <div className='pricecol'>${data.normalPrice}</div>
        </div>
      ))}
    </div>
  );
}

export default Showlist;
