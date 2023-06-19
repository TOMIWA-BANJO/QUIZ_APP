function JoinScreen({start}) {
  return (
      <div className="join-screen">
        <h2>Join Quiz<sup>1.0</sup></h2>
        <p>Welcome to the Quiz, of the season</p>
        <button onClick={start}>Start</button>
      </div>
  );
}

export default JoinScreen;
