import * as React from 'react';
import Card from 'Components/shared/Card';

const URL = 'https://swapi.co/api/people/';

class People extends React.Component {
  state = {
    people: [],
    page: 1,
  };

  componentDidMount() {
    this.fetchData(URL, this.state.page);
  }

  fetchData = (url, page) => {
    fetch(url + '?page=' + page)
      .then(response => response.json())
      .then(people => this.setState({people: people.results, page}));
  };

  nextPage = () => {
    this.fetchData(URL, this.state.page + 1);
  };

  prevPage = () => {
    this.fetchData(URL, this.state.page - 1);
  };

  render() {
    const styles = this.styles();

    return (
      <div style={styles.container}>
        {this.state.people.length ? (
          <>
            <button style={{width: '100px'}} onClick={this.props.back}>
              Back
            </button>
            <h1>People</h1>
            <div style={styles.buttonContainer}>
              <button
                disabled={this.state.page <= 1}
                style={styles.button}
                onClick={this.prevPage}>
                Previous Page
              </button>
              <button
                style={styles.button}
                onClick={this.nextPage}
                //add disabled prop for max page count
              >
                Next Page
              </button>
            </div>
            <div style={styles.cardContainer}>
              {this.state.people.map(p => (
                <Card
                  title={p.name}
                  items={[<div style={styles.cardItemContainer} />]}
                />
              ))}
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
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
      cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        margin: '0 auto',
      },
      cardItemContainer: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
      },
      button: {
        width: '150px',
        margin: '20px',
      },
    };
  }
}

export default People;
