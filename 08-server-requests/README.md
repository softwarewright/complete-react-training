# React Server Request

Fake API for React App - https://jsonplaceholder.typicode.com/

- Axios to make requests
- componentDidMount is a good place for initial requests
- componentDidUpdate can request based on props changes, beware of infinite loops when updating the state
- Axios interceptors are useful for global error handling, add it to the index.js file. In addition logging errors off to your backend
- Take advantage of axios default settings to set baseUrls and other settings for the axios instance.
- Create multiple axios instances if you need multiple default settings