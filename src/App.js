import React, { useState, useEffect, useCallback } from "react";

import "./App.css";
import { MyMapComponent } from "./components/wrapper";

function App() {
  const [isMarkerShown, setIsMarkerShown] = useState(false);
  const delayedShowMarker = useCallback(() => {
    setTimeout(() => {
      setIsMarkerShown(true);
    }, 3000);
  }, [setIsMarkerShown]);
  const handleMarkerClick = useCallback(() => {
    setIsMarkerShown(false);
    delayedShowMarker();
  }, [setIsMarkerShown, delayedShowMarker]);
  useEffect(() => {
    delayedShowMarker();
  }, [delayedShowMarker]);

  return (
    <div className="App">
      <MyMapComponent
        isMarkerShown={isMarkerShown}
        onMarkerClick={handleMarkerClick}
      />
    </div>
  );
}

export default App;
