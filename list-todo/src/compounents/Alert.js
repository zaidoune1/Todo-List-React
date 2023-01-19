import { useEffect } from "react";

    const Alert = ({alerts,deleteAlert, listsAlert}) => {

        useEffect(() => {

            const alertRemove = setTimeout(() => {

                deleteAlert()
            }, 1000);

            return () => clearTimeout(alertRemove);

        }, [listsAlert])
        

    return (
        <>

            {
                <div className="bloc-alerts">
                <p className= {`alert alert-${alerts.type}`} > {alerts.msg} </p>
                </div>
            }
        
        </>
    )
    }

    export default Alert