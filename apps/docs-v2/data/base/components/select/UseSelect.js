import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useSelect, { SelectProvider } from '@mui/base/useSelect';
import useOption from '@mui/base/useOption';
import { styled } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

export default function UseSelect() {
  return <CustomSelect placeholder="Select a color…" options={options} />;
}

const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const Root = styled('div')`
  position: relative;
`;

const Toggle = styled('button')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  position: relative;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  box-shadow: 0 0 0 2px var(--color) inset;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? grey[600] : grey[200]};
  }

  & > svg {
    font-size: 1rem;
    position: absolute;
    height: 100%;
    top: 0;
    right: 10px;
  }
  `,
);

const Listbox = styled('ul')(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 320px;
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  padding: 5px;
  margin: 5px 0 0 0;
  position: absolute;
  height: auto;
  width: 100%;
  overflow: auto;
  z-index: 1;
  outline: 0px;
  list-style: none;

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.4s ease, visibility 0.4s step-end;
  }
  `,
);

const Option = styled('li')(
  ({ theme }) => `
  padding: 8px;
  border-radius: 0.45em;

  &[aria-selected='true'] {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &.highlighted,
  &:hover {
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &[aria-selected='true'].highlighted {
    background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
    color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
  }

  &:before {
    content: '';
    width: 1ex;
    height: 1ex;
    margin-right: 1ex;
    background-color: var(--color);
    display: inline-block;
    border-radius: 50%;
    vertical-align: middle;
  }
  `,
);

function renderSelectedValue(value, options) {
  const selectedOption = options.find((option) => option.value === value);

  return selectedOption ? `${selectedOption.label} (${value})` : null;
}

function CustomOption(props) {
  const { children, value, className, disabled = false } = props;
  const { getRootProps, highlighted } = useOption({
    value,
    disabled,
    label: children,
  });

  return (
    <Option
      {...getRootProps()}
      className={clsx({ highlighted }, className)}
      style={{ '--color': value }}
    >
      {children}
    </Option>
  );
}

CustomOption.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

function CustomSelect({ options, placeholder }) {
  const listboxRef = React.useRef(null);
  const [listboxVisible, setListboxVisible] = React.useState(false);

  const { getButtonProps, getListboxProps, contextValue, value } = useSelect({
    listboxRef,
    onOpenChange: setListboxVisible,
    open: listboxVisible,
  });

  React.useEffect(() => {
    if (listboxVisible) {
      listboxRef.current?.focus();
    }
  }, [listboxVisible]);

  return (
    <Root>
      <Toggle {...getButtonProps()} style={{ '--color': value }}>
        {renderSelectedValue(value, options) || (
          <span className="placeholder">{placeholder ?? ' '}</span>
        )}

        <UnfoldMoreRoundedIcon />
      </Toggle>
      <Listbox
        {...getListboxProps()}
        aria-hidden={!listboxVisible}
        className={listboxVisible ? '' : 'hidden'}
      >
        <SelectProvider value={contextValue}>
          {options.map((option) => {
            return (
              <CustomOption key={option.value} value={option.value}>
                {option.label}
              </CustomOption>
            );
          })}
        </SelectProvider>
      </Listbox>
    </Root>
  );
}

CustomSelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
};

const options = [
  {
    label: 'Red',
    value: '#D32F2F',
  },
  {
    label: 'Green',
    value: '#4CAF50',
  },
  {
    label: 'Blue',
    value: '#2196F3',
  },
];
