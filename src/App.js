import React from 'react';
import {render} from 'react-dom';
import ContactsList from './ContactsList';

let contacts = [{
	id: 1,
	name: 'Наташа',
	phone: '+7 000 123 45 67'
}, {
	id: 2,
	name: 'Саша',
	phone: '+7 111 123 45 67'
}, {
	id: 3,
	name: 'Маша',
	phone: '+7 222 123 45 67'
}, {
	id: 4,
	name: 'Даша',
	phone: '+7 333 123 45 67'
}, {
	id: 5,
	name: 'Каша',
	phone: '+7 444 123 45 67'
}]

class App extends React.Component {
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<div className='col-md-offset-3 col-md-6 col-xs-12'>
						<h1>Список контактов</h1>
						<ContactsList contacts={this.props.contacts}/>
					</div>
				</div>
			</div>
		)
	}
}

render(<App contacts={contacts} />, document.getElementById('app'));