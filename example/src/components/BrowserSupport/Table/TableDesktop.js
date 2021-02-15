import React from 'react';
import { Table, Header, Icon } from 'semantic-ui-react';

const TableDesktop = () => (
    <>
        <Header as='h3' className="white">
            Desktop browsers
        </Header>
        <Table definition inverted>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell className="empty-cell" />
                    <Table.HeaderCell>Notifications</Table.HeaderCell>
                    <Table.HeaderCell>Installable</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell>Firefox</Table.Cell>
                    <Table.Cell><Icon name="checkmark" /></Table.Cell>
                    <Table.Cell><Icon name="x" /></Table.Cell>
                </Table.Row>
            <Table.Row>
                <Table.Cell>Chrome</Table.Cell>
                <Table.Cell><Icon name="checkmark" /></Table.Cell>
                <Table.Cell><Icon name="checkmark" /></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Edge</Table.Cell>
                <Table.Cell><Icon name="checkmark" /></Table.Cell>
                <Table.Cell><Icon name="checkmark" /></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>Safari</Table.Cell>
                <Table.Cell><Icon name="checkmark" /></Table.Cell>
                <Table.Cell><Icon name="x" /></Table.Cell>
            </Table.Row>
            </Table.Body>
        </Table>
    </>
)

export default TableDesktop;