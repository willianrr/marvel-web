import React, {Component, useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import ComicsItem from "./components/comicsItem";
import SearchItem from "./components/searchItem";

const timeStamp = "1579541853";
const apiKey = "8343a00d63acbfaea58ca2029759e1e3";
const md5 = "e2ce54eeb0cef26146a2a661907f64fb";


export default class App extends Component {
  state = {
    comics: []
  };
 

  componentDidMount() {
    const urlComics = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`;

    axios.get(urlComics).then(response => {
      const comics = response.data.data.results;

      this.setState({ comics });
    });
  }
 
  render() {
    const { comics } = this.state;

    return (
      <>
        <aside>
          <SearchItem />
        </aside>
        <main>
          <div className="wrapper-header">
            <ul className="header-list">
              <li>Personagens</li>
              <li>Séries</li>
              <li>Eventos</li>
            </ul>
            <ul className="wrapper-header-mobile">
              <li className="header-list-mobile">Nomes</li>
            </ul>
          </div>
          {comics.map(comic => (
            <ComicsItem key={comic.id} comic={comic} />
          ))}
        </main>
      </>
    );
  }
}