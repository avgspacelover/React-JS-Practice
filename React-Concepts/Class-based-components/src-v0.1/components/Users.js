import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

const DUMMY_USERS = [
  { id: 'u1', name: 'Max' },
  { id: 'u2', name: 'Manuel' },
  { id: 'u3', name: 'Julie' },
];

// you cannot have multiple states like multiple useStates in func cmp, all the state variables have to be enclosed in a single object for every cmp

class Users extends Component {

  constructor(){  // initialise + declare state; Your state is always an object in class based comp
    super();
    this.state= {
      showUsers: true
    };  // mandatory naming

  }

  
  toggleUsersHandler(){

    this.setState((curState) => {

      return {showUsers: !curState.showUsers}

    }) // mandatory naming; cant override old state, it will merge with old state, unlike func comp
  }

  render(){
    const usersList = (
      <ul>
        {DUMMY_USERS.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
       <button onClick={this.toggleUsersHandler.bind(this)}>
         {this.state.showUsers ? 'Hide' : 'Show'} Users
       </button>
       {this.state.showUsers && usersList}
     </div>
    )
  }
}



// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

  // const usersList = (
  //   <ul>
  //     {DUMMY_USERS.map((user) => (
  //       <User key={user.id} name={user.name} />
  //     ))}
  //   </ul>
  // );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
