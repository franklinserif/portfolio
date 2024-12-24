import { type FC, useState } from 'react'
import type { MenuOptions } from '@interfaces/menu'
import clsx from 'clsx'

interface Props {
  pathname: MenuOptions
}

const Menu: FC<Props> = ({ pathname }) => {
  const [isResponsiveMenuOpen, setIsResponsiveMenuOpen] = useState(false)

  return (
    <nav>
      <ul className="hidden lg:flex text-secondary items-center h-[50px] text-center text-snippets border-y border-y-lines">
        <li>
          <a
            href=""
            className="w-[310px] h-[50px] border-r border-r-lines flex items-center justify-center hover:bg-primary-hover"
          >
            Franklin Rodriguez
          </a>
        </li>
        <li>
          <a
            href="/"
            className={clsx(
              'h-[50px] px-6 border-r border-b-lines border-r-lines flex items-center justify-center hover:text-white hover:bg-primary-hover',
              {
                '!border-b-accent-orange border-b-2 ': pathname === '/',
              }
            )}
          >
            _hello
          </a>
        </li>
        <li>
          <a
            href="/about-me/personal-info"
            className={clsx(
              'h-[50px] border-r px-6 border-b border-b-lines border-lines flex items-center justify-center hover:text-white hover:bg-primary-hover',
              {
                '!border-b-accent-orange border-b-2 text-white':
                  pathname.includes('/about-me'),
              }
            )}
          >
            _about-me
          </a>
        </li>
        <li>
          <a
            href="/projects"
            className={clsx(
              'h-[50px] border-r px-6 border-b border-b-lines border-lines flex items-center justify-center hover:text-white hover:bg-primary-hover',
              {
                '!border-b-accent-orange border-b-2 text-white':
                  pathname === '/projects',
              }
            )}
          >
            _projects
          </a>
        </li>
        <li className="ml-auto">
          <a
            href="/contact-me"
            className={clsx(
              'h-[50px] border-l px-6 ml-auto border-b border-b-lines border-lines flex items-center justify-center hover:text-white hover:bg-primary-hover',
              {
                '!border-b-accent-orange border-b-2 text-white':
                  pathname === '/contact-me',
              }
            )}
          >
            _contact-me
          </a>
        </li>
      </ul>

      <ul className="lg:hidden flex flex-wrap items-center justify-between text-secondary h-[64px] text-center text-snippets border-y border-y-lines">
        <li>
          <a href="" className="h-[64px] flex justify-center items-center px-5">
            Franklin Rodriguez
          </a>
        </li>
        <li
          className="h-[64px] flex justify-center items-center px-5 cursor-pointer"
          onClick={() => {
            setIsResponsiveMenuOpen((prev) => !prev)
          }}
        >
          <img
            src={isResponsiveMenuOpen ? '/x-icon.svg' : '/hamburger-icon.svg'}
            alt="hamburger image"
          />
        </li>
        <li
          className={clsx(
            'block w-full top-[64px] bottom-[1400px] left-0 right-0',
            {
              hidden: !isResponsiveMenuOpen,
            }
          )}
        >
          <ul className="text-labels absolute z-50 top-[64px] bottom-[42px] 0 left-0 right-0 bg-primary">
            <li
              className={clsx(
                'h-[57px] w-full flex items-center pl-8 border-b border-b-lines',
                {
                  'text-white': pathname === '/',
                }
              )}
            >
              <a href="" className="">
                _hello
              </a>
            </li>
            <li
              className={clsx(
                'h-[57px] w-full flex items-center pl-8 border-b border-b-lines',
                {
                  'text-white': pathname === '/about-me',
                }
              )}
            >
              <a href="">_about-me</a>
            </li>
            <li
              className={clsx(
                'h-[57px] w-full flex items-center pl-8 border-b border-b-lines',
                {
                  'text-white': pathname === '/projects',
                }
              )}
            >
              <a href="">_projects</a>
            </li>
            <li
              className={clsx(
                'h-[57px] w-full flex items-center pl-8 border-b border-b-lines',
                {
                  'text-white': pathname === '/contact-me',
                }
              )}
            >
              <a href="">_contact-me</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
