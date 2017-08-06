
class App extends React.Component {
  constructor (props) {
    super(props);
    this.request = this.request.bind(this);
    this.state = {
      users: [],
      recipes: null
    };
  }

  request (event) {
    console.log('click event', event)

    const that = this;

    axios.get('/recipes')
    .then(function (response) {
      that.setState({
        users: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // component did mount - lifecycle hook
    // fetch this sends a new get request

  render () {
    console.log('this is from render ',this.state.users)
    return (
      <div>
        <h1>Recipes!</h1>
        <div id="form">
          <button onClick={this.request}>Get Recipes!</button>
        </div>
        <div>
          {this.state.users.map ((user) =>
            <p>{user.username}</p>
            )}
        </div>
      </div>
  )}
}



window.App = App;
