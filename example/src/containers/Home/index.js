import React from 'react'
import { Container, Header, Segment, Accordion } from 'semantic-ui-react'
import PageLayout from 'components/Shared/PageLayout'
import { PANELS_APP_PILLARS } from './constants'

const Example = () => {
    return (
        <PageLayout>
            <Container fluid>
                <div>
                    <Header as='h1' attached='top' className="custom-page-header">
                        Introduction to Progressive Web Apps
                    </Header>
                    <Segment attached className="custom-page-segment">
                        <p>Web applications can reach anyone, anywhere, on any device with a single codebase.</p>
                        <p>Platform-specific applications (eg: IOS / Android applications), are known for being incredibly rich and reliable. They work regardless of network connection. They launch in their own standalone experience.</p>
                        <p>Progressive Web Apps (PWA) are new apps built and enhanced with modern APIs and last browser capabilities to deliver a better user experience, and feel like a platform-specific application. A PWA must respect 3 pillars</p>
                        <p>
                            <b>The three app pillars:</b>
                        </p>
                        <Accordion defaultActiveIndex={0} panels={PANELS_APP_PILLARS} />
                        <br />
                        <br />
                        <p className="custom-link"><i>Source:</i><a href="https://web.dev/progressive-web-apps/" target="_blank" rel="noopener noreferrer"> Web.dev</a></p>
                    </Segment>
                </div>
            </Container>
        </PageLayout>
    )
}

export default Example