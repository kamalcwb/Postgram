import React from 'react'
import { useState } from 'react'

import styles from './PostForm.module.css'
import SubmitButton from './SubmitButton'
import Input from './Input'

const PostForm = ({ handleSubmit, postData, }) => {
    const [post, setPost] = useState(postData)

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(post)
    }

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
        console.log(post.msg)
    }
    return (
        <form className={styles.text} onSubmit={submit}>
            <div className={styles.text_area}>
                <Input type="textarea" name="msg" handleOnChange={handleChange} />
            </div>
            <div >
                <SubmitButton onClick={submit} className={styles.btn} text="Postar" />
            </div>
        </form>
    )
}

export default PostForm