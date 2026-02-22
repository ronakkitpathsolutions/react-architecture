'use client';

import * as React from 'react';
import { Direction } from 'radix-ui';

type Dir = 'ltr' | 'rtl';

function DirectionProvider({
  dir,
  children,
}: {
  dir: Dir;
  children: React.ReactNode;
}) {
  return (
    <Direction.DirectionProvider dir={dir}>
      {children}
    </Direction.DirectionProvider>
  );
}

const useDirection = Direction.useDirection;

export { DirectionProvider, useDirection };
export type { Dir };
