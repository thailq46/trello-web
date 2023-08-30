import Box from '@mui/material/Box'

const BoardContent = () => {
  return (
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
  )
}

export default BoardContent
