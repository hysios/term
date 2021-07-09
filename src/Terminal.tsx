import  React, {useEffect} from 'react'
import { XTerm,  } from 'xterm-for-react'
import {ITerminalAddon} from 'xterm'
import { AttachAddon } from 'xterm-addon-attach';
import { FitAddon } from 'xterm-addon-fit';

interface TerminalProps  {
    addons?: ITerminalAddon[]
}

const ws = new WebSocket('ws://127.0.0.1:8090/abc')

export const Terminal = ({addons }: TerminalProps) => {
    const xtermRef = React.useRef<any>(null)
    let attachAddon = new AttachAddon(ws),
        fitAddon = new FitAddon(),
        options = {
            rows: 25, cols: 100
        }; 
    useEffect(() => {
        fitAddon.fit()
        // xtermRef.current.terminal.
    })
    // console.log(ws)
    return (
        // Create a new terminal and set it's ref.
        <XTerm ref={xtermRef} addons={[attachAddon, fitAddon]} />
    )
}