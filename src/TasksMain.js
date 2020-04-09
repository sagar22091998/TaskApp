import React, { Component } from 'react'
import './TasksMain.css'
import uuid from "uuid/v4"


class TasksMain extends Component {

  constructor(props){
    super(props);
    this.state = {
      tasks : [],
      currTask : {},
      newTask : "",
      newDesc : ""
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.resetUserInputs=this.resetUserInputs.bind(this);
    this.getTask=this.getTask.bind(this);
  }

  componentDidMount(){
    const taskList = [
      {
        id:uuid(),
        name:"Kanke",
        desc:"One of the biggest snake ever Ruturaj Ganesh Kanake Gaitonde",
        completed:false
      },
      {
        id:uuid(),
        name:"Moussa Sissoko",
        desc:"Oooh Moussa Sissoko!!! Oooh Moussa Sissoko!!! Oooh Moussa Sissoko!!! Oooh Moussa Sissoko!!!",
        completed:true
      },
      {
        id:uuid(),
        name:"Ruchir",
        desc:" :*( :*( :*( :*( :*( Tatti Khao Garam Garam:*( :*( :*( :*( :*( :*( :*( :*( :*(",
        completed:false
      },
      {
        id:uuid(),
        name:"Poonam",
        desc:"I love you Kanke <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3.",
        completed:false
      }
    ];
    this.setState({tasks:taskList , currTask:taskList[0]});
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.setState(st => {
      const newList = [...st.tasks ,{
        id:uuid(),
        name:this.state.newTask,
        desc:this.state.newTask
      }]
      return({tasks:newList });
    });
  }

  handleDelete(id){
    const newList = this.state.tasks.filter( task => task.id !== id)
    this.setState({tasks:newList,currTask:null});
    }
    
  getTask(id){
    const task = this.state.tasks.find( task => task.id === id)
    this.setState({currTask:task})
  }

  handleMark(id){
    const newList = this.state.tasks.map( task => {
    return (task.id !== id ? {...task} : {...task,completed:!task.completed} ) 
    })
    this.setState(st=>{
      return({tasks:newList , currTask: {...st.currTask ,completed:!st.currTask.completed}});
    });
  }
  
  resetUserInputs(){
    this.setState({
      newTask: '',
      newDesc: ''
    })
  }

  render() {
    return (
      <>
        <div className="NavMain">
          <ul>
            {/* <Link to=""></Link> Aise Links Daal Lena */ }
            <li>Edit Profile</li>
            <li>Delete From Account</li>
            <li>Logout From All Devices</li>
            <li>Logout</li>
          </ul>
        </div>
        <div className="Tasks">
          <div className="Tasks-List">
            <ul>
              <h4>Your Tasks</h4>
              {this.state.tasks.map(task=>{
                let taskCLass1 = "";
                let taskCLass2 = "";
                taskCLass1 = taskCLass1 + (task.completed &&" completed");
                taskCLass2 = taskCLass2 + ( this.state.currTask!==null &&this.state.currTask.id===task.id && " Selected");
                return(
                  <li className={`${taskCLass1} ${taskCLass2}`}
                    onClick={()=>this.getTask(task.id)}
                  >
                    {task.name}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="Tasks-Info">
              {this.state.currTask===null ? 
              <h4> Select Any Task </h4> :
              <div className="Tasks-Description">
                <h4>{this.state.currTask.name}</h4>
                <p className="Description-Text">{this.state.currTask.desc}</p>
                <div className="Desc-Buttons">
                  <button
                    className="Desc-Remove"
                    onClick={()=>this.handleDelete(this.state.currTask.id)}>
                    Delete this Task  
                      <i class="fas fa-times-circle"></i>
                  </button>
                  <button 
                    className="Desc-Done"
                    onClick={()=>this.handleMark(this.state.currTask.id)}>   
                    {this.state.currTask.completed?"Mark as Incomplete":"Mark as Complete"}
                    <i class="fas fa-check-square"></i>
                  </button>
                </div>
              </div>}
            <div className="Tasks-Add">
              <h4>Add New Task </h4>
              <form onSubmit={this.handleSubmit} className="Add-Main">
                <div className="Add-Content">
                  <input 
                    placeholder="Topic Of Task"
                    type="text" 
                    value={this.state.newTask}
                    name="newTask"
                    onChange={this.handleChange}
                    />
                  <textarea 
                    placeholder="Description of Task"
                    value={this.state.newDesc}
                    name="newDesc"
                    onChange={this.handleChange}/>
                </div>
                <button className="Add-Button">Add 
                  <i class="fas fa-plus-circle"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default  TasksMain;