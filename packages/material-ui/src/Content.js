import PropTypes from 'prop-types';
import React from 'react';
import Flexbox from 'flexbox-react';
import Paper from 'material-ui/Paper';

const style = {
  minWidth: 350,
  padding: 40,
  backgroundColor: '#f7f7f7',
  marginBottom: 20,
};

const Content = ({ children, noPaper }) =>
  (noPaper ?
    <div style={style}>
      <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
        {children}
      </Flexbox>
    </div>
    :
    <Paper
      style={style}
    >
      <Flexbox flexDirection="column" justifyContent="center" alignItems="center">
        {children}
      </Flexbox>
    </Paper>);

Content.propTypes = {
  children: PropTypes.node,
  noPaper: PropTypes.bool,
};

Content.defaltProps = {
  noPaper: false,
};

export default Content;
