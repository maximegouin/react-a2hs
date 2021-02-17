import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import PageLayout from 'components/Shared/PageLayout';
import PlayForm from 'components/PlayForm';
import TableProps from 'components/TableProps';

const A2HS = () => (
    <PageLayout>
        <div style={{ marginBottom: '150px' }}>
            <Container fluid className="bg-black">
                <Header as='h1' attached='top' className="custom-page-header">
                    About
                </Header>
                <Segment attached className="custom-page-segment">
                    <p>This is the demo page of react-a2HS package. <b>View on <a href="https://github.com/maximegouin/react-a2hs" target="_blank" rel="noreferrer">GitHub</a></b></p>
                    <p>
                        Use this package to provide a custom app installation for your React PWA.
                        You can easily add an add to home screen button, that will be displayed only on supported browsers and if the app hasn't been previously installed.
                    </p>
                    <p>Please check the prerequisites before using this package</p>
                </Segment>
            </Container>
            <Container fluid className="bg-black">
                <Header as='h1' attached='top' className="custom-page-header">
                    Props
                </Header>
                <TableProps />
            </Container>
            <Container fluid className="bg-black">
                <Header as='h1' attached='top' className="custom-page-header">
                    Play
                </Header>
                <PlayForm />
            </Container>
        </div>
    </PageLayout>
)

export default A2HS