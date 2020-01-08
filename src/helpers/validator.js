const regExp = {
    username: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/i,
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    password: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/,
  }
  
  const errorMess = {
    username: 'Username can contain only alphanumeric characters, hyphens, underscore and dot',
    email: 'Invalid email address',
    password: 'Password must contain at least 6 charackters, numbers',
  }
  
  class Validator {
    constructor() {
      this.errors = {}
    }
  
    isEmailValid = (str) => {
      if (!str) {
        this.errors.email = 'Required';
      } else if (!regExp.email.test(str)) {
        this.errors.email = errorMess.email;
      } else { 
        delete this.errors.email
      }
    };
  
    isPasswordValid = (str) => {
      if (!str) {
        this.errors.password = 'Required';
      } else if (!regExp.password.test(str)) {
        this.errors.password = errorMess.password;
      } else { 
        delete this.errors.password
      }
    } 
    isUsername = (str) => {
      if (!str) {
        this.errors.username = 'Required';
      } else if (!regExp.username.test(str)) {
        this.errors.username = errorMess.username;
      } else { 
        delete this.errors.username
      }
    }
  }
  
  export const validator = new Validator();
  