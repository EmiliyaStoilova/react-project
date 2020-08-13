import React, { useState, useEffect } from 'react'
import PageLayout from '../../Components/PageLayout'
import Title from '../../Components/Title'
import ProfilePost from '../../Components/ProfilePost'
import postsDb from '../../firebase/postsDb'
import userDb from '../../firebase/userDb'
import modifier from '../../firebase/modifier';

const ProfilePage = (props) => {

    const [post, setPost] = useState([])
    const [isDelete, setIsDelete] = useState(false)
    const userId = userDb.getUser()

    const getPosts = () => {
        postsDb.getAll().then(response => {
            setPost(response.docs.map(modifier))
        })
    }

    const handleClick = (e) => {
        const id = e.target.id
        postsDb.delete(id).then(res => {
            setIsDelete(true)
        })
        setIsDelete(false)
    }

    const renderPosts = () => {
        return post.filter(post => post.creator === userId).map((post) => {
            return (
                <ProfilePost key={post.id} imageUrl={post.imageUrl} id={post.id} description={post.description} onClick={handleClick} />
            )
        })
    }

    useEffect(() => {
        getPosts()
    }, [isDelete])

    return (
        <PageLayout>
            <Title title='Profile' />
            {renderPosts()}
        </PageLayout>
    )

}

export default ProfilePage;