import VpnLockIcon from '@mui/icons-material/VpnLock'
import FilterListIcon from '@mui/icons-material/FilterList'
import DashboardIcon from '@mui/icons-material/Dashboard'
import Chip from '@mui/material/Chip'
import Box from '@mui/material/Box'
import BoltIcon from '@mui/icons-material/Bolt'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddIcon from '@mui/icons-material/PersonAdd'

const MENU_STYLE = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '6px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

const BoardBar = () => {
  return (
    <Box
      sx={{
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingX: '15px',
        gap: 1,
        overflowX: 'auto',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          icon={<DashboardIcon />}
          label='Trello Web Board'
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<VpnLockIcon />}
          label='Publish/Private Workspaces'
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<AddToDriveIcon />}
          label='Add To Google Drive'
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<BoltIcon />}
          label='Automation'
          clickable
          sx={MENU_STYLE}
        />
        <Chip
          icon={<FilterListIcon />}
          label='Filters'
          clickable
          sx={MENU_STYLE}
        />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={3}
          sx={{
            gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&: first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='quangthai'>
            <Avatar alt='quangthai' src='https://source.unsplash.com/random' />
          </Tooltip>
          <Tooltip title='quangthai'>
            <Avatar alt='quangthai' src='https://source.unsplash.com/random' />
          </Tooltip>
          <Tooltip title='quangthai'>
            <Avatar alt='quangthai' src='https://source.unsplash.com/random' />
          </Tooltip>
          <Tooltip title='quangthai'>
            <Avatar alt='quangthai' src='https://source.unsplash.com/random' />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
