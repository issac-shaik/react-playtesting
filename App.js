const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "This is an H1 tag"), 
        React.createElement("h2", {}, "This is an H2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "This is an H1 tag2"), 
        React.createElement("h2", {}, "This is an H2 tag2")])
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
