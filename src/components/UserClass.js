import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
        login: "Dummy Login",
        avatarUrl: "Dummy Avatar",
      },
    };
    console.log(props);
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/hsingla378");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    // const { count, count2 } = this.state;

    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
