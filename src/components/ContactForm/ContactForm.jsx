import { nanoid } from "nanoid";
import * as Yup from 'yup';
import { Form, Formik, Field, ErrorMessage, Label, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from "react-redux";
import { addContact } from '../../redux/Contacts/slice';

export function ContactForm() {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts);

    const getValues = (inputValues) => {
        if (inputValues.name === '' || inputValues.number === '') {
            return;
        } else if (contacts.find((contact) => {
            return contact.name === inputValues.name;
        })) {
            return alert(`${inputValues.name} we have it in list`);
        } else {
            const contact = {
                name: inputValues.name,
                number: inputValues.number,
                id: nanoid(),
            };
            
            dispatch(addContact(contact));
            inputValues.name = '';
            inputValues.number = '';
            };
    };

        const values = {
            name: '',
            number: '',
        };
        
        const phoneSchema = Yup.number()
            .typeError("That doesn't look like quantity...")
            .positive("quantity can't be negative")
            .integer("A phone number can't include a decimal point")
            .min(1)
            .required('Quantity is required...');
        
        const validationSchema = Yup.object({
            name: Yup.string().required(),
            number: phoneSchema,
        });

        const submitForm = (values) => {
           getValues(values);
        };
        
    
        return (
            <Formik
                initialValues={values}
                onSubmit={submitForm}
                validationSchema={validationSchema}
            >
                <Form>
                    <Label>Name<Field name="name" /><ErrorMessage name="name" component="p" /></Label>
                    <Label>Quantity<Field name="number" /><ErrorMessage name="number" type="number" component="p" /></Label>
                    <Button type="submit">add </Button>
                </Form>
            </Formik>
        );
    };