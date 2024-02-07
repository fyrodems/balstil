// 'use client';

// import { useState } from 'react';
// import {
//   AppstoreOutlined,
//   ContainerOutlined,
//   DesktopOutlined,
//   MailOutlined,
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   PieChartOutlined,
//   AuditOutlined,
//   FireOutlined,
//   SettingOutlined,
// } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Button, Menu } from 'antd';
// // import Link from 'next/link';
// import { useLocale } from 'next-intl';
// import { Link } from '@/navigation';
// import { useParams } from 'next/navigation';
// import { useRouter } from 'next/router';

// // type MenuItem = Required<MenuProps>['items'][number];

// // function getItem(
// //   label: React.ReactNode,
// //   key: React.Key,
// //   icon?: React.ReactNode,
// //   children?: MenuItem[],
// //   type?: 'group'
// // ): MenuItem {
// //   return {
// //     key,
// //     icon,
// //     children,
// //     label,
// //     type,
// //   } as MenuItem;
// // }

// // const items2: MenuItem[] = [
// //   getItem('O nas', '1', <AuditOutlined />),
// //   getItem('Przykładowy produkt', '2', <FireOutlined />),

// //   getItem('Produkty', 'sub1', <AppstoreOutlined />, [
// //     getItem('Link nr 1', '5'),
// //     getItem('Link nr 2', '6'),
// //     getItem('Link nr 3', '7'),
// //     getItem('Link nr 4', '8'),
// //   ]),

// //   /*  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
// //     getItem('Link nr 9', '9'),
// //     getItem('Link nr 10', '10'),

// //     getItem('Submenu', 'sub3', null, [
// //       getItem('Link nr 11', '11'),
// //       getItem('Link nr 12', '12'),
// //     ]),
// //   ]), */
// // ];

// export const Hamburger: React.FC = () => {
//   const [collapsed, setCollapsed] = useState(true);
//   const locale = useLocale();

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   const items: MenuProps['items'] = [
//     {
//       label: (
//         <Link locale={locale} href={`/about`}>
//           O nas
//         </Link>
//       ),
//       key: '1',
//       icon: <AuditOutlined />,
//     },
//     {
//       label: (
//         <Link locale={locale} href={`/product`}>
//           Przykładowy produkt
//         </Link>
//       ),
//       key: '2',
//       icon: <AppstoreOutlined />,
//     },
//     {
//       label: 'Navigation Three - Submenu',
//       key: 'SubMenu',
//       icon: <SettingOutlined />,
//       children: [
//         {
//           type: 'group',
//           label: 'Item 1',
//           children: [
//             {
//               label: 'Option 1',
//               key: 'setting:1',
//             },
//             {
//               label: 'Option 2',
//               key: 'setting:2',
//             },
//           ],
//         },
//         {
//           type: 'group',
//           label: 'Item 2',
//           children: [
//             {
//               label: 'Option 3',
//               key: 'setting:3',
//             },
//             {
//               label: 'Option 4',
//               key: 'setting:4',
//             },
//           ],
//         },
//       ],
//     },
//   ];

//   return (
//     <div style={{ width: 250, height: '100vh' }}>
//       <Button
//         type="primary"
//         onClick={toggleCollapsed}
//         style={{ marginBottom: 16 }}
//       >
//         {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//       </Button>
//       <Menu
//         defaultSelectedKeys={['1']}
//         mode="inline"
//         inlineCollapsed={collapsed}
//         items={items}
//       />
//     </div>
//   );
// };

import { useState, useEffect } from 'react';
import { Squeeze as HamburgerIcon } from 'hamburger-react';

interface HamburgerMenuProps {
  setDropdownOpen: (isOpen: boolean) => void;
  isDropdownOpen: boolean;
}

export const Hamburger: React.FC<HamburgerMenuProps> = ({
  setDropdownOpen,
  isDropdownOpen,
}) => {
  //! Czy na pewno potrzebne?
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleBurger = () => {
    if (isDropdownOpen) {
      setOpen((state) => !state);
    }

    setDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (!isDropdownOpen) {
      setOpen(false);
    }
  }, [isDropdownOpen]);

  return (
    <HamburgerIcon
      toggled={isDropdownOpen}
      toggle={toggleBurger}
      color="#AF8E6D"
    />
  );
};
