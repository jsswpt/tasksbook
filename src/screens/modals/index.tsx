import { Modal } from '@mui/material'
import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { DeleteCategoryModal } from './delete-category'
import { DeleteTaskModal } from './delete-task'
import { EditCategoryModal } from './edit-category'
import { EditTaskModal } from './edit-task'
import { NewCategoryModal } from './new-category'
import { NewTaskModal } from './new-task'

import { session } from '@/entities'

const routesConfig: Record<string, () => JSX.Element> = {
  'delete-category': DeleteCategoryModal,
  'delete-task': DeleteTaskModal,
  'edit-category': EditCategoryModal,
  'edit-task': EditTaskModal,
  'new-category': NewCategoryModal,
  'new-task': NewTaskModal,
}

export const ModalRouter = () => {
  const [pagePath, modalPath] = useLocation().pathname.split('~')

  const navigate = useNavigate()

  const path = modalPath ? modalPath.slice(1, modalPath.length) : ''

  const Component = useMemo(
    () => (path in routesConfig ? routesConfig[path] : null),
    [path]
  )

  return (
    <session.AuthGuard>
      <Modal
        open={!!Component}
        onClose={() => navigate({ pathname: pagePath })}
        sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
      >
        {Component ? <Component /> : <></>}
      </Modal>
    </session.AuthGuard>
  )
}
