import React from 'react'
import './App.css';
import { ApolloProvider } from "@apollo/client";
import { client } from "./client";

function App() {
  return (
    <ApolloProvider client={client}>
     <div style={{ padding: "5px" }}>
       <h3>My Todo Items</h3>
       <div>items to get loaded here</div>
     </div>
   </ApolloProvider>
  );
}

export default App;
