import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'

const AppBar = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.light',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <ModeSelect></ModeSelect>
    </Box>
  )
}

export default AppBar
