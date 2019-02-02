// This is where most of your work will be done
import React from 'react';
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
      ]
    };
  }

  render() {
    var movies = this.state.movies.slice();
    var moviesList = movies.map((movie)=>{
      return <div key={movie.title}>{movie.title}</div>
    });
    return (
      <div>
        <h1>generic title</h1>
        <div>
          {moviesList}
        </div>
      </div>
    )
  }
}

export default App;