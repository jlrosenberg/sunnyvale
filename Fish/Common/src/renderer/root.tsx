import * as React from "react"
import * as electron from "electron"
import Hexagon from "@/renderer/hexagon/hexagon"

/**
 * Draws the main view
 */
const Root: React.FC = () => {
    /**
     * Terminates the program
     * @param _ Event calling the function, is disregarded
     */
    const closeApp = (_: Event): void => {
        electron.ipcRenderer.send("close-me")
    }

    return (
        <div className="center">
            <Hexagon size={200} clickHandler={closeApp} />
        </div>
    )
}

export default Root
