import React from 'react';
import {Typography} from '@mui/material';

export default function Intro() {
	return(
		<div className="intro">
			<div className="major-text">
				<Typography variant="h3" palette="primary.main">
					Diamond
				</Typography>
			</div>
			<div className="minor-text">
				<Typography variant="h6" palette="primary.light" >
                Democratizing Large Neural Network Model Training for Science
				</Typography>
			</div>

		</div>
	);

}
