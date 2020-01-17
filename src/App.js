import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class App extends Component {
  state = {
    date: new Date(),
    // dateRange: [],
    // maxDate: "",
    selectRang: false
  }

  onChange = date => this.setState({ date,
   maxDate: date })
 
  startSelct = () => this.setState({selectRang: !this.state.selectRang})
  // componentDidMount(){
  //   this.setState({
  //     date: this.state.date,
  //     maxDate: this.state.date
  //   })
  //   console.log(this.state.maxDate)
  // }
  


  // onClickDay = dateRange => this.setState({dateRange})
 
  // selectRange = dateRange => this.setState({dateRange})
  render(props) {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          // onClickDay={this.onClickDay}
          selectRange={this.state.selectRang}
          // maxDate={this.maxDate}
        />
        {/* {console.log(this.state.date)} */}
        {/* {console.log(this.state.dateRange)} */}
        {console.log(this.state.date)}
        <button onClick={this.startSelct}></button>
      </div>
    );
  }
}

export default App