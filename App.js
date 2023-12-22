import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//   },
//   "Namaste Himanshu!"
// );

const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  [
    React.createElement(
      "div",
      {
        id: "child",
      },
      [
        React.createElement(
          "h1",
          {
            id: "title",
          },
          "This is namaste react"
        ),
        React.createElement(
          "h1",
          {
            id: "title",
          },
          "Heading 4"
        ),
      ]
    ),
    React.createElement(
      "div",
      {
        id: "child",
      },
      [
        React.createElement(
          "h1",
          {
            id: "title",
          },
          "Heading 1"
        ),
        React.createElement(
          "h1",
          {
            id: "title",
          },
          "Heading 2"
        ),
      ]
    ),
  ]
);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
