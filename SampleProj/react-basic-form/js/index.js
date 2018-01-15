'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicForm = function (_React$Component) {
  _inherits(BasicForm, _React$Component);

  function BasicForm(props) {
    _classCallCheck(this, BasicForm);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      username: 'jasonmalfatto@moduscreate.com',
      password: '',
      passwordConfirm: ''
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  BasicForm.prototype.handleChange = function handleChange(e) {
    var _setState;

    e.target.classList.add('active');

    this.setState((_setState = {}, _setState[e.target.name] = e.target.value, _setState));

    this.showInputError(e.target.name);
  };

  BasicForm.prototype.handleSubmit = function handleSubmit(e) {
    e.preventDefault();

    console.log('component state', JSON.stringify(this.state));

    if (!this.showFormErrors()) {
      console.log('form is invalid: do not submit');
    } else {
      console.log('form is valid: submit');
    }
  };

  BasicForm.prototype.showFormErrors = function showFormErrors() {
    var _this2 = this;

    var inputs = document.querySelectorAll('input');
    var isFormValid = true;

    inputs.forEach(function (input) {
      input.classList.add('active');

      var isInputValid = _this2.showInputError(input.name);

      if (!isInputValid) {
        isFormValid = false;
      }
    });

    return isFormValid;
  };

  BasicForm.prototype.showInputError = function showInputError(refName) {
    var validity = this.refs[refName].validity;
    var label = document.getElementById(refName + 'Label').textContent;
    var error = document.getElementById(refName + 'Error');
    var isPassword = refName.indexOf('password') !== -1;
    var isPasswordConfirm = refName === 'passwordConfirm';

    if (isPasswordConfirm) {
      if (this.refs.password.value !== this.refs.passwordConfirm.value) {
        this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
      } else {
        this.refs.passwordConfirm.setCustomValidity('');
      }
    }

    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = label + ' is a required field';
      } else if (validity.typeMismatch) {
        error.textContent = label + ' should be a valid email address';
      } else if (isPassword && validity.patternMismatch) {
        error.textContent = label + ' should be longer than 4 chars';
      } else if (isPasswordConfirm && validity.customError) {
        error.textContent = 'Passwords do not match';
      }
      return false;
    }

    error.textContent = '';
    return true;
  };

  BasicForm.prototype.render = function render() {
    return React.createElement(
      'form',
      { novalidate: true },
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'label',
          { id: 'usernameLabel' },
          'Username'
        ),
        React.createElement('input', { className: 'form-control',
          type: 'email',
          name: 'username',
          ref: 'username',
          value: this.state.username,
          onChange: this.handleChange,
          required: true }),
        React.createElement('div', { className: 'error', id: 'usernameError' })
      ),
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'label',
          { id: 'passwordLabel' },
          'Password'
        ),
        React.createElement('input', { className: 'form-control',
          type: 'password',
          name: 'password',
          ref: 'password',
          value: this.state.password,
          onChange: this.handleChange,
          pattern: '.{5,}',
          required: true }),
        React.createElement('div', { className: 'error', id: 'passwordError' })
      ),
      React.createElement(
        'div',
        { className: 'form-group' },
        React.createElement(
          'label',
          { id: 'passwordConfirmLabel' },
          'Confirm Password'
        ),
        React.createElement('input', { className: 'form-control',
          type: 'password',
          name: 'passwordConfirm',
          ref: 'passwordConfirm',
          value: this.state.passwordConfirm,
          onChange: this.handleChange,
          required: true }),
        React.createElement('div', { className: 'error', id: 'passwordConfirmError' })
      ),
      React.createElement(
        'button',
        { className: 'btn btn-primary',
          onClick: this.handleSubmit },
        'submit'
      )
    );
  };

  return BasicForm;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  App.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(BasicForm, null),
      React.createElement(
        'p',
        { className: 'note' },
        'Note: see console for submit event logging'
      )
    );
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));