import { type FC, useState } from 'react'
import clsx from 'clsx'

interface Props {
  option: '_hello' | '_about-me' | '_projects' | '_contact-me'
}

const Menu: FC<Props> = ({ option }) => {
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
            href=""
            className={clsx(
              'h-[50px] px-6 border-r border-b-lines border-r-lines flex items-center justify-center hover:text-white hover:bg-primary-hover',
              {
                'border-b-accent-orange2 border-b-2': option === '_hello',
              }
            )}
          >
            _hello
          </a>
        </li>
        <li>
          <a
            href=""
            className={clsx(
              'h-[50px] border-r px-6 border-b border-b-lines border-lines flex items-center justify-center hover:text-white hover:bg-primary-hover',
              { 'border-b-accent-orange2 border-b-2': option === '_about-me' }
            )}
          >
            _about-me
          </a>
        </li>
        <li>
          <a
            href=""
            className={clsx(
              'h-[50px] border-r px-6 border-b border-b-lines border-lines flex items-center justify-center hover:text-white hover:bg-primary-hover',
              { 'border-b-accent-orange2 border-b-2': option === '_projects' }
            )}
          >
            _projects
          </a>
        </li>
        <li className="ml-auto">
          <a
            href=""
            className={clsx(
              'h-[50px] border-l px-6 ml-auto border-b border-b-lines border-lines flex items-center justify-center hover:text-white hover:bg-primary-hover',
              { 'border-b-accent-orange2 border-b-2': option === '_contact-me' }
            )}
          >
            _contact-me
          </a>
        </li>
      </ul>

      <ul className="lg:hidden flex items-center justify-between text-secondary h-[64px] text-center text-snippets border-y border-y-lines">
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
            'block absolute top-[64px] bottom-0 left-0 right-0 bg-primary',
            { hidden: !isResponsiveMenuOpen }
          )}
        >
          <ul className="text-labels">
            <li
              className={clsx(
                'h-[57px] w-full flex items-center pl-8 border-b border-b-lines',
                {
                  'text-white': option === '_hello',
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
                  'text-white': option === '_about-me',
                }
              )}
            >
              <a href="">_about-me</a>
            </li>
            <li
              className={clsx(
                'h-[57px] w-full flex items-center pl-8 border-b border-b-lines',
                {
                  'text-white': option === '_projects',
                }
              )}
            >
              <a href="">_projects</a>
            </li>
            <li
              className={clsx(
                'h-[57px] w-full flex items-center pl-8 border-b border-b-lines',
                {
                  'text-white': option === '_contact-me',
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
