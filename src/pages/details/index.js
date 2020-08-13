import React, { useState, useEffect } from 'react'
import PageLayout from '../../Components/PageLayout'
import Title from '../../Components/Title'
import PostDetails from '../../Components/PostDetails'
import postsDb from '../../firebase/postsDb'
import userDb from '../../firebase/userDb'
import modifier from '../../firebase/modifier';

const DetailsPage = (props) => {

    const [post, setPost] = useState({})
    const [likes, setLikes] = useState(0)
    const [isLiked, setIsLiked] = useState(false)

    const postId = props.match.params.postid
    const userId = userDb.getUser()

    const getData = () => {
        postsDb.get(postId).then(response => {
            setPost(modifier(response))
            setLikes(modifier(response).likes.length)
        })
    }
console.log(isLiked)
    const handleClick = (e) => {
        console.log(e.target.attribute)
        if (!post.likes.includes(userId)) {
            post.likes.push(userId)
            postsDb.put(postId, post)
            setIsLiked(true)
        }
    }

    useEffect(() => {
        getData()
    }, [isLiked])

    return (
        <PageLayout>
            <Title title='Details' />
            <PostDetails isLiked={isLiked} imageUrl={post.imageUrl} description={post.description} likes={likes} onClick={handleClick} />
        </PageLayout>
    )

}

export default DetailsPage;