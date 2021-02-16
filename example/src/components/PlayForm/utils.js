import React from 'react'
import { POSITION_VALUES, SIZE_VALUES, TITLE_SIZE_VALUES } from './constants'

export const renderPositionOptions = () => (
    POSITION_VALUES.map((value) => <option value={value} key={value}>{value}</option>)
)

export const renderSizeOptions = () => (
    SIZE_VALUES.map((value) => <option value={value} key={value}>{value}</option>)
)

export const renderTitleSizeOptions = () => (
    TITLE_SIZE_VALUES.map((value) => <option value={value} key={value}>{value}</option>)
)