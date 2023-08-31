import Workspaces from './Menus/Workspaces'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import TextField from '@mui/material/TextField'
import Templates from './Menus/Templates'
import SvgIcon from '@mui/material/SvgIcon'
import Starred from './Menus/Starred'
import Recent from './Menus/Recent'
import Profiles from './Menus/Profiles'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ModeSelect from '../ModeSelect'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Badge from '@mui/material/Badge'
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloIcon } from '~/assets/trello.svg'

const AppBar = () => {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 15px',
        gap: 2,
        overflowX: 'auto'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'primary.main' }}></AppsIcon>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: 'primary.main'
          }}
        >
          <SvgIcon component={TrelloIcon} fontSize='small' inheritViewBox />
          <Typography
            variant='span'
            sx={{
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}
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
          <Button variant='outlined' endIcon={<LibraryAddIcon />}>
            Create
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id='outlined-search'
          label='Search....'
          type='search'
          size='small'
          sx={{ minWidth: '120px' }}
        />
        <ModeSelect></ModeSelect>

        <Tooltip title='Notifications'>
          <Badge color='secondary' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsNoneIcon
              sx={{
                color: 'primary.main'
              }}
            />
          </Badge>
        </Tooltip>
        <Tooltip title='Help'>
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'primary.main' }} />
        </Tooltip>

        <Profiles />
      </Box>
    </Box>
  )
}
export default AppBar
