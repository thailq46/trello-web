import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import LightModeIcon from '@mui/icons-material/LightMode'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import Box from '@mui/material/Box'
import { useColorScheme } from '@mui/material/styles'

const ModeSelect = () => {
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

export default ModeSelect
