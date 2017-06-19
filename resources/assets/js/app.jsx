
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

const YT_API_KEY = '';

import React from 'react';
import ReactDOM from 'react-dom';

//React react-router
import {
  BrowserRouter as Router, Route, Link, Switch, Redirect, withRouter
} from 'react-router-dom';

import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Header from './components/Header';

function getUserInfo(username){
  return window.axios.get('https://api.github.com/users/' + username);
}

function getRepos(username){
  return window.axios.get('https://api.github.com/users/' + username + '/repos');
}

function getPosts(blogUrl){
  console.log('Get Posts Function Passed');
  return window.axios.get(blogUrl);
}



var helpers = {
  getGithubInfo: function(username){
    return window.axios.all([getRepos(username), getUserInfo(username)])
      .then(function(arr){
        return {
          repos: arr[0].data,
          bio: arr[1].data
        }
      })
  }
}

/*var username = 'boylecreations';
var promiseObj = getRepos(username);
promiseObj.then(function(data){
 console.log(data);
});


var blogUrl = 'http://boylecreations.com';
var blogPromise = getPosts(blogUrl);
blogPromise.then(function(response){
  console.log(response);
});

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

var xhr = createCORSRequest('GET', url);
if (!xhr) {
  throw new Error('CORS not supported');
}

var url = 'http://boylecreations.com/wp-json/wp/v2/posts';
var xhr = createCORSRequest('GET', url);
xhr.send();*/

var url = 'http://boylecreations.com/wp-json/wp/v2/posts';

var axiosConfig = {
  headers: { 'Access-Control-Allow-Headers': 'X-CSRF-TOKEN'}
}

window.axios.get(url, axiosConfig).then(function(resposne) {
  console.log('yay');
}).catch(function(response){
  console.log('fail');
});

/*var blogPromise = getPosts(url);
blogPromise.then(function(response){
  console.log("YAY");
  console.log(response);
}).catch(function(response){
  console.log("LAME");
  console.log(response);
});*/

const Home = () => (
  <div>
    <h1>This is Home</h1>
  </div>
)
const About = () => (
  <div>
    <h1>This is About</h1>
  </div>
)
const Contact = () => (
  <div>
    <h1>This is Contact</h1>
  </div>
)
const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

const App = () => (
  <div>
    <Layout>

    </Layout>

  </div>
)
//<Section header="{section.header}"
//         text="{section.text}"
  //       link="{section.link}"
  //       image="{section.image.url}">
//</Section>
const sections = [];

function Section(props) {
  return (
    <div className="section">
      <h2>{props.text}</h2>
      <img src="{props.image-url.url}" />
    </div>
  )
}

const section = {
  header: 'I am the Header',
  text: 'I am the paragraph text',
  link: 'http://boylecreations.com',
  image: {
    name: 'The Main image',
    url: 'http://placekitten.com/g/64/64'
  }
};

const appRoot = document.getElementById('app');
ReactDOM.render((
  <Router>
    <App />
  </Router>
), appRoot)






//ReactDOM.render(React.createElement(greeting), app);

/**
 * Create components
 */



//window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/*
Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});*/
