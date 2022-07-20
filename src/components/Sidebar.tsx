import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import classNames from 'tailwindcss-classnames';
import { HomeIcon, NewsIcon, MyPageIcon, PredictIcon, ContactIcon, LogoutIcon } from './icons';

const menuItems = [
  { id: 1, label: 'Home', icon: HomeIcon, link: '/' },
  // { id: 2, label: 'MyPage', icon: MyPageIcon, link: '/myPage' },
  // { id: 3, label: 'News', icon: NewsIcon, link: '/news' },
  { id: 4, label: 'Movie', icon: PredictIcon, link: '/movie' },
  // { id: 5, label: 'Contact', icon: ContactIcon, link: '/contact' },
  { id: 6, label: 'Logout', icon: LogoutIcon, link: '/logout' },
];

const Sidebar = () => {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(() => menuItems.find((menu) => menu.link === router.pathname), [router.pathname]);

  const wrapperClasses = classNames('h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col', {
    ['w-80']: !toggleCollapse,
    ['w-20']: toggleCollapse,
  });

  const collapseIconClasses = classNames('p-4 rounded bg-light-lighter absolute right-0');

  const getNavItemClasses = (menu) => {
    return classNames(
      'flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap',
      {
        ['bg-light-lighter']: activeMenu.id === menu.id,
      },
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          {isCollapsible && (
            <button className={collapseIconClasses} onClick={handleSidebarToggle}>
              <Image src="/icons/Bars.svg" alt="bars" width="16" height="16" />
            </button>
          )}
          <div className="flex items-center pl-1 gap-4">
            <span className={classNames('mt-2 text-3xl font-medium text-text', { hidden: toggleCollapse })}>
              <Link href="/">
                <a>Logo</a>
              </Link>
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start mt-24">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes} key={menu.id}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: '2.5rem' }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span className={classNames('text-md font-medium text-text')}>{menu.label}</span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
