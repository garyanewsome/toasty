import React, { useState, FC } from 'react'

import './Toast.css'

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

export interface ToastProps {
  msg: string
  type: string
  color?: string
}
const Toast = ({ msg, type, color }: ToastProps) => {
  console.log('HELLO THERE')
  const [dismissed, setDismissed] = useState<boolean>(false)

  const getToastTypeMsg = () => {
    console.log('SOMETHINGS PLEASE')
    let toastType: string = typeDisplay[type]

    if (!toastType) {
      toastType = typeDisplay['info']
    }

    return toastType
  }

  const getToastColor = () => {
    let toastColor: string = color ? color : theme[type]

    if (!toastColor) {
      toastColor = theme['info']
    }

    return toastColor
  }

  if (dismissed) return null

  return (
    <div
      className="toast"
      style={{ backgroundColor: getToastColor() }}
      role="alert"
    >
      <button
        className="close"
        onClick={() => setDismissed(true)}
        aria-label="close"
      >
        <div>{'\u2715'}</div>
      </button>
      <div>
        <strong>{getToastTypeMsg()}</strong>: {msg}
      </div>
    </div>
  )
}

export default Toast
