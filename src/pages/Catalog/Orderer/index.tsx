import styles from './Orderer.module.scss';
import dishes from './dishes.json';
import { useState } from 'react';
import classNames from 'classnames';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface Props {
    orderer: string;
    setOrderer: React.Dispatch<React.SetStateAction<string>>;
}

export function Orderer({orderer, setOrderer}: Props) {
  const [open, setOpen] = useState(false);
  const nameOrderer = orderer && dishes.find(option => option.value === orderer)?.name;
  return (
    <button
      className={classNames({
        [styles.orderer]: true,
        [styles['orderer--active']]: orderer !== '',
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameOrderer  || 'Order by'}</span>
      {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
      <div className={classNames({
        [styles.orderer__dishes]: true,
        [styles['orderer__dishes--active']]: open,
      })}>
        {dishes.map(option => (
          <div className={styles.orderer__option} key={option.value} onClick={() => setOrderer(option.value)}>
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}