import * as React from "react";

class Planets extends React.Component {
  componentDidMount() {

  }

  render () {
    const styles = this.styles()
    console.log('this is styles', styles)
    return (
      <div style={styles.container}> This is Planets </div>
    )

  }

  styles () {
    return {
      container: {
        display: "flex",
        justifyContent: "center",

      }
    }
  } 
  
}

export default Planets;
