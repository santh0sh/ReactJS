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
