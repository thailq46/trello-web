import { useColorScheme } from '@mui/material/styles'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

const App = () => {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
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

      <Box
        sx={{
          backgroundColor: 'primary.dark',
          height: (theme) => theme.trello.boardBarHeight,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        Board Bar
      </Box>

      <Box
        sx={{
          width: '100%',
          height: (theme) =>
            `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'primary.main'
        }}
      >
        Board Content
      </Box>
    </Container>
  )
}

function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const handleChange = (event) => {
    const selectedMode = event.target.value
    setMode(selectedMode)
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='select-dark-light-mode'>Mode</InputLabel>
      <Select
        labelId='select-dark-light-mode'
        id='dark-light-mode'
        value={mode}
        label='Mode'
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1
            }}
          >
            <LightModeIcon fontSize='small' />
            <span>Light</span>
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2
            }}
          >
            <DarkModeOutlinedIcon fontSize='small' />
            <span>Dark</span>
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              columnGap: '10px'
            }}
          >
            <SettingsBrightnessIcon fontSize='small' />
            <span>System</span>
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
export default App
