import { NameFormFlex } from './NameForm.styled'
import PropTypes from 'prop-types';

export const NameForm = (props) => {
return <NameFormFlex>{props.children}</NameFormFlex>;
}


NameForm.propTypes = {
    children: PropTypes.node.isRequired,
  };