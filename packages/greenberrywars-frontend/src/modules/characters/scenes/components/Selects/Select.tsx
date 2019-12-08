import React from 'react';
import styled from '@emotion/styled';

interface IProps {
  children?: JSX.Element | JSX.Element[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: number | undefined;
}

const PrettySelect = styled.select`
  font-size: 16px;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  max-width: 300px;
  min-width: 210px;
  margin: 16px;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url('http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png'),
    linear-gradient(to bottom, #ffffff 0%, #ffffff 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
`;

const Select: React.FC<IProps> = props => {
  const { children, value, ...rest } = props;

  return (
    <PrettySelect {...rest} value={value}>
      <option value={''}>Select</option>
      {children}
    </PrettySelect>
  );
};

export default Select;
