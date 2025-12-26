import { statuses } from '../mocks/data';
import './Header.css';
import React from 'react';

const HeaderTitle = (props) => {
    return <div>{props.title}</div>;
}

const Status = (props) => {
    
    const [status, setStatus] = React.useState(props.status);
    const [showOptions, setShowOptions] = React.useState(false);
    const [options, setOptions] = React.useState(statuses.filter(s => s !== status));

    console.log(options);

    const optionClickHandler = (option) => {
        setStatus(option);
        setShowOptions(false);
        setOptions(statuses.filter(s => s !== option));
    }

    return (<div>
        <div onClick={() => setShowOptions(!showOptions)}>Status: {status}</div>
        {
            showOptions 
            && options.map(
                option => <div key={option} onClick={() => optionClickHandler(option)}>
                    {option}
                </div>
            )
        }
        </div>);
}

const Header = (props) => {
  return (
      <header className="Header">
        <HeaderTitle title={props.title} />
        <Status status={props.status} />
    </header>
  )
}

export default Header
