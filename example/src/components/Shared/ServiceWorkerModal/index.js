import React from 'react'
import { Modal, Button, Icon, Header } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { SET_SHOW_SERVICE_WORKER_MODAL } from 'containers/Global/constants'

const ServiceWorkerModal = () => {
    const dispatch = useDispatch()
    const { showServiceWorkerModal } = useSelector(state => state.Global)


    const handleClose = () => {
        dispatch({ type: SET_SHOW_SERVICE_WORKER_MODAL }) 
    }
    const onUpdate = () => {
        navigator.serviceWorker.ready.then(registration => {
            console.log(registration)
            registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        });
    }

    return (
        <Modal
            basic
            onClose={handleClose}
            open={showServiceWorkerModal}
            size='small'
        >
            <Header icon>
                <Icon name='refresh' />
                New version available
            </Header>
            <Modal.Content>
                <p>
                    A new version is available. Do you want to update the App?
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' inverted onClick={handleClose}>
                    <Icon name='remove' /> No
                </Button>

                <Button color='green' inverted onClick={onUpdate}>
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ServiceWorkerModal