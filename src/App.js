import "./styles.css";
import { useId } from "react";

export default function moaaz12() {
  const passwordHintId = useId();
  return (
    <div className="App">
      <p>
        <div className="moaw">sign in</div>
      </p>
      <div className="App5">
        name : <input />
        <p className="App1">
          email : <input />
          <p className="App2">
            <>
              <label>
                password :
                <input type="password" aria-describedby={passwordHintId} />
              </label>
              <p id={passwordHintId}></p>
            </>
          </p>
        </p>
        <p className="App3">
          <>
            <label>
              confirm password :
              <input type="password" aria-describedby={passwordHintId} />
            </label>
            <p id={passwordHintId}></p>
          </>
        </p>
      </div>
      <p>
        <button className="App4">sign in</button>
      </p>
    </div>
  );
}
