import React from 'react';
import Contact from './Contact';

class ContactsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			contacts: props.contacts
		};
	}

	updateSearch(event) {
		this.setState({search: event.target.value.substr(0,20)});
	}

	addContact(event) {
		event.preventDefault();
		let name = this.refs.name.value;
		let phone = this.refs.phone.value;
		let id = Math.floor((Math.random() * 100) + 1);
		this.setState({
			contacts: this.state.contacts.concat({id, name, phone})
		});
		this.refs.name.value = '';
		this.refs.phone.value = '';
	}

	render() {
		let filteredContacts = this.state.contacts.filter(
			(contact) => {
				return contact.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
			}
		);
		return (
			<div className='form-group row'>
				<div className='col-md-12'>
					<input type="text" 
					placeholder="Поиск"
						value={this.state.search} 
						onChange={this.updateSearch.bind(this)} />
				</div>
					<form onSubmit={this.addContact.bind(this)}>
						<div className='col-md-5'>
							<input placeholder="Имя" type="text" ref="name" />
						</div>
						<div className='col-md-5'>
							<input placeholder="Телефон" type="text" ref="phone" />
						</div>
						<div className='col-md-2 col-xs-6'>
							<button className='btn btn-default' type="submit">+</button>
						</div>
					</form>	
				<div className='col-md-12'>
					<ul>
						{filteredContacts.map((contact)=> {
							return <Contact contact={contact} key={contact.id}/>
						})}
					</ul>
				</div>

			</div>
		)
	}
}

export default ContactsList;