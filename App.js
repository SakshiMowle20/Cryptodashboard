import React from 'react';
import Sidebar from './componet/sidebar';


function App() {
  return (
    <div className="absolute inset-y-5 right-0 w-100 left-50 ">
    <h1 className="text-3xl font-bold text-center pr-2 ">
   <div className='h-100 w-100 bg-gray-100  border-4'>
   <Sidebar/>
   </div>
 
    </h1>
  </div>
  );
}

export default App;
