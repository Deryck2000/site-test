// components/ScrollableContainer.js
import PropTypes from 'prop-types';
import styles from './ScrollableContainer.module.css';

const ScrollableContainer = ({ children, height }) => {
  return (
    <div className={styles.container} style={{ height }}>
      {children}
    </div>
  );
};

ScrollableContainer.propTypes = {
  children: PropTypes.node.isRequired,
  height: PropTypes.string.isRequired,
};

export default ScrollableContainer;
