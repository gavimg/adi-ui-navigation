import React, { useState } from 'react';
import { NavigationConfig } from '@gadagi/types';
import { colors, typography } from '@gadagi/design-system';
import { NavItem } from './NavItem';

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
    <nav
      style={{
        width: collapsed ? '56px' : '240px',
        minHeight: '100vh',
        background: '#fff',
        borderRight: `1px solid ${colors.neutral[200]}`,
        padding: '12px 8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2px',
        transition: 'width 0.2s ease',
        overflowX: 'hidden',
      }}
    >
      <button
        onClick={() => setCollapsed(c => !c)}
        style={{
          alignSelf: collapsed ? 'center' : 'flex-end',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '6px',
          color: colors.neutral[400],
          fontSize: '18px',
          lineHeight: 1,
          marginBottom: '8px',
        }}
        title={collapsed ? 'Expand' : 'Collapse'}
      >
        {collapsed ? '->' : '<-'}
      </button>

      {config.items.map(item => (
        <NavItem key={item.id} item={item} collapsed={collapsed} />
      ))}
    </nav>
  );
};
