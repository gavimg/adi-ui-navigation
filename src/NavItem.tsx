import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem as NavItemType } from '@gadagi/types';
import { colors, typography, Badge } from '@gadagi/design-system';

interface NavItemProps {
  item: NavItemType;
  collapsed?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ item, collapsed }) => {
  return (
    <NavLink
      to={item.path}
      style={({ isActive }) => ({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: collapsed ? '10px 12px' : '10px 16px',
        borderRgadagius: '6px',
        textDecoration: 'none',
        fontSize: typography.fontSize.sm,
        fontWeight: typography.fontWeight.medium,
        color: isActive ? colors.primary[600] : colors.neutral[600],
        background: isActive ? colors.primary[50] : 'transparent',
        transition: 'background 0.15s, color 0.15s',
        justifyContent: collapsed ? 'center' : undefined,
      })}
    >
      {item.icon && <span style={{ fontSize: '16px', flexShrink: 0 }}>{item.icon}</span>}
      {!collapsed && (
        <>
          <span style={{ flex: 1 }}>{item.label}</span>
          {item.badge !== undefined && item.badge > 0 && (
            <Badge variant="info">{item.badge}</Badge>
          )}
        </>
      )}
    </NavLink>
  );
};
