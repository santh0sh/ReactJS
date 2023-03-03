//ES6 - Harmony

//ES6 - Cleaner iterator syntax

// es6 set style iterator syntax
var posts = [{
  url: '/first-post',
  title: 'My First Post'},
  {
  url: '/second-post',
  title: 'My second Post'}
  ]

for (let post of posts) {
    console.log(post.url);
}

//ES6 - Destructuring assignment
//Destructuring assignment allows you to pull out attributes 
//of an object and assign them to scope level variables in one line.

var post = {
  url: '/first-post',
  title: 'My First Post'
}
// Similar to CoffeeScript, but important to use the var
var {url,title} = post;

console.log('url', url, 'post', post);
// => 'url', '/first-post', 'post', { url: '/first-post',title: 'My First Post' }

//Arrow functions
// single line arrow functions do not require braces or the "return" keyword
app.get('posts', (req, res) => res.render('/posts.html') );

// multi line arrow functions require braces
app.get('posts', (req, res) => {
    console.log('in post route');
    res.render('/posts.html');
  }
);

let polyglot = {
    name : "Murthy",
    languages : ["English", "French", "Italian", "German", "Polish"],
    introduce : function () {
        this.languages.forEach((language) => {
            console.log("My name is " + this.name + ", and I speak " + language + ".");
        });
    }
}



// ES6 Module pattern
// node (CommonJS) style module export pattern
module.exports = {
    initialize: function() { ... },
    renderPost: function(postName) { ... }
}
// node style module import pattern
var blog = require('./blog');
blog.initialize();
blog.display('hello-world');

// es6 style module export pattern
export function initialize() { ... }
export function renderPost(postName) { ... }
// es6 style function import pattern
import {initialize,renderPost} from './blog'
initialize();
renderPost('hello-world');

// es6 style namespaced import pattern
import * as blog from './blog';
blog.initialize();
blog.renderPost('hello-world');
________________________________________


//es6-module-loader package
To get es6 working in nodejs, we can install a package 
 > npm i es6-module-loader -S 
 //and wrap our index.js file in a 'bootstrap' file that imports 
 //our app using the es6 module pattern. 
 //From there all code inside the import supports es6 features.

// bootstrap.js file
var System = require('es6-module-loader').System;

System.import('./index').then(function(index) {
    index.run(__dirname);
}).catch(function(err){
    console.log('err', err);
});
/*
Note you should tack on the catch() promise function so you can see stack errors.
Once we setup our bootstrap.js file, we no longer start our app with 
> node index.js but instead use:  >node boostrap.js
*/
