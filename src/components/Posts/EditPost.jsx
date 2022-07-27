//* React Hooks *//
import { useState, useRef, useEffect } from 'react'

const EditPost = ({ post, handleUpdatePost }) => {
  //* State *//
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState(post)

  //* useRef *//
  const formElement = useRef()
  
  //* useEffect *//
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])
  
  //* Functions *//
  function handleChange(evt) {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
    
  const handleSubmit = evt => {
		evt.preventDefault()
    handleUpdatePost(formData)
	}

  return (
    <>
      <form className="flex flex-col gap-6 pt-4" ref={formElement} onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label>
              Title <span>*</span>
            </label>
            <input 
              type="title" 
              name="title"
              value={formData.title}
              required
              onChange={handleChange} 
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>
              Content <span>*</span>
            </label>
            <input 
              type="text"
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

export default EditPost