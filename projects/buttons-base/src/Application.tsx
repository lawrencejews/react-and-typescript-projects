import * as React from 'react';

type ButtonOwnProps< E extends React.ElementType = React.ElementType> = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  destructive?: boolean;
  as: E;
};

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> & 
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps>


type PrimaryButtonProps = ButtonProps & { primary: boolean, secondary?: never; destructive?: never;};
type SecondaryButtonProps = ButtonProps & { secondary: boolean, primary?: never; destructive?: never; };
type DestructiveButtonProps = ButtonProps & { destructive: boolean, secondary?: never; primary?:never};

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + ' ';
  }
  return classNames.trim();
};

const Button = ({
  children,
  primary = false,
  secondary = false,
  destructive = false

}: PrimaryButtonProps | SecondaryButtonProps | DestructiveButtonProps) => {
  const classNames = createClassNames({ primary, secondary, destructive });

  return <button className={classNames}>{children}</button>;
};

const Application = () => {
  return (
    <main>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button destructive>Destructive</Button>
    </main>
  );
};

export default Application;
