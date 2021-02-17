import React from 'react'
import { Table, Icon } from 'semantic-ui-react'

const TableProps = () => (
    <Table celled inverted>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Type</Table.HeaderCell>
        <Table.HeaderCell>Default value</Table.HeaderCell>
        <Table.HeaderCell>Info</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>title</Table.Cell>
        <Table.Cell>string</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>titleSize</Table.Cell>
        <Table.Cell>string</Table.Cell>
        <Table.Cell>h2</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>titleColor</Table.Cell>
        <Table.Cell>string</Table.Cell>
        <Table.Cell>black</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>text</Table.Cell>
        <Table.Cell>string</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>textSize</Table.Cell>
        <Table.Cell>string</Table.Cell>
        <Table.Cell>14</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>textColor</Table.Cell>
        <Table.Cell>string</Table.Cell>
        <Table.Cell>black</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>position</Table.Cell>
        <Table.Cell>string</Table.Cell>
        <Table.Cell>bottom-left</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>icon</Table.Cell>
        <Table.Cell>string</Table.Cell>
        <Table.Cell></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>iconSize</Table.Cell>
        <Table.Cell>string</Table.Cell>
        <Table.Cell>big</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>iconColor</Table.Cell>
        <Table.Cell>string</Table.Cell>
        <Table.Cell>black</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>buttonText</Table.Cell>
        <Table.Cell>string</Table.Cell>
        <Table.Cell>Add</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>buttonTextColor</Table.Cell>
        <Table.Cell>string</Table.Cell>
        <Table.Cell>black</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>buttonBackgroundColor</Table.Cell>
        <Table.Cell>string</Table.Cell>
        <Table.Cell>white</Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>forceShow</Table.Cell>
        <Table.Cell>boolean</Table.Cell>
        <Table.Cell>false</Table.Cell>
        <Table.Cell warning>Use in development mode to show the button without the prerequisites</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default TableProps