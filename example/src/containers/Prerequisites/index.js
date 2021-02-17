import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import PageLayout from 'components/Shared/PageLayout';

const Prerequisites = () => (
    <PageLayout>
        <div style={{ marginBottom: '150px' }}>
            <Container fluid className="bg-black">
                <Header as='h1' attached='top' className="custom-page-header">
                    Prerequisites
                </Header>
                <Segment attached className="custom-page-segment">
                    <p>In order to display the add to home screen button, your React application must respects different conditions.</p>
                    <p>
                        First, it needs to have a <b>manifest.json</b> file that gives details about the app and its metadata. 
                        This is this single file that makes the difference between a regular website and a PWA.
                        <br />Get more details on how to create your manifest.json <a href="https://web.dev/add-manifest/" target="_blank" rel="noreferrer">here</a>
                    </p>
                    <p>
                        Secondly, you need to register a service worker for your web app. The service worker can cache your assets and your requests depending of your strategy. 
                        <br />For example, by caching static assets, your app is available in offline mode.
                        <br></br>Learn more about service workers <a href="https://developers.google.com/web/ilt/pwa/introduction-to-service-worker" target="_blank" rel="noreferrer">Here</a>
                    </p>
                    <p>
                        Third, your PWA must be served through HTTPS. As many new web APIs, A2HS only works in security context.
                    </p>
                </Segment>
            </Container>
        </div>
    </PageLayout>
)

export default Prerequisites