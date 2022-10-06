import React from "react";
import ReactDOM from "react-dom/client";

function ExampleComponent() {
    return (
        <div>
            <h1>Our App</h1>
            <p>The sky is grey!</p>
            <p>I`ve been for a while</p>
        </div>
    )
}

const root = ReactDOM
    .createRoot(document.querySelector("#app"))
    .render(<ExampleComponent/>)