// This is where most of your work will be done
import React from 'react';
import Search from './Search.jsx'
import Insert from './Insert.jsx'
// import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        // { title: 'Mean Girls' },
        // { title: 'Hackers' },
        // { title: 'The Grey' },
        // { title: 'Sunshine' },
        // { title: 'Ex Machina' },
      ],
      searchResults: []
    };
    this.searchTest = this.searchTest.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  searchTest(e) {
    e.preventDefault();
    var searched = e.target.form[0].value;
    var regexTester = RegExp(searched);
    var results = [];
    for (var i = 0; i < this.state.movies.length; i++) {
      if (regexTester.test(this.state.movies[i].title)) {
        results.push(this.state.movies[i]);
      }
    }
    if (results.length > 0) {
      this.setState({
        searchResults: results
      });
    } else if (results.length === 0) {
      this.setState({
        searchResults: [{ title: 'no movies found' }]
      });
    }
  }

  //take value from event
    //add to placeholder object with title key
    //push object into movies array

    addMovie(e){
      e.preventDefault();
      var obj = [{title: e.target.form[0].value}]
      var test = this.state.movies.concat(obj)
      this.setState({
        movies: test,
        searchResults: test
      });
    }


  componentDidMount() {
    this.setState({
      searchResults: this.state.movies
    })
  }

  // componentDidUpdate(prevProps) {

  // }

  render() {
    var movies = this.state.searchResults.slice();
    var moviesList = movies.map((movie) => {
      return (
        <div key={movie.title} className='movieItem'>
          <br />
          <div>{movie.title}</div>
          <br />
        </div>
      );
    });
    return (
      <div>
        <div id='movieList' className='container movieList'>
          <h1>generic title</h1>
          <br/>
          <Insert addMovie={this.addMovie}/>
          <Search searchTest={this.searchTest} />
          <hr />
          {moviesList}
        </div>
      </div>
    );
  }
}

export default App;