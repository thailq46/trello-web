import Box from '@mui/material/Box'
import ListColumns from './ListColumns/ListColumns'
import { mapOrder } from '~/utils/sorts'
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor
} from '@dnd-kit/core'
import { useEffect, useState } from 'react'
import { arrayMove } from '@dnd-kit/sortable'

const BoardContent = ({ board }) => {
  const [orderedColumnsState, setOrderedColumnsState] = useState([])

  // Yêu cầu chuột di chuyển 10px thì mới kích hoạt event, fix trường hợp click bị gọi event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 }
  })
  //Nhấn giữ 250ms và dung sai của cảm ứng(dễ hiểu là di chuyển/chênh lệch 5px) thì mới kích hoạt event
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 }
  })
  // Ưu tiên sử dụng kết hợp 2 loại sensors là mouse và touch để có trải nghiệm trên mobile tốt nhất, không bị bug
  const sensors = useSensors(mouseSensor, touchSensor)

  useEffect(() => {
    const orderedColumns = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      '_id'
    )
    setOrderedColumnsState(orderedColumns)
  }, [board])

  const handleDragEnd = (event) => {
    console.log('handleDragEnd ~ event', event)
    const { active, over } = event

    //Kiểm tra nếu không tồn tại over (kéo linh tinh ra ngoài thì return luôn tránh lỗi)
    if (!over) return

    // Nếu vị trí sau khi kéo thả khác với vị trí ban đầu
    if (active.id !== over.id) {
      //Lấy vị trí cũ (từ thằng active)
      const oldIndex = orderedColumnsState.findIndex((c) => c._id === active.id)
      //Lấy vị trí mới (từ thằng over)
      const newIndex = orderedColumnsState.findIndex((c) => c._id === over.id)
      const dndOrderedColumns = arrayMove(
        orderedColumnsState,
        oldIndex,
        newIndex
      )
      // const dndOrderedColumnsIds = dndOrderedColumns.map((c) => c._id)
      setOrderedColumnsState(dndOrderedColumns)
    }
  }

  return (
    // onDragEnd sau khi kết thúc hành động kéo thả
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          display: 'flex',
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? '#34495e' : '#1976d2',
          p: '10px 0'
        }}
      >
        <ListColumns columns={orderedColumnsState}></ListColumns>
      </Box>
    </DndContext>
  )
}

export default BoardContent
