/* eslint-disable react/jsx-props-no-spreading */
import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/display-name
const Page = forwardRef(({ title, children, ...rest }, ref) => (
  <div
    ref={ref}
    {...rest}
  >
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
));

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Page;
