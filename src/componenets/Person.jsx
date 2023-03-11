import React from 'react'
import { useParams } from 'react-router-dom'

const Person = () => {
    const { id } = useParams()
    return (
        <div>Hello !! I am {id} components</div>
    )
}

export default Person