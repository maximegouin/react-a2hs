import React from 'react'
import { Container, Header, Segment, Accordion } from 'semantic-ui-react'
import PlayForm from '../../components/PlayForm'
import { PANELS } from './constants'

const Example = ({
    ...props
}) => {
    return (
        <Container fluid>
            <div>
                <Header as='h1' attached='top'>
                    React - Add to home screen Demo
                </Header>
                <Segment attached>
                    <Accordion defaultActiveIndex={0} panels={PANELS} />
                </Segment>
                <Header as='h2' attached='top'>
                    Play with props
                </Header>
                <Segment attached>
                    <PlayForm
                        {...props}
                    />
                </Segment>
            </div>
        </Container>
    )
}

export default Example