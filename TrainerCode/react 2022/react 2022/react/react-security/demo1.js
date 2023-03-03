/*
Using dangerouslySetInnerHTML
The DOM API allows us to set the `innerHTML` for an element. This, however, is a dangerous practice
 as it is a wide-open gate for XSS attack. React has provided a bit of safeguard with regards to this with the 
 `dangerouslySetInnerHTML` prop. 

The problem is that it didn’t remove the possibility of an insecure piece of code being written. For instance:

This displays the following empty input box and text (`h1`) with the value ‘Hello World’ in bold letters:
 
*/
const DangerousComponent = () => {
    const [text, setText] = useState(`<b>Hello World!</b>`);
    
    const handleChange = (e) => setText(e.target.value);
    
    const danger = (input) => {
      return {__html: input};
    };
    
    return (
      <div>
          <input
            onChange={handleChange}
            type='text'
          />
          <h1
            dangerouslySetInnerHTML={danger(text)}
          >
          </h1>
      </div>
    );
  };
/*
Now the vulnerability this exposes and can be taken advantage of as if an attacker decides to put a script tag in the input box:



The text “<script>alert(0)</script>” will be parsed by the component into an HTML code that it will attach to the DOM. It will then cause an alert message “0” to appear on screen once the user presses Enter.

 

Now this particular script isn’t at all dangerous (but irritating). But what if the malicious user inserts a script that can capture an authorization cookie from the user’s machine. The attacker can then use this authorization cookie to steal other users’ information and data.

 

How to Fix This

The most obvious fix would be to avoid using dangerouslySetInnerHTML prop on components that take in user input.

 

Another fix is to use libraries such as DOMPurify in order to sanitize user input and remove any malicious texts.

Using DOMPurify:

*/
import dompurify from 'dompurify';

const SafeComponent = () => {
  const [text, setText] = useState(`<b>Hello World!</b>`);
  
  const sanitizer = dompurify.sanitize;
  
  const handleChange = (e) => setText(e.target.value);
  
  const safeText = (input) => {
    return {__html: sanitizer(input)};
  };
  
  return (
   <div>
   	<input
      onChange={handleChange}
      type='text'
    />
    <h1
	 dangerouslySetInnerHTML={safetext(text)}
	>    
    </h1>
   </div> 
  )
};
/*
What this will do is that if the user types in the same dangerous 
script as the one prior to the fix, DomPurify will strip it out of the resulting DOM.
*/