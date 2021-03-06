import React from "react";
import { useHistory } from "react-router-dom";

import NewMeetupForm from "../componenets/meetups/NewMeetupForm";

const NewMeetup = () => {
	const history = useHistory();

	const addMettupHandler = (meetupData) => {
		fetch("https://react-http-a1d35-default-rtdb.firebaseio.com/meetups.json", {
			method: "POST",
			body: JSON.stringify(meetupData),
			headers: {
				"Content-Type": "application/json",
			},
		}).then(() => {
			history.replace("/");
		});
	};

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMettupHandler} />
		</section>
	);
};

export default NewMeetup;
