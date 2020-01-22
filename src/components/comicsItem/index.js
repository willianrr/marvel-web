import React from 'react';
import './styles.css';

function comicsItem({comic}) {
    const urlImgBase = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;
    const listSeries = comic.series.items;
    const listEvents = comic.events.items;

    return (
      <>
      <li>
        <div className="list">
          <div className="wrapper">
            <img className="comicImg" src={urlImgBase} alt={comic.name}/>
            <h4 className="title-comic">{comic.name}</h4>
          </div>
          <div className="wrapper-series">
            {listSeries.slice(0, 2).map((series, index) => (
              <ul className="lists" key={index}>
                <li>{series.name}</li>
              </ul>
            ))}
          </div>
          <div className="wrapper-events">
          {listEvents.slice(0, 2).map((events, index) => (
              <ul className="lists" key={index}>
                <li>{events.name}</li>
              </ul>
            ))}
          </div>
        </div>
        </li>
      </>
    )
}

export default comicsItem;