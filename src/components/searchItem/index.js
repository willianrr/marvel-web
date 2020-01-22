import React, {Component} from 'react';
import './styles.css';

export default class searchItem extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    };
  }
  updateSearch(event) {
    this.setState({search: event.target.value.substr(0,20)});
  }
  render() {
    return (
      <>
      <h3 className="title">Busca Marvel
        <span className="style-title"> teste front-end</span>
      </h3>
      <div className="bar"></div>
      <h3 className="candidate">Willian Rogerio Regina</h3>
      <form>
      <div className="group">
          <label className="title-search" htmlFor="name">Nome do Personagem</label>
          <input id="name" 
          value={this.state.search} 
          className="search" 
          type="text" 
          placeholder=""
          onChange={this.updateSearch.bind(this)}/>
      </div>
      </form>
      </>
    )
  }
}
