import React from "react";
import { withStorageListener } from "./withStorageListener";

function ChangeAlert({show, toggleShow}) {

    function reloadPage(){
        toggleShow(false)
        window.location.reload()
    }
    if (show) {
        return(
            <div>
                <p>Hubo cambios</p>
                <button onClick={reloadPage}>Click para recargar la página</button>
            </div>
        )
    } else {
        return null
    }
}
const ChangeWithListener = withStorageListener(ChangeAlert)
export {ChangeWithListener}