import React from "react";
import Form from "./Form";

function App() {
  return (
    <div className="container pt-5">
      <div className="col-md-8 col-xl-5 mx-auto">
        <h4 className="text-center mb-4">
          Chasis Sparepart Identification System
        </h4>
        <div className="card border-0 shadow">
          <div className="card-body">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
