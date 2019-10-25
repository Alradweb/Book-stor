import React from 'react'
import PageLayout from "../components/layout/PageLayout"

class Error extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render() {
        const statusCode = this.props.statusCode || 500;
        const message = statusCode === 404 ? `Sorry, we can’t find what you’re looking for...` : 'An error occurred, please try again later.'
        return (
            <PageLayout title={`${statusCode} Error`}>
                <h1 style={{color: 'white'}}>{statusCode} Error</h1>
                <p style={{color: 'white'}}>{message}</p>
            </PageLayout>
        );
    }
}

export default Error;