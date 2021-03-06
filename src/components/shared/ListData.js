import * as React from 'react';
import Card from './Card';
import {list} from 'Lib/transport';

class ListData extends React.Component {
  state = {
    data: [],
    page: 1,
  };

  componentDidMount() {
    this.fetchData(this.props.url, this.state.page);
  }

  fetchData = (url, page) => {
    list(url, page).then(data => this.setState({data: data.results, page}));
  };

  nextPage = () => {
    this.fetchData(this.props.url, this.state.page + 1);
  };

  prevPage = () => {
    this.fetchData(this.props.url, this.state.page - 1);
  };

  render() {
    const styles = this.styles();

    return (
      <div style={styles.container}>
        {this.state.data.length ? (
          <>
            <button style={{width: '100px'}} onClick={this.props.back}>
              Back
            </button>
            <h1>{this.props.title}</h1>
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
              {this.state.data.map(p => (
                <Card
                  key={p.name}
                  //this component will only work if data returned from API has a "name" key
                  title={p.name}
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

export default ListData;
