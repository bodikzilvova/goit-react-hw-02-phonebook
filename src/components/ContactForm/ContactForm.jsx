import { ContactFormStyle } from './ContactForm.styled'
import PropTypes from 'prop-types';

export const ContactForm = (props) => {
return <ContactFormStyle onSubmit={props.onSubmit}>{props.children}</ContactFormStyle>;
}

ContactForm.propTypes = {
    children: PropTypes.node.isRequired,
  };

