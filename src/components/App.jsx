import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";

export function App () {

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        textAlign: 'center',
        color: '#010101'
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ><div>
          <h1>Products</h1>
          <ContactForm />

        </div>
        <ContactList />
      </div>
    </div>
  );
};