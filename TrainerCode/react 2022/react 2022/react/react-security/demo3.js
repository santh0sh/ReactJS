/*
Server-Side Rendering Vulnerability
Server-side rendering offers a lot of performance improvement over client-side-render. 
In client-side-render upon application load on the browser, all of the JavaScript will be initially
 loaded prior to any content. 

In server-side-render (SSR), the HTML (content) is rendered on the server side then 
delivered to the browser. For large applications, users can see a faster page load. 

Another benefit of server side rendering is the ease of incorporating Search Engine Optimization (SEO). 
Since each page can be rendered from the server, it can have unique meta-tags and titles. 
This is very challenging to do in a client-rendered application.

Now since most React applications utilize state, a server-rendered component 
may then also need to include initial state. To handle complex state-management we normally 
use Redux. In working with server-rendered applications, we also need to initialize state over
 on the server. 

 The danger of this is that `JSON.stringify` will not recognize dangerous data.

  For as long as it’s valid JSON, this method will turn it into string. If such data includes fields for information that malicious users/attackers can manipulate (such as username and password) they
  can inject their own JavaScript object that changes valid information.

  How to Fix This

The preceding image already includes a possible fix. It is to use Regular-Expressions to capture any unwanted formats. 

 

Another fix is to use the serialize-javascript package.
 */