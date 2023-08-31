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
    <FormControl sx={{ minWidth: 120 }} size='small'>
      <InputLabel
        id='select-dark-light-mode'
        sx={{ color: 'white', '&.Mui-focused': { color: 'white' } }}
      >
        Mode
      </InputLabel>
      <Select
        labelId='select-dark-light-mode'
        id='dark-light-mode'
        value={mode}
        label='Mode'
        onChange={handleChange}
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'white'
          },
          '.MuiSvgIcon-root': { color: 'white' }
        }}
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
              gap: 1
            }}
          >
            <DarkModeOutlinedIcon fontSize='small' />
            <span>Dark</span>
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1
            }}
          >
            <SettingsBrightnessIcon fontSize='small' />
            <span>System</span>
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
