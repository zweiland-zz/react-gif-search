import React from 'react';

class SearchBar extends React.Component {
  onInputChange(term) {
    this.props.onTermChange(term);
  }

  render() {
    return (
      <div className="search">
        <input onChange={event => this.onInputChange(event.target.value)}
               placeholder="Search all the gifs"/>
      </div>
    );
  }
}

export default SearchBar
