# @gadagi/ui-navigation - Navigation Component

A comprehensive sidebar navigation component for the Gadagi platform micro-frontend architecture.

## Overview

This package provides a flexible navigation sidebar with collapsible sections, badges, icons, and responsive design for all Gadagi micro-frontends.

## Installation

```bash
npm install @gadagi/ui-navigation
```

## Peer Dependencies

```bash
npm install react react-dom react-router-dom @gadagi/design-system @gadagi/types
```

## Features

- 🧭 **Hierarchical Navigation** - Multi-level menu support
- 🎯 **Active States** - Automatic active route highlighting
- 📊 **Badges** - Notification badges and counters
- 🎨 **Icons** - Icon support for navigation items
- 📱 **Responsive** - Collapsible sidebar for mobile
- ♿ **Accessible** - Full keyboard navigation support

## Quick Start

```tsx
import { Navigation } from '@gadagi/ui-navigation';
import { ThemeProvider } from '@gadagi/design-system';

function App() {
  const navigationItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      path: '/dashboard',
      icon: <DashboardIcon />
    },
    {
      id: 'users',
      label: 'Users',
      path: '/users',
      badge: 5
    }
  ];

  return (
    <ThemeProvider>
      <Navigation
        items={navigationItems}
        collapsed={false}
        onToggle={setCollapsed}
      />
    </ThemeProvider>
  );
}
```

## Components

### Navigation

The main navigation sidebar component.

```tsx
import { Navigation } from '@gadagi/ui-navigation';

<Navigation
  items={navigationItems}
  collapsed={false}
  onToggle={handleToggle}
  activeItem="dashboard"
/>
```

**Props:**
- `items: NavItem[]` - Navigation items array
- `collapsed?: boolean` - Sidebar collapsed state (default: false)
- `onToggle?: (collapsed: boolean) => void` - Toggle callback
- `activeItem?: string` - Currently active item ID
- `className?: string` - Additional CSS classes
- `width?: string` - Sidebar width when expanded (default: "250px")
- `collapsedWidth?: string` - Sidebar width when collapsed (default: "60px")

### NavItem

Individual navigation item component.

```tsx
import { NavItem } from '@gadagi/ui-navigation';

<NavItem
  item={{
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
    badge: 3
  }}
  collapsed={false}
  isActive={true}
/>
```

**Props:**
- `item: NavItem` - Navigation item data
- `collapsed?: boolean` - Collapsed state
- `isActive?: boolean` - Active state
- `onClick?: (item: NavItem) => void` - Click handler

## Navigation Item Structure

```typescript
interface NavItem {
  id: string;
  label: string;
  path: string;
  icon?: React.ReactNode;
  badge?: number;
  children?: NavItem[];
  disabled?: boolean;
  external?: boolean;
}
```

## Usage Examples

### Basic Navigation

```tsx
import { Navigation } from '@gadagi/ui-navigation';

const basicItems = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'contact', label: 'Contact', path: '/contact' }
];

function BasicNav() {
  return (
    <Navigation items={basicItems} />
  );
}
```

### Navigation with Icons

```tsx
import { Navigation } from '@gadagi/ui-navigation';

const iconItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />
  },
  {
    id: 'users',
    label: 'Users',
    path: '/users',
    icon: <UsersIcon />
  },
  {
    id: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <SettingsIcon />
  }
];

function IconNav() {
  return (
    <Navigation items={iconItems} />
  );
}
```

### Navigation with Badges

```tsx
const badgeItems = [
  {
    id: 'notifications',
    label: 'Notifications',
    path: '/notifications',
    icon: <BellIcon />,
    badge: 12
  },
  {
    id: 'messages',
    label: 'Messages',
    path: '/messages',
    icon: <MessageIcon />,
    badge: 5
  },
  {
    id: 'tasks',
    label: 'Tasks',
    path: '/tasks',
    icon: <TaskIcon />,
    badge: 0
  }
];

function BadgeNav() {
  return (
    <Navigation items={badgeItems} />
  );
}
```

### Hierarchical Navigation

```tsx
const hierarchicalItems = [
  {
    id: 'admin',
    label: 'Administration',
    icon: <AdminIcon />,
    children: [
      {
        id: 'users',
        label: 'User Management',
        path: '/admin/users'
      },
      {
        id: 'roles',
        label: 'Role Management',
        path: '/admin/roles'
      },
      {
        id: 'permissions',
        label: 'Permissions',
        path: '/admin/permissions'
      }
    ]
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: <ReportIcon />,
    children: [
      {
        id: 'sales',
        label: 'Sales Reports',
        path: '/reports/sales'
      },
      {
        id: 'analytics',
        label: 'Analytics',
        path: '/reports/analytics'
      }
    ]
  }
];

function HierarchicalNav() {
  return (
    <Navigation items={hierarchicalItems} />
  );
}
```

### Collapsible Navigation

```tsx
function CollapsibleNav() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Navigation
        items={navigationItems}
        collapsed={collapsed}
        onToggle={setCollapsed}
      />
      <main style={{ flex: 1, padding: '20px' }}>
        <button onClick={() => setCollapsed(!collapsed)}>
          Toggle Sidebar
        </button>
        {/* Main content */}
      </main>
    </div>
  );
}
```

### Integration with React Router

```tsx
import { Navigation } from '@gadagi/ui-navigation';
import { useLocation, useNavigate } from 'react-router-dom';

function RouterNav() {
  const location = useLocation();
  const navigate = useNavigate();

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard' },
    { id: 'users', label: 'Users', path: '/users' },
    { id: 'reports', label: 'Reports', path: '/reports' }
  ];

  const getActiveItem = () => {
    const currentPath = location.pathname;
    return navigationItems.find(item => item.path === currentPath)?.id;
  };

  const handleItemClick = (item: NavItem) => {
    navigate(item.path);
  };

  return (
    <Navigation
      items={navigationItems}
      activeItem={getActiveItem()}
      onItemClick={handleItemClick}
    />
  );
}
```

## Customization

### Custom Styling

```tsx
<Navigation
  items={navigationItems}
  className="custom-navigation"
  width="300px"
  collapsedWidth="80px"
/>
```

```css
.custom-navigation {
  background: linear-gradient(180deg, #2c3e50 0%, #34495e 100%);
  border-right: 2px solid #3498db;
}

.custom-navigation .nav-item {
  border-radius: 8px;
  margin: 4px 8px;
}

.custom-navigation .nav-item.active {
  background: #3498db;
  color: white;
}
```

### Custom Icons

```tsx
import { Navigation } from '@gadagi/ui-navigation';

const customItems = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    )
  }
];

function CustomIconNav() {
  return (
    <Navigation items={customItems} />
  );
}
```

### Custom Badge Styling

```css
.nav-badge {
  background: #e74c3c;
  color: white;
  border-radius: 12px;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
}

.nav-badge.zero {
  display: none;
}
```

## Accessibility Features

- **Keyboard Navigation**: Full tab and arrow key support
- **Screen Readers**: Proper ARIA labels and roles
- **Focus Management**: Logical focus flow
- **High Contrast**: WCAG compliant color combinations
- **Reduced Motion**: Respects user's motion preferences

## TypeScript Support

Full TypeScript support with proper interfaces:

```tsx
import { NavigationProps, NavItem } from '@gadagi/ui-navigation';

const items: NavItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
    badge: 5
  }
];

const navProps: NavigationProps = {
  items,
  collapsed: false,
  onToggle: (collapsed: boolean) => console.log('Collapsed:', collapsed)
};
```

## Responsive Design

The navigation automatically adapts to different screen sizes:

- **Desktop**: Full sidebar with all features
- **Tablet**: Compact mode with icon-only options
- **Mobile**: Overlay navigation with hamburger toggle

```tsx
// Responsive behavior is automatic
<Navigation items={navigationItems} />
```

## Performance Optimization

- **Virtual Scrolling**: For large navigation trees
- **Lazy Loading**: Load icons and badges on demand
- **Memoization**: Prevent unnecessary re-renders
- **Tree Shaking**: Only import used components

## Development

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

## License

MIT © Gadagi Team
