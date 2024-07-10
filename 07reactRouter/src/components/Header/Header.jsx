import React from 'react'
import {Link,NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center ">
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="75.000000pt" height="75.000000pt" viewBox="0 0 300.000000 200.000000" preserveAspectRatio="xMidYMid meet">
  <defs>
    <clipPath id="clip-Path">
      <rect x="50" y="50" width="200" height="200" />
    </clipPath>
  </defs>
  <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none" clipPath='#clipPath'>
    <path d="M1450 2419 c-13 -6 -26 -12 -28 -14 -5 -5 51 -95 59 -95 5 0 49 99 49 113 0 10 -50 8 -80 -4z"/>
    <path d="M1524 2358 c-15 -29 -30 -54 -35 -56 -5 -2 -9 -9 -9 -14 0 -6 3 -8 7 -5 3 4 26 -23 51 -61 25 -37 56 -82 70 -100 l24 -34 65 117 c35 65 61 120 58 123 -7 7 -186 82 -196 82 -5 0 -21 -24 -35 -52z"/>
    <path d="M1253 2336 c-134 -56 -118 -40 -171 -173 l-21 -52 101 -123 c55 -68 103 -124 107 -125 3 -1 27 44 53 100 26 56 70 152 99 214 l52 112 -34 50 c-19 28 -41 50 -49 50 -8 -1 -70 -24 -137 -53z"/>
    <path d="M1772 2307 c-5 -7 -35 -60 -66 -119 -32 -60 -62 -108 -67 -108 -5 0 -9 -5 -9 -12 0 -6 3 -8 6 -5 4 4 55 -64 115 -151 59 -86 113 -157 119 -157 6 0 37 50 69 110 l58 110 -64 156 -65 156 -44 16 c-32 12 -45 13 -52 4z"/>
    <path d="M1385 2060 c-54 -115 -102 -210 -107 -210 -4 0 -8 -5 -8 -10 0 -6 4 -9 8 -8 5 2 35 -28 66 -67 32 -38 61 -71 65 -73 6 -2 192 327 210 370 2 7 -127 208 -135 208 -1 0 -45 -94 -99 -210z"/>
    <path d="M1016 2002 l-38 -91 74 -180 75 -181 68 144 68 145 -76 93 c-42 51 -89 108 -104 127 l-29 34 -38 -91z"/>
    <path d="M1627 2043 c-52 -90 -197 -364 -197 -372 0 -21 181 -231 198 -230 9 0 37 10 61 22 40 20 51 34 107 137 35 63 61 121 59 128 -4 12 -199 298 -215 315 -4 5 -10 5 -13 0z"/>
    <path d="M1945 1840 c-33 -61 -64 -110 -70 -110 -7 0 -6 -3 1 -8 5 -4 17 -18 26 -30 20 -29 17 -33 78 116 30 75 40 109 34 123 -7 15 -20 -1 -69 -91z"/>
    <path d="M1261 1798 c-5 -13 -34 -77 -65 -142 -31 -65 -55 -120 -54 -121 2 -2 36 -17 77 -34 85 -36 73 -43 140 83 l44 84 -62 76 c-34 42 -64 76 -67 76 -2 0 -8 -10 -13 -22z"/>
    <path d="M1853 1669 c-42 -71 -95 -171 -91 -173 1 -2 27 7 55 20 42 19 56 31 68 61 25 60 26 77 7 102 l-19 23 -20 -33z"/>
    <path d="M1410 1670 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"/>
    <path d="M1394 1618 c-9 -18 -32 -60 -50 -94 l-34 -61 88 -37 c101 -42 106 -42 161 -17 l42 18 -91 112 c-50 61 -93 111 -95 111 -3 0 -12 -15 -21 -32z"/>
    <path d="M1610 1050 c0 -93 1 -100 20 -100 18 0 20 7 20 60 0 33 4 60 10 60 6 0 10 -27 10 -60 0 -53 2 -60 20 -60 18 0 20 7 20 64 0 67 -15 94 -45 82 -11 -4 -15 2 -15 24 0 23 -4 30 -20 30 -19 0 -20 -7 -20 -100z"/>
    <path d="M1980 1135 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0 -15 -7 -15 -15z"/>
    <path d="M850 1103 c5 -21 14 -64 20 -96 10 -51 14 -58 33 -55 18 3 24 16 39 88 21 105 21 100 4 100 -18 0 -22 -13 -31 -85 -9 -67 -19 -57 -30 28 -5 46 -10 57 -25 57 -15 0 -17 -5 -10 -37z"/>
    <path d="M1460 1045 l0 -95 45 0 c54 0 63 12 63 95 0 83 -9 95 -63 95 l-45 0 0 -95z m70 45 c0 -20 -5 -30 -15 -30 -10 0 -15 10 -15 30 0 20 5 30 15 30 10 0 15 -10 15 -30z m0 -90 c0 -20 -5 -30 -15 -30 -10 0 -15 10 -15 30 0 20 5 30 15 30 10 0 15 -10 15 -30z"/>
    <path d="M1883 1101 c-7 -10 -8 -22 -3 -27 5 -5 10 -34 12 -64 3 -48 6 -55 26 -58 15 -2 22 2 22 12 0 9 -4 16 -10 16 -5 0 -10 20 -10 45 0 25 5 45 10 45 15 0 12 19 -4 36 -19 19 -29 18 -43 -5z"/>
    <path d="M1009 1090 c-6 -4 -9 -34 -7 -71 l3 -64 43 -2 42 -2 0 74 0 73 -35 -1 c-19 -1 -40 -4 -46 -7z m51 -65 c0 -33 -4 -45 -15 -45 -11 0 -15 12 -15 45 0 33 4 45 15 45 11 0 15 -12 15 -45z"/>
    <path d="M1142 1088 c-7 -7 -12 -25 -12 -40 0 -24 5 -30 30 -34 17 -4 30 -12 30 -19 0 -20 -11 -24 -31 -12 -21 13 -34 5 -26 -18 4 -9 19 -15 41 -15 30 0 37 4 42 25 9 34 -1 53 -28 57 -25 3 -39 38 -15 38 9 0 17 -6 20 -12 4 -10 7 -10 17 -1 11 10 11 15 0 28 -15 18 -51 20 -68 3z"/>
    <path d="M1262 1028 l3 -73 43 -2 42 -2 0 75 c0 59 -3 74 -15 74 -12 0 -15 -13 -15 -60 0 -47 -3 -60 -15 -60 -12 0 -15 13 -15 60 0 47 -3 60 -15 60 -13 0 -15 -13 -13 -72z"/>
    <path d="M1761 1091 c-8 -5 -11 -30 -9 -72 l3 -64 43 -2 42 -2 0 74 0 73 -34 0 c-18 0 -38 -3 -45 -7z m49 -66 c0 -33 -4 -45 -15 -45 -11 0 -15 12 -15 45 0 33 4 45 15 45 11 0 15 -12 15 -45z"/>
    <path d="M1980 1025 c0 -60 3 -75 15 -75 12 0 15 15 15 75 0 60 -3 75 -15 75 -12 0 -15 -15 -15 -75z"/>
    <path d="M2060 1085 c-6 -7 -10 -39 -8 -72 l3 -58 43 -2 42 -2 0 73 0 72 -35 1 c-19 1 -39 -5 -45 -12z m50 -60 c0 -33 -4 -45 -15 -45 -11 0 -15 12 -15 45 0 33 4 45 15 45 11 0 15 -12 15 -45z"/>
  </g>
</svg>
 
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to={"/"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/about"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/contact"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/github"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 ${isActive ? "text-orange-700" : "text-gray-700"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    GitHub
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}