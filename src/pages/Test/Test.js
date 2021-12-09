// eslint-disable-next-line
import { CSSTransition } from 'react-transition-group';
import {useState} from 'react'
import './Test.css'


export default function Test () {
    const [load, setLoad] = useState(false)

    return (
        <>
            <CSSTransition in={load} timeout={200} classNames="test-animation">
                <div className="test">
                    Hello from Test Loaded
                </div>
            </CSSTransition>
        </>
    )
}