import React from 'react'
import ActorList from './actorList'

class MovieCredits extends React.Component {
    constructor () {
      super();
        this.state = {
        movie: 'Back to the future 4',
        actors: ['joe','chuck','bob']
      };
    }

    render() {
      return <div>
        <h1>Movie Name: {this.state.movie}</h1>
        <ActorList names={this.state.actors} />
        </div>
    }
  }

export default MovieCredits;