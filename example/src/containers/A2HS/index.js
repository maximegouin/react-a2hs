import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import PageLayout from 'components/Shared/PageLayout';
import PlayForm from 'components/PlayForm';

const A2HS = () => (
    <PageLayout>
        <Container fluid>
            <div>
                <Header as='h1' attached='top' className="custom-page-header">
                    Install a PWA
                </Header>
                <Segment attached className="custom-page-segment">
                    <p>A PWA can be installed on your desktop or mobile.</p>
                    <p>It gives to the user a new experience with a standalone screen and feels like platform-specific app</p>
                    <p>You need to create a <i>manifest.json</i> file, serve your app over https and be on a supported browser to have the possibility to install the app.</p>
                    <p className="custom-link">Check the <a href="https://developer.mozilla.org/en-US/docs/Web/API/BeforeInstallPromptEvent" target="_blank" rel="noopener noreferrer">BeforeInstallPromptEvent</a> to know supported browsers.</p>
                    <p>The react-a2hs package let you quickly add a custom installable button for your PWA.</p>
                    <Header as='h3' attached='top' className="custom-page-header">
                        Try it, play with props
                    </Header>
                    <PlayForm />
                </Segment>
            </div>
            </Container>
    </PageLayout>
)

export default A2HS