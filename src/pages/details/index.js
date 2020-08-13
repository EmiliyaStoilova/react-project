import React, { useState, useEffect } from 'react'
import PageLayout from '../../Components/PageLayout'
import Title from '../../Components/Title'
import PostDetails from '../../Components/PostDetails'
import postsDb from '../../firebase/postsDb'
import userDb from '../../firebase/userDb'
import modifier from '../../firebase/modifier';

const DetailsPage = (props) => {

    const [post, setPost] = useState({})
    const postId = props.match.params.postid
    const userId = userDb.getUser()

    const getData = () => {
        postsDb.get(postId).then(response => {
            setPost(modifier(response))
        })
    }

    const handleClick = (e) => {
        if (!post.likes.includes(userId)) {
            post.likes.push(userId)
            postsDb.put(postId, post)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    console.log(post.likes)
    return (
        <PageLayout>
            <Title title='Deatils' />
            <PostDetails imageUrl={post.imageUrl} description={post.description} likes={post.likes} onClick={handleClick} />
        </PageLayout>
    )

}

export default DetailsPage;