import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import PageLayout from 'components/Shared/PageLayout';

const Prerequisites = () => (
    <PageLayout>
        <div style={{ marginBottom: '150px' }}>
            <Container fluid className="bg-black">
                <Header as='h1' attached='top' className="custom-page-header">
                    Supported browsers
                </Header>
                <Segment attached className="custom-page-segment">
                    <p>This package uses the BeforeInstallPromptEvent to prevent default add to home screen button to show (Chrome) and display a custom installation button</p>
                    <p>You can check the supported browsers for this method <a href="https://caniuse.com/mdn-api_beforeinstallpromptevent" target="_blank" rel="noreferrer">here</a></p>
                </Segment>
            </Container>
        </div>
    </PageLayout>
)

export default Prerequisites