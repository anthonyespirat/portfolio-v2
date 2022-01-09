import {useState, useEffect} from 'react'

const PageTransition = (delay, className) => {

    const [classData,setClassData] = useState()

    useEffect(() => {
        setTimeout(()=> {
            setClassData(" "+className)
        }, delay)
    }, [classData, delay, className,]);
 return classData
}

export default PageTransition