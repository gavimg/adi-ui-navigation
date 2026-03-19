import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem as NavItemType } from '@gadagi/types';
import { Badge } from '@gadagi/design-system';
import './NavItem.css';

interface NavItemProps {
  item: NavItemType;
  collapsed?: boolean;
}

export const NavItem: React.FC<NavItemProps> = ({ item, collapsed }) => {
  return (
    <NavLink
      to={item.path}
      className={({ isActive }) => {
        const classes = ['nav-item'];
        if (isActive) classes.push('nav-item--active');
        if (collapsed) classes.push('nav-item--collapsed');
        return classes.join(' ');
      }}
    >
      {item.icon && <span className="nav-item__icon">{item.icon}</span>}
      {!collapsed && (
        <>
          <span className="nav-item__label">{item.label}</span>
          {item.badge !== undefined && item.badge > 0 && (
            <span className="nav-item__badge">
              <Badge variant="info">{item.badge}</Badge>
            </span>
          )}
        </>
      )}
    </NavLink>
  );
};
