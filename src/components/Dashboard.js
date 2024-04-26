import React, {useEffect, useState, Component} from "react";
import { useNavigate } from "react-router-dom";
import {AppBar, Box, Button, Dialog, DialogTitle, Grid, Link, ListItem, Tab, Tabs, Typography} from '@mui/material';
import TopBar from "./TopBar";
import Intro from "./Intro";
//import SignIn from "SignIn";

function Dashboard() {
	const navigate = useNavigate();

    const goToFormRoute = () => {
		let path = '/form';
		navigate(path);
	}

	return (
		<>
			<TopBar/>
			<div className="outer-container">
				<div className="inner-container">
					<Grid container spacing={2} direction="row" style={{ display: "flex", gap: "2rem", justifyContent:"flex-start" }}>
						<Grid item xs={5} >
							<Box className="intro">
								<Intro />
							</Box>
						</Grid>
						<Grid item xs={6} >
							<Box className="form">
                            <div className="preview-button align-right">
                                <Button variant="contained" onClick={goToFormRoute}> View Form </Button>
                            </div>
							</Box>
						</Grid>
					</Grid>
				</div>
			</div>
		</>
	)
}

export default Dashboard;
