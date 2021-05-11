import { Menu, Transition } from '@headlessui/react'
import { Fragment, useContext } from 'react'
import { ChevronDownIcon, DesktopComputerIcon, MoonIcon, SunIcon, CheckIcon } from '@heroicons/react/solid';
import { ThemeContext } from "~/contexts/themeContext"

export default function ThemeSwitcher() {
    const { theme, setTheme } = useContext(ThemeContext)

    const setSystemTheme = () => {
        const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
        const systemTheme = userMedia.matches ? 'dark' : 'light'

        setTheme(systemTheme)
    }

    return (
        <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex rounded-full justify-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 dark:bg-gray-700 dark:bg-opacity-30 sm:rounded-md bg-opacity-30 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <div>
                                {theme === "dark"
                                    ? <p className="sm:mr-2">🌚</p>
                                    : <p className="sm:mr-2">🌞</p>}
                            </div>
                            <div className="flex">
                                <span className="hidden sm:block">Theme</span>
                                <ChevronDownIcon
                                    className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100 hidden sm:block"
                                    aria-hidden="true"
                                />
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items
                            static
                            className={`bg-white dark:bg-black absolute right-0 w-56 mt-7 origin-top-right divide-y divide-gray-100 divide-opacity-7 dark:divide-gray-700 rounded-lg shadow-lg ring-black dark:ring-white ring-opacity-5 focus:outline-none dark:shadow-lg-invert border dark:border-gray-700`}
                        >
                            <div className="px-1 py-1 ">
                                <Menu.Item>
                                    <div className="flex">
                                        <button className={`bg-violet-500 text-black dark:text-white group flex rounded-md items-center w-full px-2 py-2 text-sm`} onClick={e => setTheme("light")}>
                                            <SunIcon
                                                className="w-5 h-5 mr-2"
                                                aria-hidden="true"
                                            />
                                            Light
                                        </button>
                                        {theme === 'light' ?
                                            <div className="flex justify-center my-auto px-3">
                                                <CheckIcon className="w-5 h-5" />
                                            </div>
                                            : ""
                                        }
                                    </div>
                                </Menu.Item>
                                <Menu.Item>
                                    <div className="flex">
                                        <button className={`bg-violet-500 text-black dark:text-white group flex rounded-md items-center w-full px-2 py-2 text-sm`} onClick={e => setTheme("dark")}>
                                            <MoonIcon
                                                className="w-5 h-5 mr-2"
                                                aria-hidden="true"
                                            />
                                            Dark
                                        </button>
                                        {theme === 'dark' ?
                                            <div className="flex justify-center my-auto px-3">
                                                <CheckIcon className="w-5 h-5" />
                                            </div>
                                            : ""
                                        }
                                    </div>
                                </Menu.Item>
                            </div>
                            <div className="px-1 py-1">
                                <Menu.Item>
                                    <div className="flex">
                                        <button className={`bg-violet-500 text-black dark:text-white group flex rounded-md items-center w-full px-2 py-2 text-sm`} onClick={e => setSystemTheme()}>
                                            <DesktopComputerIcon
                                                className="w-5 h-5 mr-2"
                                                aria-hidden="true"
                                            />
                                            System
                                        </button>
                                    </div>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </>
            )}
        </Menu>
    );
}
