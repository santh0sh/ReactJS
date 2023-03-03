
/*
URI schemes
Similar to the previous vulnerability, an anchor tag (`<a>`) can allow malicious code to enter
 into the application. 
Let’s take a look at how this can happen with the following snippet:
*/
const VulnerableComponent = () => {
	const [links, setLinks] = useState([]);
  
  	const addLink = (e) => setLinks([...links, e.target.value]);
  
  	return (
    	<div>
      		<h1>Links</h1>
      		<input
      		  onKeyPress={addLink}
			  type='text'	
      		/>
                
            <ul>
              {
              	links.map(link => (
                	<li>
                      <a href={link}>{link}</a>  
                    </li>
                ))
              }    
            </ul>
      	</div>
    );
};
//This component will render a blank input box and initially an empty list of urls:
//The user can then input links into the box and the component will render each one. For example, typing “https://google.com”
// into the box will display the link below the text “Links”:

//This is dangerous because `<a>` tags can have `href` attributes that contain scripts prefixed 
//with `javascript: <any function name>()`. 
//To illustrate, suppose the user now inputs “javascript: alert(0)” into the input box:
//The exact text (now a link) appears below the first one. As it is, it’s harmless. 
//But if the user clicks on that link it will trigger the “alert” call.

//As with the previous vulnerability, this can allow a malicious script to enter the code. 
//How to Fix This
//A very simple way to ensure no malicious script will be accepted by the application
// is by whitelisting the kinds of input a user can make. 

//In the previous code snippet then, we make an adjustment to the `addLink` inner function:
const SafeComponent = () => {
	const [links, setLinks] = useState([]);
  
  	const addLink = (e) => {
      const bareUrl = e.target.value;
      
      const sanitized = new URL(bareUrl);
      
      if(sanitized.protocol !== 'https' || sanitized.protocol !== 'http'){
        return;
      }
      
      e.key === 'Enter' ? setLinks([...links, bareUrl]) : null;
    };
  
  	return (
    	<div>
      		<h1>Links</h1>
      		<input
      		  onKeyPress={addLink}
			  type='text'	
      		/>
                
            <ul>
              {
              	links.map(link => (
                	<li>
                      <a href={link}>{link}</a>  
                    </li>
                ))
              }    
            </ul>
      	</div>
    );
};
//Anything that doesn’t contain a protocol “http” or “https” will now terminate
// the function and won’t include that input into the list of links.