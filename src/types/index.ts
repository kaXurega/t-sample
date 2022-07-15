// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

import { ReactNode } from 'react';

export type User = {
  id: number;
  name: string;
};

export type LayoutProps = {
  title?: string;
  description?: string;
  children?: ReactNode;
};

export type IFormInputs = {
  email?: string;
  free?: string;
};
