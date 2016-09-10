'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('generator-polymer-init-poly-me') + ' generator!'
    ));

    this.log("poly-me helps you easily generate a static site for yourself or your company.")

    var prompts = [{
      type: 'input',
      name: 'yourName',
      message: 'What is your name? (This will appear as the title)',
      default: "John Smith"
    },{
      type: 'input',
      name: 'yourPosition',
      message: 'What is your position?',
      default: "Awesome"
    },{
      type: 'input',
      name: 'yourLocation',
      message: 'What is your location?',
      default: "San Fransisco, CA"
    },{
      type: 'input',
      name: 'yourTwitter',
      message: 'What is your Twitter username?'
    },{
      type: 'input',
      name: 'yourGitHub',
      message: 'What is your GitHub username?'
    },{
      type: 'input',
      name: 'yourLinkedIn',
      message: 'What is your LinkedIn username?'
    },{
      type: 'input',
      name: 'yourEmail',
      message: 'What is your email address?'
    },{
      type: 'input',
      name: 'yourPrimaryColor',
      message: 'What is the primary color you want to use? (Enter a hex code or color name)',
      default: "#B2BABF"
    }];


    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath(),
      this.destinationPath(),
      this.props
    );

    this.fs.copy(
      this.templatePath(".*"),
      this.destinationPath()
    )
  },

  install: function () {
    this.bowerInstall();
  }
});
