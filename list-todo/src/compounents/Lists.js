import {AiFillDelete} from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai";

    const Lists = ({itemOfLists, edit, itemRemove, danger, modifi}) => {
    return (
        <>
            <div>
                {
                    itemOfLists.map((itemTask) => {

                        const {id,task} = itemTask

                        return <div key={id} className="bloc-tasks">
                        <div className="task-container">
                            <p className="taskName"> {task} </p>
                        <div>
                            <button type="button" onClick={() => { 
                                edit(id)
                            }} className="icon"><AiFillEdit/></button>
                            <button onClick={() => {
                                itemRemove(id)
                                danger()
                            }} className="btn-icon icon"><AiFillDelete/></button>
                        </div>
                        </div>
                        </div>
                    })

                }
            </div>
        </>
    )
    }

    export default Lists