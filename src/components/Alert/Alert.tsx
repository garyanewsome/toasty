import React, { useState, FC } from 'react'

import './Alert.css'

const theme: { [key: string]: string } = {
  error: '#ff0000',
  info: '#50bfe6',
  success: '#4CBB17',
  warning: '#ffaa1d',
}

const typeDisplay: { [key: string]: string } = {
  error: 'ERROR',
  info: 'INFO',
  success: 'SUCCESS',
  warning: 'WARNING',
}

export interface AlertProps {
  msg: string
  type: string
  color?: string
}
const Alert = ({ msg, type, color }: AlertProps) => {
  const [dismissed, setDismissed] = useState<boolean>(false)

  const getAlertTypeMsg = () => {
    let alertType: string = typeDisplay[type]

    if (!alertType) {
      alertType = typeDisplay['info']
    }

    return alertType
  }

  const getAlertColor = () => {
    let alertColor: string = color ? color : theme[type]

    if (!alertColor) {
      alertColor = theme['info']
    }

    return alertColor
  }

  if (dismissed) return null

  const errMsg = getAlertTypeMsg()

  return (
    <div className="alert" role="alert">
      <div className="header" style={{ backgroundColor: getAlertColor() }}>
        <div>{errMsg}</div>
        <button
          className="close"
          onClick={() => setDismissed(true)}
          aria-label="close"
        >
          <div>{'\u2715'}</div>
        </button>
      </div>
      <div className="content">
        <strong>{errMsg}</strong>: {msg}
      </div>
    </div>
  )
}

export default Alert
