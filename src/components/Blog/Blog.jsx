import React from 'react';

const Blog = () => {
    return (
        <div className='my-container pt-14'>
          <div>
          <h2 className='font-bold pt-10 pb-3'>When should you use context API?</h2>
         <p>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
          </div>
       <div>
        <h2 className='font-bold pt-10 pb-3'>What is a custom hook?</h2>
        <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. Let's take a look at some major differences between a custom React JS hook and React JS components: A custom hook does not require a specific signature</p>
       </div>
       <div>
        <h2 className='font-bold pt-10 pb-3'>What is useRef?</h2>
        <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current </p>
       </div>
       <div>
        <h2 className='font-bold pt-10 pb-3'>What is useMemo?</h2>
        <p>useMemo() is a function that returns a memoized value of a passed in resource-intensive function. It is very useful in optimizing the performance of a React component by eliminating repeating heavy computations.</p>
       </div>
        </div>
    );
};

export default Blog;