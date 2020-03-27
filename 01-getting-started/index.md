``` html
<div id="app"></div>
```

``` css
.person {
    display: inline-block;
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    width: 200px;
    padding: 20px;
}
```

``` js
function Person({name, age}) {
    return (
      <div className="person">
        <h1>{name}</h1>
        <p>Your Age: {age}</p>
      </div>
    );
  }
  
  const app = (
    <div>
      <Person name="Darrius" age="25" />
      <Person name="Keionne" age="25" />
    </div>
  )
  
  ReactDOM.render(app, document.querySelector('#app'));
  
```