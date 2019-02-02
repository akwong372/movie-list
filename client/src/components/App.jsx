// This is where most of your work will be done
import React from 'react';
import Search from './Search.jsx'
// import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        { title: 'Mean Girls' },
        { title: 'Hackers' },
        { title: 'The Grey' },
        { title: 'Sunshine' },
        { title: 'Ex Machina' },
      ],
      searchResults: []
    };
    this.searchTest = this.searchTest.bind(this);
  }

  searchTest (e){
    e.preventDefault();
    console.log(e.target.form[0].value);
    var searched = e.target.form[0].value;
    var regexTester = RegExp(searched);
    var results = [];
    for (var i = 0; i < this.state.movies.length; i++){
      if (regexTester.test(this.state.movies[i].title)){
        results.push(this.state.movies[i]);
      }
    }
    if (results.length > 0){
      this.setState({
        searchResults: results
      });
    } else if (results.length === 0) {
      this.setState({
        searchResults: [{ title: 'no movies found'}]
      });
    }
  }

  componentDidMount(){
    this.setState({
      searchResults: this.state.movies
    })
  }

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
        <Search searchTest={this.searchTest}/>
        <hr />
          {moviesList}
        </div>
      </div>
    );;
  }
}

export default App;