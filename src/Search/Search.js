import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Axiosfun from '../GlobelFunc/Axios';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Search.css';

function Search() {
  const location = useLocation();
  const { Searchdata } = location.state || {};
  const [Searchdataoutput, SetSearchOutput] = useState([]);
  const [loading, setLoading] = useState(true); // 👈 loading state

  useEffect(() => {
    const fetchData = async () => {
      if (!Searchdata) return;

      setLoading(true); // 👈 start loading

      const searchResult = await Axiosfun(
        `https://www.cheapshark.com/api/1.0/games?title=${Searchdata}&limit=10`
      );

      const detailedResults = await Promise.all(
        searchResult.map(async (game) => {
          try {
            const dealDetails = await Axiosfun(
              `https://www.cheapshark.com/api/1.0/deals?id=${game.cheapestDealID}`
            );
            const info = dealDetails.gameInfo || {};
            const normal = parseFloat(info.retailPrice);
            const sale = parseFloat(info.salePrice);
            const discount =
              !isNaN(normal) && !isNaN(sale) && normal > 0
                ? Math.round(((normal - sale) / normal) * 100)
                : 'N/A';

            return {
              title: game.external,
              thumb: game.thumb,
              dealID: game.cheapestDealID,
              normalPrice: isNaN(normal) ? 'N/A' : normal.toFixed(2),
              salePrice: isNaN(sale) ? 'N/A' : sale.toFixed(2),
              discount,
            };
          } catch (err) {
            return {
              title: game.external,
              thumb: game.thumb,
              dealID: null,
              normalPrice: 'N/A',
              salePrice: 'N/A',
              discount: 'N/A',
            };
          }
        })
      );

      SetSearchOutput(detailedResults);
      setLoading(false); // 👈 stop loading
    };

    fetchData();
  }, [Searchdata]);

  return (
    <div className="game-search-wrapper">
      <div className="game-search-header">
        <h2>Search Results</h2>
      </div>

   {loading ? (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
) : 
 (
        <div className="game-search-grid">
          {/* Header Row */}
          <div className="heading">
            <span>Game</span>
            <span>Discount</span>
            <span>Current Price</span>
            <span>Normal Price</span>
          </div>

          {/* Game Rows */}
          {Searchdataoutput.map((data, index) => (
            <div
              key={index}
              className="game-search-card"
              onClick={() => {
                if (data.dealID)
                  window.open(
                    `https://www.cheapshark.com/redirect?dealID=${data.dealID}`,
                    '_blank'
                  );
              }}
            >
              <div className="game-info">
                <LazyLoadImage
                  className="game-thumb"
                  src={data.thumb}
                  alt={data.title}
                />
                <h4 className="game-title">{data.title}</h4>
              </div>
              <span className="price-cell">
                {data.discount !== 'N/A' ? `${data.discount}%` : 'N/A'}
              </span>
              <span className="price-cell">
                {data.salePrice !== 'N/A' ? `$${data.salePrice}` : 'N/A'}
              </span>
              <span className="price-cell">
                {data.normalPrice !== 'N/A' ? `$${data.normalPrice}` : 'N/A'}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
