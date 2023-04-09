import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { decrement, increment } from './testReducer'


export default function Sandbox() {
    const dispatch = useDispatch()
    const data = useSelector(state => state.test.data)

    return (
        <>
            <h1>Testing 123</h1>
            <h1>The data is: {data}</h1>
            <Button onClick={() => dispatch(increment(20))} content='Increment' color='green' />
            <Button onClick={() => dispatch(decrement(12))} content='Decrement' color='red' />
        </>
    )
}