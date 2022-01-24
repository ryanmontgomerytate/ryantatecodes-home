import React from 'react'
import { List, Modal, TaskBar } from '@react95/core'
import { ReaderClosed, WindowsExplorer } from '@react95/icons'
import { useState } from 'react'

export const WindowsBar: React.FC = () => {
  const [first, toggleFirst] = useState(false)
  const [second, toggleSecond] = useState(false)

  const closeFirst = () => toggleFirst(false)
  const closeSecond = () => toggleSecond(false)

  return (
    <>
      {first && (
        <Modal
          icon={<WindowsExplorer variant="16x16_4" />}
          title="Windows Explorer"
          closeModal={closeFirst}
          width="300"
          height="200"
        />
      )}

      {second && (
        <Modal
          defaultPosition={{ x: 50, y: 50 }}
          width="300"
          height="200"
          icon={<ReaderClosed variant="16x16_4" />}
          title="Local Disk (C:)"
          closeModal={closeSecond}
        />
      )}

      <TaskBar
        list={
          <List>
            <List.Item
              icon={<ReaderClosed variant="32x32_4" />}
              onClick={() => toggleSecond(true)}
            >
              Local Disk (C:)
            </List.Item>
            <List.Item
              icon={<WindowsExplorer variant="32x32_4" />}
              onClick={() => {
                toggleFirst(true)
              }}
            >
              Windows Explorer
            </List.Item>
          </List>
        }
      />
    </>
  )
}
