import React, {useState} from 'react';
import People from 'Components/People';
import Planets from 'Components/Planets';

const styles = {
  stars: {
    background:
      '#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center',
    zIndex: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    display: 'block',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'sans-serif'
  },
  button: {
    border: 'solid 2px #fff', 
    background: 'transparent',
    color: '#fff',
    cursor: 'pointer',
    padding: '20px',
    margin: '0px 20px 100px',
    fontSize: '18px',
    borderRadius: '8px'
  }
};

const App = ({title}) => {
  const [shouldShowPeople, setShouldShowPeople] = useState(false);
  const [shouldShowPlanets, setShouldShowPlanets] = useState(false);
  const resetRouteState = () => {
    setShouldShowPeople(false);
    setShouldShowPlanets(false);
  };

  return (
    <div style={styles.stars}>
      <div style={styles.container}>
      {!shouldShowPeople && !shouldShowPlanets && (
        <>
          <button style={styles.button} onClick={() => setShouldShowPeople(true)}>People</button>
          <button style={styles.button} onClick={() => setShouldShowPlanets(true)}>Planets</button>
        </>
      )}
      {shouldShowPeople && <People back={resetRouteState} />}
      {shouldShowPlanets && <Planets back={resetRouteState} />}
    </div>
    </div>
  );
};

export default App;