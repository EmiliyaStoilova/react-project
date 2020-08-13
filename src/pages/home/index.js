import React, { useState, useEffect } from 'react';
import PageLayout from '../../Components/PageLayout'
import Title from '../../Components/Title'
import Post from '../../Components/Post'
import postsDb from '../../firebase/postsDb'
import modifier from '../../firebase/modifier';

const HomaePage = () => {

  const [posts, setPosts] = useState([])

  const getPosts = () => {
    postsDb.getAll().then(response => {
      setPosts(response.docs.map(modifier))
    })
  }

  const renderPosts = () => {
    
    return posts.map((post) => {
        return(
            <Post key={post.id} imageUrl={post.imageUrl} id={post.id} />
        )
    })
}

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <PageLayout>
      <div>
        <Title title='Home page' />
        {renderPosts()}
      </div>
    </PageLayout>
  );
}

export default HomaePage;
