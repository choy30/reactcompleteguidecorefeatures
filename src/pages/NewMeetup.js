import React from "react";

import NewMeetupForm from "../componenets/meetups/NewMeetupForm";

const NewMeetup = () => {
    const addMettupHandler = (meetupData) => {

    }

	return (
		<section>
			<h1>Add New Meetup</h1>
			<NewMeetupForm onAddMeetup={addMettupHandler}/>
		</section>
	);
};

export default NewMeetup;
