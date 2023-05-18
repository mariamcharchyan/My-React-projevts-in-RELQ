import Context from './Context';
import {useContext} from 'react'

export default function Component4 (){
    const number = useContext(Context)
    return <div>count = {number}</div>
  }