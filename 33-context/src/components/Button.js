import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Button({ children }) {
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  console.log(children); // sign up, sign in

  return <button className={className}>{children}</button>;
}
