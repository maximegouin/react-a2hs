import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import PageLayout from 'components/Shared/PageLayout';
import TableDesktop from 'components/BrowserSupport/Table/TableDesktop';
import TableMobile from 'components/BrowserSupport/Table/TableMobile';

const BrowserSupport = () => (
    <PageLayout>
        <Container fluid>
        <div>
            <Header as='h1' attached='top' className="custom-page-header">
                Browser support of web notifications and add to home screen (PWA Installation)
            </Header>
            <Segment attached className="custom-page-segment">
                <TableDesktop />
                <TableMobile />
                <p className="custom-link"><i>Notifications support:</i><a href="https://caniuse.com/notifications" target="_blank" rel="noopener noreferrer"> Check here</a></p>
                <p className="custom-link"><i>Installable support:</i><a href="https://caniuse.com/web-app-manifest" target="_blank" rel="noopener noreferrer"> Check here</a></p>
            </Segment>
        </div>
        </Container>
    </PageLayout>
);

export default BrowserSupport