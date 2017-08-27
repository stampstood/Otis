import React, { Component } from 'react';
import Y from './Name'

class App extends Component {
  state = { age: 0 }
  addAge() {
    this.setState({
      age: this.state.age + 1
    })
  }
  render() {
    return (
      <div>
        {/* <Y title="GGGG" />
          <Y title="YYYY" />
          <Y title="HHHH" /> */}
        <Y title="hyuk" age={5}>
          {this.state.age}
        </Y>
        <button onClick={this.addAge}>click me</button>
      </div>


    )
  }

}
export default App

// การสร้าง StateFull 1 component 
// ต้องทำแบบนี้ทุกครั้งที่จะทำ component


//ตอน import สามารถเปลี่ยนเป็นชื่ออื่นได้ แต่ต้องตัวใหญ่ 
//(ex.ตรง Y tag <Y /> ชื่อต้องเหมือนกันด้วย)

//---------------------------------------------
