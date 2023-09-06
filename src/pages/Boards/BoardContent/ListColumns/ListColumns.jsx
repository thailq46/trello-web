import Box from '@mui/material/Box'
import Column from './Column/Column'
import Button from '@mui/material/Button'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import {
  SortableContext,
  horizontalListSortingStrategy
} from '@dnd-kit/sortable'

const ListColumns = ({ columns }) => {
  /**
   * Thằng SortableContext yêu cầu items là 1 array dạng ['id-1','id-2'] chứ không phải [{id: 'id-1'},{id: 'id-2'}]
   * Nếu không đúng thì vẫn kéo thả đc nhưng không có animation
   * https://github.com/clauderic/dnd-kit/issues/183#issuecomment-812569512
   */
  return (
    <SortableContext
      items={columns?.map((col) => col._id)}
      strategy={horizontalListSortingStrategy}
    >
      <Box
        sx={{
          overflowX: 'auto',
          overflowY: 'hidden',
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          '&::-webkit-scrollbar-track': { m: 2 }
        }}
      >
        {columns?.map((col) => (
          <Column key={col._id} column={col}></Column>
        ))}

        {/* Box Add new column CTA */}
        <Box
          sx={{
            minWidth: '200px',
            maxWidth: '200px',
            mx: 2,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d'
          }}
        >
          <Button
            startIcon={<NoteAddIcon />}
            sx={{
              color: 'white',
              width: '100%',
              justifyContent: 'flex-start',
              pl: 2.5,
              py: 1
            }}
          >
            Add new column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns
