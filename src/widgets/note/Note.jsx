import { FrameTitle } from '@/entities/frame-title'
import { Table } from '@/entities/table'
import { Logo } from '@/shared/ui/logo'
import './Note.scss'

export const Note = () => {
  return (
    <div className="container">
      <FrameTitle title="Your notes!" />
      <Logo />
      <Table />
    </div>
  )
}

export default Note
