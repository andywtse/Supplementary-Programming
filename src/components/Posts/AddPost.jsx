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
      <form ref={formElement} className="" onSubmit={handleSubmit}>
        <div className="">
          <div className="">
            {/* <label htmlFor="title-input">
              Title
            </label> */}
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
          <div className="">
            {/* <label htmlFor="content-input">
              Content
            </label> */}
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