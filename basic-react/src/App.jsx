import "./App.css";
import MyInput, { MyInput2 } from "./MyInput";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <MyInput />
      <MyInput2 />
      <MyFirstComp />
      <MyFirstComponent />
      <MyFirstComponent text="Hello, React" fontSize="4" counter={50 + 150}>
        Children
      </MyFirstComponent>
      <MyFirstComp>Will not show</MyFirstComp>
    </>
  );
}

export default App;

function MyFirstComp() {
  return (
    <>
      <article>
        <h1>My First Component</h1>
        <ol>
          <li>Components: UI Building Blocks</li>
          <li>Defining a Component</li>
          <li>Using a Component</li>
        </ol>
      </article>
      <div></div>
    </>
  );
}

/**
 * Component
 * Props
 * State
 * Styling
 * routing
 * Hooks
 */

//number string boolean array
const MyFirstComponent = () => {
  return <div>My First Component</div>;
};
