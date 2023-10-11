import React from 'react';
import {Contact} from '../Contact/Contact';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <div>
    {contacts.map((contact) => (
      <div key={contact.id}>
        <Contact name={contact.name} number={contact.number} />
        <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
      </div>
    ))}
  </div>
);

