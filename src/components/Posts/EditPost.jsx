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
      <form ref={formElement} onSubmit={handleSubmit}>
        <div>
          <div>
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
          <div>
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