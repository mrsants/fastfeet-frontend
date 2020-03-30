import React from 'react';
import PropTypes from 'prop-types';
import { StyledPopover } from './styles';

export default function Popover({
  id,
  open,
  anchorEl,
  call,
  children,
  width,
  height,
}) {
  return (
    <StyledPopover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={call}
      className="popover"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      width={width}
      height={height}
    >
      {children}
    </StyledPopover>
  );
}

Popover.propTypes = {
  id: PropTypes.string,
  open: PropTypes.bool,
  anchorEl: PropTypes.shape({}),
  call: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

Popover.defaultProps = {
  id: null,
  open: false,
  anchorEl: null,
};
