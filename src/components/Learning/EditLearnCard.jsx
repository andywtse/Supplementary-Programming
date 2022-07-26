import { useState, useRef, useEffect } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

import { Modal, Box, Button, Typography, Backdrop, Fade, CardContent } from '@mui/material'


function EditLearnCard({learn, handleUpdateLearn, handleClose}) {
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState(learn)


	const formElement = useRef()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

	const handleSubmit = evt => {
		evt.preventDefault()
	  handleUpdateLearn(formData)
		handleClose()
	}




	return (
		<>
			<h1>Edit Learning Module</h1>
			<form ref={formElement} autoComplete="off">
      <Card sx={{ maxWidth: 275, }}>
        <CardContent>
          <div className="form-group mb-3">
					* = (required)
					<br/>
					<br/>
					  <label className="form-label">
						Header*
					</label>
					<input 
						type="text"
						className="form-control"
						name="header"
            value={formData.header}
            onChange={handleChange}
						required
					/>
				</div>
        <div className="form-group mb-3">
					<label className="form-label">
						Title*
					</label>
						<input 
							type="text"
							className="form-control"
							name="title"
              value={formData.title}
							onChange={handleChange}
							required
						/>
					</div>
        	<div className="form-group mb-3">
						<label className="form-label">
							Description*
						</label>
							<input 
								type="text"
								className="form-control"
								name="description"
                value={formData.description}
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
								name="url"
                value={formData.url}
								onChange={handleChange}
							/>
						</div>
        	</CardContent>
        </Card>
			</form>
			<CardActions>
        <Button 
				size="small" 
				type="submit"
				className="btn btn-primary btn-fluid"
				onClick={handleSubmit}
				>
					Add
				</Button>
      </CardActions>
		</>
	)
}


export default EditLearnCard