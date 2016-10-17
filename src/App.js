import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
	id: 1,
	name: 'Niall',
	phone: '+7 000 123 45 67'
}, {
	id: 2,
	name: 'Scott',
	phone: '+7 111 123 45 67'
}, {
	id: 3,
	name: 'Sarah',
	phone: '+7 222 123 45 67'
}, {
	id: 4,
	name: 'Tim',
	phone: '+7 333 123 45 67'
}]

class App extends React.Component {
	render() {
		return (
			<div>
				<h1>Contacts List</h1>
				<ContactsList contacts={this.props.contacts}/>
			</div>
		)
	}
}

render(<App contacts={contacts} />, document.getElementById('app'));