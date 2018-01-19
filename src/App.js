import React, { Component } from 'react';
import moment from 'moment';
import logo from './logo.svg';
import './App.css';
import List from './List';
import BasicRoute from './BasicRoute';
import RedirectRoute from './RedirectRoute';
import CustomRoute from './CustomRoute';

var list3={
  name: '',
  time: '',
  content: '',
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format("YYYY-MM-DD hh:mm:ss a"),
      //count: '，啦啦啦啦',
      name: '',
      time: '',
      content: '',
      status: false,
    };
  }
  componentDidMount(){
    this.timeSet = setInterval ( () => this.tick(), 1000 );
    //this.countSet = setInterval ( () => this.getCount(), 1000 );
  }
  componentWillUnmount(){
    clearInterval(this.timeSet);
    //clearInterval(this.countSet);
  }

  tick = () => 
    this.setState({
      date: moment().format("YYYY-MM-DD hh:mm:ss a"),
    });

  getCount = () => 
  this.setState(prevState => ({
    count: prevState.count + ',啦啦啦啦',
  }));

  handleSumit = (e) =>{
    e.preventDefault();
    list3 = {
      name: this.state.name,
      time: this.state.time,
      content: this.state.content,
    }
    this.setState({
      status: true,
    });
    console.log(this.state.name);
    console.log(this.state.time);
    console.log(this.state.content);
  }
  handleChange = (e) => {
    let formName = e.target.name;
    let value = e.target.value;
    this.setState({
      [formName]: value,
    });
  }
  
  render() {
    const list1 = {
      name: '小明',
      time: '2013-10-22',
      content: 'daaa接收的數據等哈子小姐找直到哈哈是對外我王琪琪 接收的哈薩克單號是的哈撒大聲地 加上大賽開打時看到哈施工隊卡仕達燒烤蛋糕卡!!!',
    };
    const list2 = {
      name: '小希希',
      time: '2012-10-11',
      content: '我就看看不说话', //+ this.state.count,
    };
    const numbers = [1,2,3];
    const doubles = numbers.map((i) => i*2);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className='time'>
          {this.state.date}
        </div>
        <div className='app-back'>
          <List list={list1} />
          <List list={list2} />
          {this.state.status&&<List list={list3} />}
        </div>
        <div>
          这是原数组中的数字：{numbers};
          这是double之后的数字：{doubles};
        </div>
        <form onSubmit={this.handleSumit} className='formCss'>
          <div className='formDiv'>
            <label>姓名:</label>
            <input onChange={this.handleChange} name='name' />
          </div>
          <div className='formDiv'>
            <label>时间:</label>
            <input type='date' onChange={this.handleChange} name='time' />
          </div>
          <div className='formDiv'>
            <label>内容:</label>
            <textarea onChange={this.handleChange} name='content'></textarea>
          </div>
          <div className='formDiv'>
            <input type='submit' value='提交' />
          </div>          
        </form>
        <div className='bordercss'>
          张轩林是傻子
        </div>
        <BasicRoute />
        <RedirectRoute />
        <CustomRoute />
      </div>
    );
  }
}

export default App;
