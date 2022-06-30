import './App.css';
import Task from "./Task";
import TaskData from "./taskData.json"
import {useState} from "react";

function App() {

    const [theTaskData,setTheTaskData] = useState(TaskData.data)

    console.log("The New Task List: " + theTaskData)
    console.log(theTaskData)

    function addToList(){

      setTheTaskData( oldData => { return [...oldData, {"taskId":oldData.length,"checkBoxId":oldData.length+142,"theTask":document.getElementById("task-input").value ,"completed":false} ] }  )
    }

    // console.log(theTaskData)

  return (
          <div className={"background"}>
              <h1  className={"title"} style={{fontWeight:200}}><span id={"simply"}>✅</span> to.<span style={{fontWeight:"bolder"}}>do</span></h1>

                <div className={"background-2"}>

                  <div id={"container"}>
                    <div id={"task-list-title"}> <p>Task List</p></div>
                    <input  placeholder={"  type a new task"} type={"text"} id={"task-input"} name={"theTaskInput"}/>
                    <button onClick={addToList} id={"green-btn"}>✅</button>
                  </div>

                  {theTaskData.map( d => (

                      <Task
                          key = {d.theTask}
                          theId = {d.taskId}
                          theBoxId = {d.checkBoxId}
                          theTask = {d.theTask}
                          completeStatus = {d.completed}
                          setTheData = {setTheTaskData}
                      />
                  ) )
                   }
                </div>


           </div>
  );


}

export default App
