{/* <div id="parent">
    <div id="child">
        <h1>Hello from child</h1>
        <h2>Hello from child2</h2>
    </div>
</div> */}

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      [
        React.createElement("h1", {}, "hello from child"),
        React.createElement("h2", {}, "hello from child2")
      ]
    )
  );
  
  ReactDOM.render(parent, document.getElementById("root"));
  



const heading = React.createElement("h1",{},"Hello world from React");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);