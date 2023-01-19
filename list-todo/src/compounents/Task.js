import { useEffect, useState } from "react"
import "../styles/TaskStyle.css"
import Alert from "./Alert";
import Lists from "./Lists";


    const Task = () => {

        const [name, setName] = useState("");
        const [list, setLsit] = useState(JSON.parse(localStorage.getItem("task")));
        const [isEditing, setIsEditing] = useState(false)
        const [edit, setEdit] = useState(null);
        const [alert, setAlert] = useState({

            show: false,
            msg:"",
            type:""
        })


        const handelSubmit = (e) => {


            e.preventDefault();

            if(!name) {
                alertValue();
                
            }else if(name && isEditing) {

                setLsit(

                    list.map((item) => {

                        if(item.id === edit) {

                            console.log("ok")
                            return {...item, task :name}
                        }
                        

                        return item;
                    })
                )
                setIsEditing(false)
                setName("")
                setEdit(null)
            }else {

            let newList = {id: new Date().getTime().toString(), task: name}
            
            setLsit([...list, newList]);
            
            setName("");
            

            }

        }

        const editing = (id) => {

            let taskEdit = list.find((item) => item.id === id)

            setName(taskEdit.task)
            setIsEditing(true)
            setEdit(id)
        }

        const removeItem = (id) => {

            let newFilter = list.filter((item) => item.id !== id)

            setLsit(newFilter);

        }

        const clearAll = () => {

            let EmptyArray = []

            setLsit(EmptyArray);

        }

        const alertSuccessfully = () => {

            let arr = {show: true, msg: "Your task has been successfully added", type:"successfully"}

            setAlert(arr)


        }

        const alertDanger = () => {

            let deletedTask = {show: true, msg: "your task is deleted", type:"danger"}

            setAlert(deletedTask)

        }

        const removeAlert = () => {

            setAlert({show: false})
        }

        const alertValue = () => {

            let emptyValue = {show: true, msg: "enter your task", type:"danger"}

            setAlert(emptyValue)


        }

        const alerClearAll = () => {

            let clearAlert = {show: true, msg: " all tasks deleted", type:"danger"}

            setAlert(clearAlert)


        }

        // const allAlerts = (show, msg, type) => {

        //     return setAlert({show:show, msg:msg, type:type})
        // }

        useEffect(() => {
        localStorage.setItem("task", JSON.stringify(list))

        }, [list])



    return(

        

        <div className="container">

        
            <form className="form-submit" onSubmit={handelSubmit}>
                <h2> List of tasks </h2>
                    {alert.show && <Alert  deleteAlert={removeAlert} alerts={alert} listsAlert={list}  />}
                <div className="input-container">

                    <input onChange={(e) => {  
                        setName(e.target.value)
                    }} placeholder="write your task..." value={name} className="inp" type="text"/>

                    <button type="submit" onClick={() => {  
                        alertSuccessfully();
                    }} className="btn-submit"> {isEditing ? "Edit" : "Submit"}  </button>
                </div>

                <div className="border-lists">
                    <Lists itemOfLists={list} edit={editing} itemRemove={removeItem} danger={alertDanger} />
                </div>

                {
                    
                }

                {
                    list.length > 0 && (
                        <button onClick= {() => {
                            alerClearAll();
                            clearAll();
                            localStorage.clear();
                            setName("")
                            setIsEditing(false)
                        }} className="clear-all-tasks"> Claer All Items </button>
                    ) 

                    
                }
                
                
                
            </form>


        </div>
        
    
    )
}

    export default Task