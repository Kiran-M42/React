/**
 * Create HTML Structure  Task ????
 *  Completed
 * 
 * <div id="parent">
 *   <div id="child1">
 *     <h1>Hello Sibling 1</h1> 
 *     <h2>Hello Sibling 2</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>Hello Sibling 1</h1>
 *     <h2>Hello Sibling 2</h2>
 *   </div>
 * </div>
 * 
 */



const heading = React.createElement(
    "h1", 
    {id:"heading" , className:'background'},  
    "Welcome to React World!"
    );


const header = React.createElement("div",{id:"parent"}, [
    React.createElement('div',{id:"child1"},[ // If two sibling  or id two child, we need to pass it in an array.
        React.createElement("h1",{},"Hello Sibling 1"),
        React.createElement("h2",{},"Hello Sibling 2"),
    ]),
    React.createElement('div',{id:"child2"},[
        React.createElement("h1",{},"Hello Sibling 1"),
        React.createElement("h2",{},"Hello Sibling 2")
    ]),
]);

console.log(heading); // ReactElement(Object) => HTML(Browser Understands)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(header); // only last render will excute the code!!!!