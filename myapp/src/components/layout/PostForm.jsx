import React from 'react'
import { useState } from 'react'

import styles from './PostForm.module.css'
import SubmitButton from './SubmitButton'
import Input from './Input'

const PostForm = () => {
    const [post, setPost] = useState()

    const submit = (e) => {
        e.preventDefault()
        fetch("http://localhost:5000/posts/newpost", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(post),
        })
            .then(() => {
                window.location.reload();
            })
            .catch(err => console.log(err))
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
        console.log(post)
    }
    return (
        <form className={styles.text} onSubmit={submit}>
            <div className={styles.text_area}>
                <Input
                    type="textarea"
                    name="msg"
                    handleOnChange={handleChange} />
            </div>
            <div >
                <SubmitButton className={styles.btn} text="Postar" />
            </div>
        </form>
    )
}

export default PostForm