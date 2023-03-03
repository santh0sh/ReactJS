About Context API:

Passing data through props over and over can cause problems for application. Sometimes you might pass more props than you need or even forget to pass props that you do need, rename props through the components without noticing, etc. If you’re passing data through props from the parent component to a fourth- or fifth-level component, you’re not reusing and writing maintainable code, and this might prejudice your application in the future.

This is what we call “prop-drilling.” This can frustrate and slow down your development in the mid- to long-term—passing props over and over again to your components will cause future problems in your application.
That’s one of the main problems that Context API came to solve for us.

Context API
The Context API can be used to share data with multiple components, without having to pass data through props manually. For example, some use cases the Context API is ideal for: theming, user language, authentication, etc

The useContext hook allows us to connect and consume a context. The useContext hook receives a single argument, which is the context that you want to have access to.

Usage: 
•	global state
•	theme
•	application configuration
•	authenticated user name
•	user settings
•	preferred language
•	a collection of services
