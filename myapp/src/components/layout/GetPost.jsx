import React from 'react'
import { useEffect, useState } from 'react'
import styles from './GetPost.module.css'

const GetPost = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/posts", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setPosts(data)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className={styles.posts}>
            <h3>Posts recentes:</h3>
            <div>
                {posts.length > 0 &&
                    posts.map((post) => (
                        <p>{post.msg}</p>
                    ))}
            </div>
        </div>
    )
}

export default GetPost