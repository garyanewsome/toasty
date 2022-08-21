import React, { useState, FC } from 'react'

import './Notification.css'

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

export interface NotificationProps {
  msg: string
  type: string
  color?: string
}
const Notification = ({ msg, type, color }: NotificationProps) => {
  const [dismissed, setDismissed] = useState<boolean>(false)

  const getNotificationTypeMsg = () => {
    let notificationType: string = typeDisplay[type]

    if (!notificationType) {
      notificationType = typeDisplay['info']
    }

    return notificationType
  }

  const getNotificationColor = () => {
    let notificationColor: string = color ? color : theme[type]

    if (!notificationColor) {
      notificationColor = theme['info']
    }

    return notificationColor
  }

  if (dismissed) return null

  return (
    <div
      className="notification"
      style={{ backgroundColor: getNotificationColor() }}
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
        <strong>{getNotificationTypeMsg()}</strong>: {msg}
      </div>
    </div>
  )
}

export default Notification
