//* React Hooks *//
import { useState, useRef, useEffect } from 'react'

const AddPost = ({ handleAddPost }) => {
  //* State *//
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    replies: []
  })

  //* useRef *//
  const formElement = useRef()

  //* useEffect *//
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  //* Functions *//
  const handleChange = evt => setFormData({ ...formData, [evt.target.name]: evt.target.value })

  const handleSubmit = evt => {
    evt.preventDefault()
    handleAddPost(formData)
  }

  return (
    <>
      <form className="flex flex-col gap-6 pt-4" ref={formElement} onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="category-input">
              Title <span>*</span>
            </label>
            <input
              type="text"
              autoComplete='off'
              placeholder="Title"
              name="title"
              value={formData.title}
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="category-input">
              Content <span>*</span>
            </label>
            <textarea
              autoComplete='off'
              placeholder="Content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button onClick={() => handleSubmit}>
          SUBMIT
        </button>
      </form>
    </>
  )
}

export default AddPost