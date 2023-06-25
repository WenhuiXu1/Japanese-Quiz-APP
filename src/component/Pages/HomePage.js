import React, { useState } from 'react';
import DefaultLayout from '../Layout/DefaultLayout'

const HomePage = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  const backgroundPictures = [
    'url("https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1192&q=80")',
    'url("https://images.unsplash.com/photo-1601823984263-b87b59798b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80")',
    'url("https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
  ];

  const changeBackground = () => {
    setBackgroundIndex(index => (index + 1) % backgroundPictures.length);
  };

  const currentBackground = {
    backgroundImage: backgroundPictures[backgroundIndex],
  };

  return (
	<DefaultLayout>
    <div className="home-page">
      <h1>Welcome to Quizkana, your Japanese learning pal.</h1>
	  <h4>Start learning and playing now. </h4>
      {/* <button onClick={changeBackground}>Change Background</button> */}
    </div>
	</DefaultLayout>
  );
};

export default HomePage;
