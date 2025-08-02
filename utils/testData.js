/*
**  FIS AI Code Assistant Policy Compliance
**  This file has been developed fully with the assistance of GitHub Copilot
**  AI coding assistance started: 08/01/2025
**  Developer notes: 
*/ 


class TestData {
  static users = {
    standard: { username: 'standard_user', password: 'secret_sauce' },
    locked: { username: 'locked_out_user', password: 'secret_sauce' },
    problem: { username: 'problem_user', password: 'secret_sauce' }
  };

  static products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];

  static checkoutInfo = {
    firstName: 'John',
    lastName: 'Doe',
    zip: '12345'
  };

  static expectedTotal = '$32.39';
}

module.exports = { TestData };
