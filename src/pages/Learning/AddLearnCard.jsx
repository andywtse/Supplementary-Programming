import { useState, useRef, useEffect } from "react"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function AddLearnCard(props) {
  const formElement = useRef()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
		header:'',
		title: '',
		description: '',
    url:'',
	})


  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

	const handleSubmit = evt => {
		evt.preventDefault()
	  props.handleAddLearn(formData)
	}


	return (
		<>
			<h1>Add Puppy</h1>
			<form autoComplete="off">
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


export default AddLearnCard