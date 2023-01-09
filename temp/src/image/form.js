<div className="app">
  <div className="Search">
    <form onSubmit={submitHandler}>
      <input
        value={city}
        onChange={changeHandler}
        placeholder="Enter Location"
        type="text"
      ></input>
    </form>

    <div></div>
  </div>
  <div className="container">
    <div className="top">
      <div className="location">
        <p>warangal</p>
      </div>
      <div className="Temp">
        <h1>60*F</h1>
      </div>
      <div className="description">
        <p>clouds</p>
      </div>
    </div>
    <div className="bottom">
      <div className="feels">
        <p className="bold">65*F</p>
        <p>feels like</p>
      </div>
      <div className="humidity">
        <p className="bold">20%</p>
        <p>humidity</p>
      </div>
      <div className="wind">
        <p className="bold">12 MPH</p>
      </div>
    </div>
  </div>
</div>;
