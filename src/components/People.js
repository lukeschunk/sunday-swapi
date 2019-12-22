import * as React from 'react';
import ListData from 'Components/shared/ListData';

const URL = 'https://swapi.co/api/people/';

class People extends React.Component {
  render() {
    const styles = this.styles();

    return (
      <div style={styles.container}>
        <ListData url={URL} title="People" back={this.props.back} />
      </div>
    );
  }

  styles() {
    return {
      container: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '0px 100px',
      },
    };
  }
}

export default People;
