import styled from 'styled-components';
import { Device } from '../../Utils/Device';
import { Colors } from '../../Utils/Colors';

export const TinyText = styled.p`
font-size: .5em;
margin: 0;
position: relative;
top: 3px;
left: 11px;
color: ${({ theme }) => Colors(theme).PrimaryFont};
`;
TinyText.displayName = 'TinyText';

export const SwitchToggle = styled.div`
position: relative;
bottom: 17px;
margin-left: 23px;
display: block;


  /* Switch starts here */
  .rocker {
    display: inline-block;
    position: relative;
    font-size: .5em;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: #888;
    width: 7em;
    height: 4em;
    overflow: hidden;
    right: 5px;
  }

  .rocker-small {
    font-size: 0.75em;
    margin: 1em;
  }

  .rocker::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #999;
    border-bottom: 0;
  }

  .rocker input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .switch-left,
  .switch-right {
    cursor: pointer;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5em;
    width: 3em;
    transition: 0.2s;
  }

  .switch-left {
    height: 2.4em;
    width: 2.75em;
    left: 0.85em;
    bottom: 0.4em;
    background-color: #ddd;
    transform: rotate(15deg) skewX(15deg);
  }

  .switch-right {
    right: 0.5em;
    bottom: 0;
    background-color: #797878;
    color: #fff;
  }

  .switch-left::before,
  .switch-right::before {
    content: "";
    position: absolute;
    width: 0.4em;
    height: 2.45em;
    bottom: -0.45em;
    background-color: #ccc;
    transform: skewY(-65deg);
  }

  .switch-left::before {
    left: -0.4em;
  }

  .switch-right::before {
    right: -0.375em;
    background-color: transparent;
    transform: skewY(65deg);
  }

  input:checked + .switch-left {
    background-color: #30364c;
    color: #fff;
    bottom: 0px;
    left: 0.5em;
    height: 2.5em;
    width: 3em;
    transform: rotate(0deg) skewX(0deg);
  }

  input:checked + .switch-left::before {
    background-color: transparent;
    width: 3.0833em;
  }

  input:checked + .switch-left + .switch-right {
    background-color: #ddd;
    color: #888;
    bottom: 0.4em;
    right: 0.8em;
    height: 2.4em;
    width: 2.75em;
    transform: rotate(-15deg) skewX(-15deg);
  }

  input:checked + .switch-left + .switch-right::before {
    background-color: #ccc;
  }

  /* Keyboard Users */
  input:focus + .switch-left {
    color: #333;
  }

  input:checked:focus + .switch-left {
    color: #fff;
  }

  input:focus + .switch-left + .switch-right {
    color: #fff;
  }

  input:checked:focus + .switch-left + .switch-right {
    color: #333;
  }
`;
SwitchToggle.displayName = 'SwitchToggle';