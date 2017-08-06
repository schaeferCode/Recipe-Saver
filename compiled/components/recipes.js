"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Users = function (_React$Component) {
  _inherits(Users, _React$Component);

  function Users(props) {
    _classCallCheck(this, Users);

    var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this, props));

    console.log(_this.props);
    return _this;
  }

  // component did mount - lifecycle hook
  // fetch this sends a new get request

  _createClass(Users, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Changed!"
        ),
        React.createElement(
          "div",
          { id: "form" },
          React.createElement(
            "form",
            { id: "recipe", action: "/recipes", method: "get" },
            React.createElement("input", { type: "submit", value: "Get Recipes!" })
          )
        ),
        React.createElement("div", null)
      );
    }
  }]);

  return Users;
}(React.Component);

window.Recipes = Recipes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL3JlY2lwZXMuanMiXSwibmFtZXMiOlsiVXNlcnMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsIlJlY2lwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSzs7O0FBQ0osaUJBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQSw4R0FDWkEsS0FEWTs7QUFFbEJDLFlBQVFDLEdBQVIsQ0FBWSxNQUFLRixLQUFqQjtBQUZrQjtBQUduQjs7QUFFRDtBQUNFOzs7OzZCQUVRO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxJQUFHLE1BQVI7QUFDRTtBQUFBO0FBQUEsY0FBTSxJQUFHLFFBQVQsRUFBa0IsUUFBTyxVQUF6QixFQUFvQyxRQUFPLEtBQTNDO0FBQ0UsMkNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sY0FBM0I7QUFERjtBQURGLFNBRkY7QUFPRTtBQVBGLE9BREY7QUFXQTs7OztFQXJCZ0JHLE1BQU1DLFM7O0FBd0IxQkMsT0FBT0MsT0FBUCxHQUFpQkEsT0FBakIiLCJmaWxlIjoicmVjaXBlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFVzZXJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuICB9XG5cbiAgLy8gY29tcG9uZW50IGRpZCBtb3VudCAtIGxpZmVjeWNsZSBob29rXG4gICAgLy8gZmV0Y2ggdGhpcyBzZW5kcyBhIG5ldyBnZXQgcmVxdWVzdFxuXG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMT5DaGFuZ2VkITwvaDE+XG4gICAgICAgIDxkaXYgaWQ9XCJmb3JtXCI+XG4gICAgICAgICAgPGZvcm0gaWQ9XCJyZWNpcGVcIiBhY3Rpb249XCIvcmVjaXBlc1wiIG1ldGhvZD1cImdldFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkdldCBSZWNpcGVzIVwiIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgKX1cbn1cblxud2luZG93LlJlY2lwZXMgPSBSZWNpcGVzO1xuIl19