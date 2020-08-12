import React from 'react'
import PageLayout from '../../Components/PageLayout'
import Title from '../../Components/Title'
import Error from '../../Components/Error'

const ErrorPage = () => {

    return (
        <PageLayout>
            <Title title='404 Not found'/>
            <Error />
        </PageLayout>
    )

}

export default ErrorPage;