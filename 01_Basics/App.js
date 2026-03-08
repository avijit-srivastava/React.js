// React comes with the philosophy of making any changes in DOM via Javascript only.

const heading = React.createElement("h1", {id:"heading"}, "Namaste React From React!");
// React element is at the end is nothing but Javascript Object.
const root = ReactDOM.createRoot(document.getElementById("root"));

// ReactElement(Object) -> HTMLAllCollection(Browser Understands);
// root.render(heading);

/* A new term:
props: attributes + Children; */


// Creating Nested Elements:

/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div> */


const parent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id:"child"}, 
        React.createElement("h1", {}, "I'm h1 tag")
    )
);
/* console.log(parent);
root.render(parent);  */


// How to create siblings in React:

/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */

const siblingParent = React.createElement("div", {id: "parent"}, 
    React.createElement("div", {id:"child"}, 
        [ React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]
    )
);

// root.render(siblingParent);



// More Complicated Structure:

/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm h2 tag</h2>
    </div>
</div> */



const complicatedParent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id:"child-1"}, 
        [ React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")]),
    React.createElement("div", {id:"child-2"}, 
        [ React.createElement("h1", {}, "I'm h1 tag"), React.createElement("h2", {}, "I'm h2 tag")])
]);

root.render(complicatedParent);


/* Now, this is very complex and untidy to write. 
What's the solution ? -> JSX.  */

/* What JSX Is ?
JSX = JavaScript XML
It is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript.  */
