import React, { Component } from "react";
import userService from "../services/userService";
import "../App.css"

export default class ListUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  //It get the values from userService and store at the users property in the state
  componentDidMount() {
    userService.getUsers().then((res) => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (

      <div>
         <div class='container'>
        <h2 className="text-center">User List</h2>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th scope="col">UserName</th>
                <th scope="col">Email</th>
                <th scope="col">ContactNo</th>
                <th scope="col">Password</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {
              this.state.users.map(
                user =>
                <tr key={user.id}>
                  <td scope="row">{user.profileName}</td>
                  <td scope="row">{user.emailId}</td>
                  <td scope="row">{user.contactno}</td>
                  <td scope="row">{user.description}</td>
                  <td scope="row">{user.password}</td>
                  <td scope="row">
								<a href="/details/{{providers.id}}" class="btn btn-secondary-moreInfo btn-sm">More
									info.</a>
								<a href="/edit/{{providers.id}}" class="btn btn-secondary btn-sm">Edit</a>
								<a href="#myModal{{providers.id}}" class="btn btn-sm btn-danger"
									data-bs-toggle="modal">Delete</a>
							</td>
                </tr>
              )
              }
            </tbody>
          </table>
        </div>
      </div>
      </div>
    );
  }
}
