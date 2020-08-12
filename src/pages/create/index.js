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

    const userId = userDb.getUser()
    console.log(userId)
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const body = {
            imageUrl,
            description,
            creator: userId
        }

        postsDb.create(body).then(response => {
            props.history.push('/')
        })
    }

    return (
        <PageLayout>
            <div>
                <Title title='Create' />
                <form className={styles.form} onSubmit={handleSubmit}>
                    <Input placeholder='imageURL' title='Image Url' id='imageUrl' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                    <label>Description</label> <br/>
                    <textarea placeholder='description' value={description} onChange={e => setDescription(e.target.value)} />
                    <Button type='submit' title='Add' />
                </form>
            </div>
        </PageLayout>
    );
}

export default CreatePage;
