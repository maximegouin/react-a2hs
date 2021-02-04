import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { If } from 'react-if'
import { Form, Label } from 'semantic-ui-react'
import { SketchPicker } from 'react-color';
import { renderPositionOptions, renderSizeOptions } from './utils';
import './styles.css'

const PlayForm = ({
    title,
    setTitle,
    position,
    setPosition,
    titleColor,
    setTitleColor,
    buttonIcon,
    setButtonIcon,
    buttonColor,
    setButtonColor,
    buttonSize,
    setButtonSize,
    buttonIconColor,
    setButtonIconColor,
    closeButtonSize,
    setCloseButtonSize,
    closeButtonIcon,
    setCloseButtonIcon,
    closeButtonIconColor,
    setCloseButtonIconColor,
    closeButtonColor,
    setCloseButtonColor,
}) => {
    const [showSketchColor, setShowSketchColor] = useState(false);

    const handleShowSketchColor = (id) => {
        if(!showSketchColor || showSketchColor !== id) {
            setShowSketchColor(id)
        } else {
            setShowSketchColor(false)
        }
    }

    const handleButtonColor = ({ hex }) => {
        setButtonColor(hex)
    }

    const handleCloseButtonColor = ({ hex }) => {
        setCloseButtonColor(hex)
    }

    const handleButtonIconColor = ({ hex }) => {
        setButtonIconColor(hex)
    }

    const handleCloseButtonIconColor = ({ hex }) => {
        setCloseButtonIconColor(hex)
    }

    const handleTitle = ({ target: { value } }) => {
        setTitle(value)
    }

    const handleTitleColor = ({ hex }) => {
        setTitleColor(hex)
    }

    const handlePosition = ({ target: { value } }) => {
        setPosition(value)
    }

    const handleButtonIcon = ({ target: { value } }) => {
        setButtonIcon(value)
    }

    const handleCloseButtonIcon = ({ target: { value } }) => {
        setCloseButtonIcon(value)
    }

    const handleButtonSize = ({ target: { value } }) => {
        setButtonSize(value)
    }

    const handleCloseButtonSize = ({ target: { value } }) => {
        setCloseButtonSize(value)
    }

    return (
        <Form>
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
            <span>Supported icons name: <a href="https://react.semantic-ui.com/elements/icon/" target="_blank" rel="noreferrer">React Semantic UI</a></span>
        </Form>
    )
}

PlayForm.propTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    position: PropTypes.string.isRequired,
    setPosition: PropTypes.func.isRequired,
    titleColor: PropTypes.string.isRequired,
    setTitleColor: PropTypes.func.isRequired,
    buttonIcon: PropTypes.string.isRequired,
    setButtonIcon: PropTypes.func.isRequired,
    buttonColor: PropTypes.string.isRequired,
    setButtonColor: PropTypes.func.isRequired,
    buttonSize: PropTypes.string.isRequired,
    setButtonSize: PropTypes.func.isRequired,
    buttonIconColor: PropTypes.string.isRequired,
    setButtonIconColor: PropTypes.func.isRequired,
    closeButtonSize: PropTypes.string.isRequired,
    setCloseButtonSize: PropTypes.func.isRequired,
    closeButtonIcon: PropTypes.string.isRequired,
    setCloseButtonIcon: PropTypes.func.isRequired,
    closeButtonIconColor: PropTypes.string.isRequired,
    setCloseButtonIconColor: PropTypes.func.isRequired,
    closeButtonColor: PropTypes.string.isRequired,
    setCloseButtonColor: PropTypes.func.isRequired,
}

export default PlayForm