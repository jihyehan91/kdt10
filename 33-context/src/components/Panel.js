import { useContext } from 'react';
import { ThemeContext } from '../App';

export default function Panel({ title, children }) {
  // children = props.children
  // title = props.title

  console.log('panel', children);
  // context
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;

  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}
