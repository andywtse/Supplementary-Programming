import { useState, useRef, useEffect } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as learningService from '../../services/learningService.js'


function AddLearnCard(props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
		title: '',
		body: '',
    url:'',
	})


  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

	const handleSubmit = evt => {
		evt.preventDefault()
	  props.handleAddLearn(formData)
    console.log('This WORKS?')
	}


  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

	return (
		<>
			<h1>Add Puppy</h1>
			<form autoComplete="off" ref={formElement}>

      <Card sx={{ maxWidth: 275, height: 200 }}>
        <CardContent>
          <div className="form-group mb-3">
					  <label className="form-label">
						Card Title (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="learn-card-input"
						name="title"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
        <div className="form-group mb-3">
					<label htmlFor="breed-input" className="form-label">
						Description
					</label>
					<input 
						type="text"
						className="form-control"
						id="breed-input"
						name="description"
            value={formData.breed}
            onChange={handleChange}
						required
					/>
				</div>
        <div className="form-group mb-4">
					<label htmlFor="age-input" className="form-label">
						URL
					</label>
					<input 
						type="text"
						className="form-control"
						id="age-input"
						name="url"
            value={formData.age}
            onChange={handleChange}
					/>
				</div>
        </CardContent>
        </Card>
			</form>
          <button
						type="submit"
						className="btn btn-primary btn-fluid"
						disabled={!validForm}
            onClick={handleSubmit}
					>
						Add Learn Card
					</button>
		</>
	)
}


export default AddLearnCard