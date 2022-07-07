import React from 'react'
import { useState, useEffect } from 'react'

import Container from '../components/Container'


const AllPosts = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/posts', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setPosts(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <Container customClass="start">
            {posts.length > 0 && posts.map((post) => (
                <p>{post.msg}</p>
            ))}
        </Container>
    )
}

export default AllPosts