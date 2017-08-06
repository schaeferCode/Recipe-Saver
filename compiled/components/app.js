'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.request = _this.request.bind(_this);
    _this.state = {
      users: [],
      recipes: null
    };
    return _this;
  }

  _createClass(App, [{
    key: 'request',
    value: function request(event) {
      console.log('click event', event);

      var that = this;

      axios.get('/recipes').then(function (response) {
        that.setState({
          users: response.data
        });
      }).catch(function (error) {
        console.log(error);
      });
    }

    // component did mount - lifecycle hook
    // fetch this sends a new get request

  }, {
    key: 'render',
    value: function render() {
      console.log('this is from render ', this.state.users);
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Recipes!'
        ),
        React.createElement(
          'div',
          { id: 'form' },
          React.createElement(
            'button',
            { onClick: this.request },
            'Get Recipes!'
          )
        ),
        React.createElement(
          'div',
          null,
          this.state.users.map(function (user) {
            return React.createElement(
              'p',
              null,
              user.username
            );
          })
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInJlcXVlc3QiLCJiaW5kIiwic3RhdGUiLCJ1c2VycyIsInJlY2lwZXMiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0aGF0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzZXRTdGF0ZSIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwibWFwIiwidXNlciIsInVzZXJuYW1lIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDTUEsRzs7O0FBQ0osZUFBYUMsS0FBYixFQUFvQjtBQUFBOztBQUFBLDBHQUNaQSxLQURZOztBQUVsQixVQUFLQyxPQUFMLEdBQWUsTUFBS0EsT0FBTCxDQUFhQyxJQUFiLE9BQWY7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBTyxFQURJO0FBRVhDLGVBQVM7QUFGRSxLQUFiO0FBSGtCO0FBT25COzs7OzRCQUVRQyxLLEVBQU87QUFDZEMsY0FBUUMsR0FBUixDQUFZLGFBQVosRUFBMkJGLEtBQTNCOztBQUVBLFVBQU1HLE9BQU8sSUFBYjs7QUFFQUMsWUFBTUMsR0FBTixDQUFVLFVBQVYsRUFDQ0MsSUFERCxDQUNNLFVBQVVDLFFBQVYsRUFBb0I7QUFDeEJKLGFBQUtLLFFBQUwsQ0FBYztBQUNaVixpQkFBT1MsU0FBU0U7QUFESixTQUFkO0FBR0QsT0FMRCxFQU1DQyxLQU5ELENBTU8sVUFBVUMsS0FBVixFQUFpQjtBQUN0QlYsZ0JBQVFDLEdBQVIsQ0FBWVMsS0FBWjtBQUNELE9BUkQ7QUFTRDs7QUFFRDtBQUNFOzs7OzZCQUVRO0FBQ1JWLGNBQVFDLEdBQVIsQ0FBWSxzQkFBWixFQUFtQyxLQUFLTCxLQUFMLENBQVdDLEtBQTlDO0FBQ0EsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxJQUFHLE1BQVI7QUFDRTtBQUFBO0FBQUEsY0FBUSxTQUFTLEtBQUtILE9BQXRCO0FBQUE7QUFBQTtBQURGLFNBRkY7QUFLRTtBQUFBO0FBQUE7QUFDRyxlQUFLRSxLQUFMLENBQVdDLEtBQVgsQ0FBaUJjLEdBQWpCLENBQXNCLFVBQUNDLElBQUQ7QUFBQSxtQkFDckI7QUFBQTtBQUFBO0FBQUlBLG1CQUFLQztBQUFULGFBRHFCO0FBQUEsV0FBdEI7QUFESDtBQUxGLE9BREY7QUFZQTs7OztFQTNDY0MsTUFBTUMsUzs7QUFnRHhCQyxPQUFPeEIsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMucmVxdWVzdCA9IHRoaXMucmVxdWVzdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VyczogW10sXG4gICAgICByZWNpcGVzOiBudWxsXG4gICAgfTtcbiAgfVxuXG4gIHJlcXVlc3QgKGV2ZW50KSB7XG4gICAgY29uc29sZS5sb2coJ2NsaWNrIGV2ZW50JywgZXZlbnQpXG5cbiAgICBjb25zdCB0aGF0ID0gdGhpcztcblxuICAgIGF4aW9zLmdldCgnL3JlY2lwZXMnKVxuICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgdGhhdC5zZXRTdGF0ZSh7XG4gICAgICAgIHVzZXJzOiByZXNwb25zZS5kYXRhXG4gICAgICB9KVxuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gY29tcG9uZW50IGRpZCBtb3VudCAtIGxpZmVjeWNsZSBob29rXG4gICAgLy8gZmV0Y2ggdGhpcyBzZW5kcyBhIG5ldyBnZXQgcmVxdWVzdFxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgaXMgZnJvbSByZW5kZXIgJyx0aGlzLnN0YXRlLnVzZXJzKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UmVjaXBlcyE8L2gxPlxuICAgICAgICA8ZGl2IGlkPVwiZm9ybVwiPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5yZXF1ZXN0fT5HZXQgUmVjaXBlcyE8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge3RoaXMuc3RhdGUudXNlcnMubWFwICgodXNlcikgPT5cbiAgICAgICAgICAgIDxwPnt1c2VyLnVzZXJuYW1lfTwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICl9XG59XG5cblxuXG53aW5kb3cuQXBwID0gQXBwO1xuIl19