import Workspaces from './Menus/Workspaces'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import TextField from '@mui/material/TextField'
import Templates from './Menus/Templates'
import SvgIcon from '@mui/material/SvgIcon'
import Starred from './Menus/Starred'
import SearchIcon from '@mui/icons-material/Search'
import Recent from './Menus/Recent'
import Profiles from './Menus/Profiles'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ModeSelect from '../ModeSelect/ModeSelect'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import CloseIcon from '@mui/icons-material/Close'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import AppsIcon from '@mui/icons-material/Apps'
import { useState } from 'react'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'

const AppBar = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 15px',
        gap: 2,
        overflowX: 'auto',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }}></AppsIcon>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: 'white'
          }}
        >
          <SvgIcon component={TrelloIcon} fontSize='small' inheritViewBox />
          <Typography
            variant='span'
            sx={{ fontSize: '1.2rem', fontWeight: 'bold' }}
          >
            Trello
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 1
          }}
        >
          <Workspaces></Workspaces>
          <Recent></Recent>
          <Starred></Starred>
          <Templates></Templates>
          <Button
            variant='outlined'
            endIcon={<LibraryAddIcon />}
            sx={{
              color: 'white',
              border: 'none',
              '&:hover': {
                border: 'none'
              }
            }}
          >
            Create
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id='outlined-search'
          label='Search....'
          type='text'
          size='small'
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' }
            }
          }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                sx={{
                  color: searchValue ? 'white' : 'transparent',
                  cursor: 'pointer'
                }}
                fontSize='small'
                onClick={() => setSearchValue('')}
              />
            )
          }}
        />
        <ModeSelect></ModeSelect>

        <Tooltip title='Notifications'>
          <Badge color='warning' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title='Help'>
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'white' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}
export default AppBar
