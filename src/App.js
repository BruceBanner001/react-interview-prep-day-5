import './App.css';

function App() {
  return (
    <>
      <h1>1.High Order Component in react js ?</h1>
      <p>A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.<br /> We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.</p>
      <h1>2.Do you know about SEO ? Is it true that react js supports SEO support</h1>
      <ol>
        <li>Search engine optimisation (SEO) is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.</li>
        <li> SEO targets unpaid traffic (known as “natural” or “organic” results) rather than direct traffic or paid traffic.</li>
        <li>React helps build a very user-friendly UI that is also valuable by SEO, so you definitely shouldn't avoid it while creating a user interface for your app/website.</li>
      </ol>
      <h1>3.clean up in useEffect</h1>
      <p>clean up function: this function gets executed when the component is unmounted from the screen. This is mostly used for memory leaks.</p>
      
      <h1>4.What is the use of useCallback and useMemo?</h1>
      <h2> use of useCallback :-</h2>
      <p>useCallback will return a memoized version of the callback that only changes if one of the dependencies has changed.<br /> This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.</p>
      <h2> use of useMemo :-</h2>
      <p>React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render.<br /> You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
      <h1>5.Why do we need keys in react list?</h1>
      <p>The main purpose of keys is to help React differentiate and distinguish elements from each other, increasing its performance when diffing between the virtual and real DOM. To use keys, simply add the prop inside an element such as Unique IDs are the best value to assign to keys. (or) "Key" prop is used to look pretty, and there is no benefit whatsoever. "Key" prop is a way for React to identify a newly added item in a list and compare it during the "diffing" algorithm. It is one of the attributes in HTML. It is NOT commonly used in an array.</p>
      <h1>6.Do you know about redux?</h1>
      <ul>
        <li>Redux is a pattern and library for managing and updating application state, using events called "actions".</li>
        <li>It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.</li>
        <li>Here is a small example of react and Redux application. </li>
        <li>You can also try developing small apps. Sample code for increase or decrease counter is given below − This is the root file which is responsible for the creation of store and rendering our react app component. /src/index.</li>
      </ul>
    </>
  );
}

export default App;
