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
      list: [],
      flag: 0,
      num: 0,
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
    if(this.state.flag === 0) {
      this.setState((prevState) => ({
        list: prevState.list.concat([list3])
      }));
    } else {
      this.state.list.splice(this.state.num, 1, list3);
      this.setState({
        flag: 0,
      });
    }
  }
  handleChange = (e) => {
    let formName = e.target.name;
    let value = e.target.value;
    this.setState({
      [formName]: value,
    });
  }

  deleteList = (num) => {
    this.state.list.splice(num, 1);
  }

  edit = (num) => {
    const list = this.state.list;
    this.setState({
      name: list[num].name,
      time: list[num].time,
      content: list[num].content,
      flag: 1,
      num,
    })
  }
  
  render() {
    // const list1 = {
    //   name: '小明',
    //   time: '2013-10-22',
    //   content: 'daaa接收的數據等哈子小姐找直到哈哈是對外我王琪琪 接收的哈薩克單號是的哈撒大聲地 加上大賽開打時看到哈施工隊卡仕達燒烤蛋糕卡!!!',
    // };
    // const list2 = {
    //   name: '小希希',
    //   time: '2012-10-11',
    //   content: '我就看看不说话', //+ this.state.count,
    // };
    const { list, name, time, content } = this.state;
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
          {/* <List list={list1} />
          <List list={list2} />
          {this.state.status&&<List list={list3} />} */}
          {
            list.map((i, index) => (
              <List list={i} num={index} key={index.toString()} deleteList={this.deleteList} edit={this.edit} />
            ))
          }
        </div>
        <form onSubmit={this.handleSumit} className='formCss'>
          <div className='formDiv'>
            <label>姓名:</label>
            <input value={name} onChange={this.handleChange} name='name' />
          </div>
          <div className='formDiv'>
            <label>时间:</label>
            <input value={time} type='date' onChange={this.handleChange} name='time' />
          </div>
          <div className='formDiv'>
            <label>内容:</label>
            <textarea value={content} onChange={this.handleChange} name='content'></textarea>
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
