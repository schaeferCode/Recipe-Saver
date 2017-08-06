class Users extends React.Component {
  constructor (props) {
    super(props);
    console.log(this.props);
  }

  // component did mount - lifecycle hook
    // fetch this sends a new get request

  render () {
    return (
      <div>
        <h1>Changed!</h1>
        <div id="form">
          <form id="recipe" action="/recipes" method="get">
            <input type="submit" value="Get Recipes!" />
          </form>
        </div>
        <div>
        </div>
      </div>
  )}
}

window.Recipes = Recipes;
