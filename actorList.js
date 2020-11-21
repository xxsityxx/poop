import React from 'react'


class ActorList extends React.Component {
    render() {
      let listActors = this.props.names.map((actor) => {
        return <li> {actor} </li>
      })
             
      return <div>
      <h3> Actors: </h3>
        <ul>
          {listActors}
        </ul>  
      </div>
 
    }
  }

export default ActorList;