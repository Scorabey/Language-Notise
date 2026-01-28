import { NotesContext } from '@/shared/model/context/NotesContext'
import { Item } from '@/shared/ui/Item/Item'
import { useContext, useState } from 'react'
import 'swiper/css'
import { Controller, FreeMode, Mousewheel, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Wrapper.scss'

export const Wrapper = () => {
  const { notes, deleteNote, toggleRename, activeEdit, filteredNotes } =
    useContext(NotesContext)

  const [swiper1, setSwiper1] = useState(null)
  const [swiper2, setSwiper2] = useState(null)
  const [swiper3, setSwiper3] = useState(null)

  if (swiper3) swiper3.update() // I need only setSwiper3 but swiper3 dont use

  const swiperSettings = {
    className: 'swiper-wrapper',
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 8,
    speed: 100,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 0.4,
      releaseOnEdges: true,
      smoothScroll: true,
    },
    freeMode: {
      enabled: true,
      momentum: true,
    },
  }

  return (
    <>
      <div className="wrapper">
        {notes.length === 0 ? (
          <span className="is-Empty">Empty list</span>
        ) : (
          <Swiper
            modules={[Controller, Mousewheel, FreeMode]}
            onSwiper={setSwiper1}
            controller={{ control: swiper2 }}
            {...swiperSettings}
          >
            {(filteredNotes ?? notes).map((note) => (
              <SwiperSlide className="swiper-item" key={note.id}>
                <Item
                  deleteNote={() => deleteNote(note.id)}
                  toggle={() => toggleRename(note.id, 'Original')}
                  isActive={
                    activeEdit.id === note.id && activeEdit.field === 'Original'
                  }
                  field="Word"
                  id={note.id}
                  value={note.Word}
                  title={!note.Word.trim() === '' ? note.Word : 'New word'}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="wrapper">
        {notes.length === 0 ? (
          <span className="is-Empty">Empty list</span>
        ) : (
          <Swiper
            modules={[Controller, Mousewheel, FreeMode]}
            onSwiper={setSwiper2}
            controller={{ control: swiper1 }}
            {...swiperSettings}
          >
            {(filteredNotes ?? notes).map((note) => (
              <SwiperSlide className="swiper-item" key={note.id}>
                <Item
                  isHidden={true}
                  deleteNote={() => deleteNote(note.id)}
                  toggle={() => toggleRename(note.id, 'Translate')}
                  isActive={
                    activeEdit.id === note.id &&
                    activeEdit.field === 'Translate'
                  }
                  field="Translate"
                  id={note.id}
                  value={note.Translate}
                  title={
                    !note.Translate.trim() === ''
                      ? note.Translate
                      : 'Translate your word'
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      <div className="wrapper">
        {notes.length === 0 ? (
          <span className="is-Empty">Empty list</span>
        ) : (
          <Swiper
            modules={[Controller, Scrollbar, Mousewheel, FreeMode]}
            onSwiper={setSwiper3}
            controller={{ control: swiper1 }}
            scrollbar={{
              draggable: true,
              hide: false,
            }}
            {...swiperSettings}
          >
            {(filteredNotes ?? notes).map((note) => (
              <SwiperSlide className="swiper-item" key={note.id}>
                <Item
                  deleteNote={() => deleteNote(note.id)}
                  toggle={() => toggleRename(note.id, 'Tag')}
                  isActive={
                    activeEdit.id === note.id && activeEdit.field === 'Tag'
                  }
                  field="Tag"
                  id={note.id}
                  value={note.Tag}
                  title={!note.Tag.trim() === '' ? note.Tag : 'New tag'}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </>
  )
}

export default Wrapper
