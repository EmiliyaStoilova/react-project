import React, { useState } from 'react';
import styles from './index.module.css'
import PageLayout from '../../Components/PageLayout'
import Title from '../../Components/Title'
import Button from '../../Components/Buttons'
import Input from '../../Components/Input'
import postsDb from '../../firebase/postsDb'
import userDb from '../../firebase/userDb'

const CreatePage = (props) => {

    const [imageUrl, setImageUrl] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(false)

    const userId = userDb.getUser()

    const handleSubmit = (e) => {
        e.preventDefault()

        const body = {
            imageUrl,
            description,
            creator: userId,
            likes: []
        }

        if (imageUrl !== '' && description !== '') {
            postsDb.create(body).then(response => {
                props.history.push('/')
            })
        } else {
            setError(true)
        }
    }

    return (
        <PageLayout>
            <div>
                <Title title='Create' />
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input placeholder='imageURL' title='Image Url' id='imageUrl' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                    <label>Description</label> <br />
                    <textarea placeholder='description' className={styles.textarea} value={description} onChange={e => setDescription(e.target.value)} />
                    {error ? (<p className={styles.error}>Fill both inputs</p>) : null}
                    <Button type='submit' title='Add' />
                </form>
            </div>
        </PageLayout>
    );
}

export default CreatePage;
