import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { If } from 'react-if'
import { Form, Label } from 'semantic-ui-react'
import { SketchPicker } from 'react-color'
import { 
    SET_TITLE,
    SET_POSITION,
    SET_TITLE_COLOR,
    SET_BUTTON_ICON,
    SET_BUTTON_COLOR,
    SET_BUTTON_SIZE,
    SET_BUTTON_ICON_COLOR,
    SET_CLOSE_BUTTON_SIZE,
    SET_CLOSE_BUTTON_COLOR,
    SET_CLOSE_BUTTON_ICON,
    SET_CLOSE_BUTTON_ICON_COLOR,
} from 'containers/A2HS/constants'
import { renderPositionOptions, renderSizeOptions } from './utils'
import './styles.css'

const PlayForm = () => {
    const dispatch = useDispatch()
    const [showSketchColor, setShowSketchColor] = useState(false);
    const {
        title,
        position,
        titleColor,
        buttonIcon,
        buttonColor,
        buttonSize,
        buttonIconColor,
        closeButtonSize,
        closeButtonIcon,
        closeButtonIconColor,
        closeButtonColor,
      } = useSelector(state => state.A2HS)

    const handleShowSketchColor = (id) => {
        if(!showSketchColor || showSketchColor !== id) {
            setShowSketchColor(id)
        } else {
            setShowSketchColor(false)
        }
    }

    const handleButtonColor = ({ hex }) => {
        dispatch({ type: SET_BUTTON_COLOR, payload: hex })
    }

    const handleCloseButtonColor = ({ hex }) => {
        dispatch({ type: SET_CLOSE_BUTTON_COLOR, payload: hex })
    }

    const handleButtonIconColor = ({ hex }) => {
        dispatch({ type: SET_BUTTON_ICON_COLOR, payload: hex })
    }

    const handleCloseButtonIconColor = ({ hex }) => {
        dispatch({ type: SET_CLOSE_BUTTON_ICON_COLOR, payload: hex })
    }

    const handleTitle = ({ target: { value } }) => {
        dispatch({ type: SET_TITLE, payload: value })
    }

    const handleTitleColor = ({ hex }) => {
        dispatch({ type: SET_TITLE_COLOR, payload: hex })
    }

    const handlePosition = ({ target: { value } }) => {
        dispatch({ type: SET_POSITION, payload: value })
    }

    const handleButtonIcon = ({ target: { value } }) => {
        dispatch({ type: SET_BUTTON_ICON, payload: value })
    }

    const handleCloseButtonIcon = ({ target: { value } }) => {
        dispatch({ type: SET_CLOSE_BUTTON_ICON, payload: value })
    }

    const handleButtonSize = ({ target: { value } }) => {
        dispatch({ type: SET_BUTTON_SIZE, payload: value })
    }

    const handleCloseButtonSize = ({ target: { value } }) => {
        dispatch({ type: SET_CLOSE_BUTTON_SIZE, payload: value })
    }

    return (
        <Form className="form-play-props">
            <Form.Group widths='equal'>
                <Form.Field>
                    <label>Set title</label>
                    <input onChange={handleTitle} value={title} placeholder='Set title'/>
                </Form.Field>
                <Form.Field>
                    <label>Set position</label>
                    <select onChange={handlePosition} value={position}>
                        {renderPositionOptions()}
                    </select>
                </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
            <Form.Field>
                    <label>Set title color</label>
                    <Label className="button-pick-color" size="huge" style={{ backgroundColor: titleColor }} onClick={() => handleShowSketchColor("title")}/>
                    <If condition={showSketchColor === "title"}>
                        <SketchPicker onChange={handleTitleColor} color={titleColor} />
                    </If>
                </Form.Field>
                <Form.Field>
                    <label>Set button color</label>
                    <Label className="button-pick-color" size="huge" style={{ backgroundColor: buttonColor }} onClick={() => handleShowSketchColor("button")}/>
                    <If condition={showSketchColor === "button"}>
                        <SketchPicker onChange={handleButtonColor} color={buttonColor} />
                    </If>
                </Form.Field>
                <Form.Field>
                    <label>Set close button color</label>
                    <Label className="button-pick-color" size="huge" style={{ backgroundColor: closeButtonColor }} onClick={() => handleShowSketchColor("close-button")}/>
                    <If condition={showSketchColor === "close-button"}>
                        <SketchPicker onChange={handleCloseButtonColor} color={closeButtonColor} />
                    </If>
                </Form.Field>
                <Form.Field>
                    <label>Set button icon color</label>
                    <Label className="button-pick-color" size="huge" style={{ backgroundColor: buttonIconColor }} onClick={() => handleShowSketchColor("button-icon")}/>
                    <If condition={showSketchColor === "button-icon"}>
                        <SketchPicker onChange={handleButtonIconColor} color={buttonIconColor} />
                    </If>
                </Form.Field>
                <Form.Field>
                    <label>Set close button icon color</label>
                    <Label className="button-pick-color" size="huge" style={{ backgroundColor: closeButtonIconColor }} onClick={() => handleShowSketchColor("close-button-icon")}/>
                    <If condition={showSketchColor === "close-button-icon"}>
                        <SketchPicker onChange={handleCloseButtonIconColor} color={closeButtonIconColor} />
                    </If>
                </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field>
                    <label>Set button icon</label>
                    <input onChange={handleButtonIcon} value={buttonIcon} placeholder='icon-name'/>
                </Form.Field>
                <Form.Field>
                    <label>Set close button icon</label>
                    <input value={closeButtonIcon} onChange={handleCloseButtonIcon} placeholder='icon-name' />
                </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field>
                    <label>Set button size</label>
                    <select onChange={handleButtonSize} value={buttonSize}>
                        {renderSizeOptions()}
                    </select>
                </Form.Field>
                <Form.Field>
                    <label>Set close button size</label>
                    <select onChange={handleCloseButtonSize} value={closeButtonSize}>
                        {renderSizeOptions()}
                    </select>
                </Form.Field>
            </Form.Group>
            <span>Supported icons name: <a href="https://react.semantic-ui.com/elements/icon/" target="_blank" rel="noopener noreferrer">React Semantic UI</a></span>
        </Form>
    )
}

export default PlayForm