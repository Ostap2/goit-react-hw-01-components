import { Container } from 'components/Utils/Utils-styled';
import { Item, List } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = props => {
  return (
    <Container>
      <h2>{props.title}</h2>
      <List>
        {props.stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <span>{label}</span>
              <span>{percentage}%</span>
            </Item>
          );
        })}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
