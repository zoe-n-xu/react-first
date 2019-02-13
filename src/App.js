import React, { Component } from 'react';
import CardsList from './CardsList';
// import { data } from './data';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import { connect } from 'react-redux';
import { setSearchField } from './actions';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchTextChange: (event) => dispatch(setSearchField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      robos: [],
      // searchText: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then(users => this.setState({ robos: users }));
  }

  // onSearchTextChange = (event) => {
  //   this.setState({ searchText: event.target.value});
  // }
  
  render() {
    const { searchField, onSearchTextChange } = this.props;
    const filteredRobos = this.state.robos.filter(robo => {
      return robo.name.toLowerCase().includes(searchField.toLowerCase())
    });
    if (this.state.robos.length === 0) {
      return <h1>Loading</h1>
    } else {
      return (
        <div className="tc">
            <h1>Hello</h1>
            <SearchBox onSearchTextChange={onSearchTextChange}></SearchBox>
            <Scroll>
              <CardsList robos={filteredRobos}/>
            </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
