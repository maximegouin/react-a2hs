import React, { useState } from 'react'
import { Modal, Button, Icon, Header } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { If } from 'react-if'
import { SET_SHOW_SERVICE_WORKER_MODAL } from 'containers/Home/constants'

const ServiceWorkerModal = () => {
    const dispatch = useDispatch()
    const { showServiceWorkerModal, workboxBroadcastUpdate } = useSelector(state => state.Global)

    const [isFetching, setIsFetching ] = useState(false)
    const [isUpdated, setIsUpdated ] = useState(false)

    const handleClose = () => {
        if(!isFetching) {
           dispatch({ type: SET_SHOW_SERVICE_WORKER_MODAL }) 
        }
    }
    const onUpdate = async () => {
        const { cacheName, updatedUrl } = workboxBroadcastUpdate;
        setIsFetching(true)
        
        const cache = await caches.open(cacheName);
        await cache.match(updatedUrl);
        setIsFetching(false)
        setIsUpdated(true)
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
                <If condition={!isUpdated}>
                    <p>
                        A new version is available. Do you want to update the App?
                    </p>
                    <If condition={isFetching}>
                        <p>Loading...</p>
                    </If>
                </If>
                <If condition={isUpdated}>
                    <p>
                        The app is up to date!
                    </p>
                </If>
            </Modal.Content>
            <Modal.Actions>
                <If condition={!isUpdated}>
                    <Button basic color='red' inverted onClick={handleClose} disabled={isFetching}>
                        <Icon name='remove' /> No
                    </Button>
                </If>

                <Button color='green' inverted onClick={onUpdate} disabled={isFetching}>
                    <Icon name='checkmark' /> {!isUpdated ? 'Yes' : 'Ok'}
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default ServiceWorkerModal