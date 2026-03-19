import React, { useState } from 'react';
import { NavigationConfig } from '@gadagi/types';
import { NavItem } from './NavItem';
import './Navigation.css';

interface NavigationProps {
  config: NavigationConfig;
  defaultCollapsed?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  config,
  defaultCollapsed = false,
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <nav className={`navigation ${collapsed ? 'navigation--collapsed' : ''}`}>
      <button
        type="button"
        onClick={() => setCollapsed(c => !c)}
        className={`navigation__toggle ${collapsed ? 'navigation__toggle--collapsed' : ''}`}
        title={collapsed ? 'Expand' : 'Collapse'}
      >
        {collapsed ? '->' : '<-'}
      </button>

      {config.items.map((item) => (
        <NavItem key={item.id} item={item} collapsed={collapsed} />
      ))}
    </nav>
  );
};
