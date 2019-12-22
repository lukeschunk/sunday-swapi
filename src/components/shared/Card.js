import React, { useState } from 'react';

const styles = {
  container: {
    padding: '10px',
    backgroundColor: 'white',
    color: 'black',
    marginRight: '20px',
    marginBottom: '20px',
  },
  title: {
    marginLeft: '10px',
    marginRight: '10px',
  },
  content: {
    marginLeft: '10px',
    marginRight: '10px',
  },
};

const Card = ({title, items}) => {
  const [shouldShowPeople, setShouldShowPeople] = useState(false);
  const [shouldShowPlanets, setShouldShowPlanets] = useState(false);

  return (
    <div style={styles.container}>
      <h2>{title}</h2>
      <hr />
      <div style={styles.content}>
        {/*TODO: implement items handling so cards can display items */}
      </div>
    </div>
  );
};

export default Card;
