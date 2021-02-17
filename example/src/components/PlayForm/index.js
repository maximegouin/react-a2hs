import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { If } from 'react-if'
import { Form, Label, Header, Radio, Divider } from 'semantic-ui-react'
import { SketchPicker } from 'react-color'
import { renderPositionOptions, renderSizeOptions, renderTitleSizeOptions } from './utils'
import './styles.css'
import { 
    SET_TITLE, 
    SET_TITLE_SIZE, 
    SET_TITLE_COLOR, 
    SET_TEXT, 
    SET_TEXT_SIZE, 
    SET_TEXT_COLOR,
    SET_POSITION ,
    SET_ICON,
    SET_ICON_SIZE,
    SET_ICON_COLOR,
    SET_BUTTON_BACKGROUND_COLOR,
    SET_BUTTON_TEXT_COLOR,
    SET_BUTTON_TEXT,
    SET_FORCE_SHOW
} from 'containers/A2HS/constants'

const PlayForm = () => {
    const dispatch = useDispatch()
    const [showSketchColor, setShowSketchColor] = useState(false);
    const {
        title,
        titleSize,
        titleColor,
        text,
        textSize,
        textColor,
        position,
        icon,
        iconSize,
        iconColor,
        buttonText,
        buttonTextColor,
        buttonBackgroundColor,
        forceShow,
      } = useSelector(state => state.A2HS)

    const handleShowSketchColor = (id) => {
        if(!showSketchColor || showSketchColor !== id) {
            setShowSketchColor(id)
        } else {
            setShowSketchColor(false)
        }
    }

    // Title
    const handleTitle = ({ target: { value } }) => {
        dispatch({ type: SET_TITLE, payload: value })
    }
    const handleTitleSize = ({ target: { value } }) => {
        dispatch({ type: SET_TITLE_SIZE, payload: value })
    }
    const handleTitleColor = ({ hex }) => {
        dispatch({ type: SET_TITLE_COLOR, payload: hex })
    }

    // Text
    const handleText = ({ target: { value } }) => {
        dispatch({ type: SET_TEXT, payload: value })
    }
    const handleTextSize = ({ target: { value } }) => {
        dispatch({ type: SET_TEXT_SIZE, payload: value })
    }
    const handleTextColor = ({ hex }) => {
        dispatch({ type: SET_TEXT_COLOR, payload: hex })
    }

    // Position
    const handlePosition = ({ target: { value } }) => {
        dispatch({ type: SET_POSITION, payload: value })
    }

    // Icon
    const handleIcon = ({ target: { value } }) => {
        dispatch({ type: SET_ICON, payload: value })
    }
    const handleIconSize = ({ target: { value } }) => {
        dispatch({ type: SET_ICON_SIZE, payload: value })
    }
    const handleIconColor = ({ hex }) => {
        dispatch({ type: SET_ICON_COLOR, payload: hex })
    }

    // Button
    const handleButtonText = ({ target: { value } }) => {
        dispatch({ type: SET_BUTTON_TEXT, payload: value })
    }
    const handleButtonTextColor = ({ hex }) => {
        dispatch({ type: SET_BUTTON_TEXT_COLOR, payload: hex })
    }
    const handleButtonBackgroundColor = ({ hex }) => {
        dispatch({ type: SET_BUTTON_BACKGROUND_COLOR, payload: hex })
    }

    // Force show
    const handleForceShow = (_, { checked }) => {
        dispatch({ type: SET_FORCE_SHOW, payload: checked })
    }

    return (
        <Form className="form-play-props">
            <Header as='h3'># Force show</Header>
            <Form.Group widths='equal'>
                <Form.Field style={{ display: 'flex', flexDirection: 'row' }}>
                    <label style={{ marginRight: '20px' }}>Force to show:</label>
                    <Radio toggle checked={forceShow} onChange={handleForceShow} />
                </Form.Field>
            </Form.Group>

            <Divider />

            <Header as='h3'># Header</Header>
            <Form.Group widths='equal'>
                <Form.Field>
                    <label>Title (title)</label>
                    <input onChange={handleTitle} value={title} placeholder='Set title'/>
                </Form.Field>
                <Form.Field>
                    <label>Title size (titleSize)</label>
                    <select onChange={handleTitleSize} value={titleSize}>
                        {renderTitleSizeOptions()}
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Title color (titleColor)</label>
                    <Label className="button-pick-color" size="huge" style={{ backgroundColor: titleColor }} onClick={() => handleShowSketchColor("title")}/>
                    <If condition={showSketchColor === "title"}>
                        <SketchPicker onChange={handleTitleColor} color={titleColor} />
                    </If>
                </Form.Field>
            </Form.Group>

            <Divider />

            <Header as='h3'># Text</Header>
            <Form.Group widths='equal'>
                <Form.Field>
                    <label>Text (text)</label>
                    <input onChange={handleText} value={text} placeholder='Set text'/>
                </Form.Field>
                <Form.Field>
                    <label>Text size (textSize)</label>
                    <input type="number" onChange={handleTextSize} value={textSize} />
                </Form.Field>
                <Form.Field>
                    <label>Text color (textColor)</label>
                    <Label className="button-pick-color" size="huge" style={{ backgroundColor: textColor }} onClick={() => handleShowSketchColor("text")}/>
                    <If condition={showSketchColor === "text"}>
                        <SketchPicker onChange={handleTextColor} color={textColor} />
                    </If>
                </Form.Field>
            </Form.Group>

            <Divider />

            <Header as='h3'># Position</Header>
            <Form.Group widths='equal'>
                <Form.Field style={{ maxWidth: '300px' }}>
                    <label>Position value (position)</label>
                    <select onChange={handlePosition} value={position}>
                        {renderPositionOptions()}
                    </select>
                </Form.Field>
            </Form.Group>

            <Divider />

            <Header as='h3'># Icon</Header>
            <Form.Group widths='equal'>
                <Form.Field>
                    <label>Name (icon)</label>
                    <input onChange={handleIcon} value={icon} placeholder='Icon name'/>
                </Form.Field>
                <Form.Field>
                    <label>Icon size (iconSize)</label>
                    <select onChange={handleIconSize} value={iconSize}>
                        {renderSizeOptions()}
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Icon color (iconColor)</label>
                    <Label className="button-pick-color" size="huge" style={{ backgroundColor: iconColor }} onClick={() => handleShowSketchColor("icon")}/>
                    <If condition={showSketchColor === "icon"}>
                        <SketchPicker onChange={handleIconColor} color={iconColor} />
                    </If>
                </Form.Field>
            </Form.Group>

            <Divider />

            <Header as='h3'># Button</Header>
            <Form.Group widths='equal'>
                <Form.Field>
                    <label>Text (buttonText)</label>
                    <input onChange={handleButtonText} value={buttonText} placeholder='Set text'/>
                </Form.Field>
                <Form.Field>
                    <label>Button Text Color (buttonTextColor)</label>
                    <Label className="button-pick-color" size="huge" style={{ backgroundColor: buttonTextColor }} onClick={() => handleShowSketchColor("buttonText")}/>
                    <If condition={showSketchColor === "buttonText"}>
                        <SketchPicker onChange={handleButtonTextColor} color={buttonTextColor} />
                    </If>
                </Form.Field>
                <Form.Field>
                    <label>Button background color (buttonBackgroundColor)</label>
                    <Label className="button-pick-color" size="huge" style={{ backgroundColor: buttonBackgroundColor }} onClick={() => handleShowSketchColor("buttonBackground")}/>
                    <If condition={showSketchColor === "buttonBackground"}>
                        <SketchPicker onChange={handleButtonBackgroundColor} color={buttonBackgroundColor} />
                    </If>
                </Form.Field>
            </Form.Group>
            <span className="white">Supported icons name: <a href="https://react.semantic-ui.com/elements/icon/" target="_blank" rel="noopener noreferrer">React Semantic UI</a></span>
        </Form>
    )
}

export default PlayForm