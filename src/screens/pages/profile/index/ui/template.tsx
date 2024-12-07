import { Button } from '@mui/material'

export const Template = () => (
  <>
    <Button
      fullWidth
      color="error"
      onClick={() => {
        localStorage.removeItem('email')
        localStorage.removeItem('password')
        window.location.reload()
      }}
    >
      Выйти
    </Button>
  </>
)
