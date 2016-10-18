import React from 'react';

const Contact = ({contact}) =>
	<li>
		{contact.name} <span>{contact.phone}</span>
	</li>

export default Contact;