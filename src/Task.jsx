import React, {useState} from "react";
import "./App.css"
import TaskData from "./taskData.json"

function Task(props){



    function isChecked(){
        let checkVal = document.getElementById(props.theBoxId)
        let textVal = document.getElementById(props.theId)
        console.log(checkVal.checked)
        if(checkVal.checked){
            textVal.style.textDecoration = "line-through"
            textVal.style.textDecorationColor = "crimson"
            textVal.style.textDecorationThickness = "3px"
            textVal.style.textDecorationStyle = "dotted"


        }else{
            textVal.style.textDecoration = "none"

        }

    }

    const theObj =  {"taskId":props.theId,"checkBoxId":props.theBoxId,"theTask":props.theTask, "completed": props.completeStatus}

    function removeTask(){
        // console.log( TaskData.data.splice((props.theId) ,1)  )
        props.setTheData(oldData => {  return [  ...oldData.filter(e => e.taskId !== theObj.taskId) ] }  )

    }


    return(


        <div>

            <div id={"container_2"}>

                <div>
                    <input  onClick={isChecked} id={props.theBoxId} className={"my-checkbox"} name={ "task-checkbox"} type="checkbox"/>
                </div>

                <div >
                    <label htmlFor={"my-checkbox"}> <p id={props.theId} className={"task-text"}>{props.theTask}</p>  </label>
                </div>

                <div onClick={removeTask} className={"trash"}>
                    <button> 🗑 </button>️
                </div>




            </div>

            <div className={"underline"}>
            </div>





        </div>

    )


}

export default Task;