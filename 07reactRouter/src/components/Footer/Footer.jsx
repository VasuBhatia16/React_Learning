import React from 'react'
import { Link, NavLink } from 'react-router-dom';
export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center ">
                             <svg version="1.0" xmlns="http://www.w3.org/2000/svg"  width="125.000000pt" height="125.000000pt" viewBox="0 0 125.000000 300.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M1450 2419 c-13 -6 -26 -12 -28 -14 -5 -5 51 -95 59 -95 5 0 49 99 49 113 0 10 -50 8 -80 -4z"/> <path d="M1524 2358 c-15 -29 -30 -54 -35 -56 -5 -2 -9 -9 -9 -14 0 -6 3 -8 7 -5 3 4 26 -23 51 -61 25 -37 56 -82 70 -100 l24 -34 65 117 c35 65 61 120 58 123 -7 7 -186 82 -196 82 -5 0 -21 -24 -35 -52z"/> <path d="M1253 2336 c-134 -56 -118 -40 -171 -173 l-21 -52 101 -123 c55 -68 103 -124 107 -125 3 -1 27 44 53 100 26 56 70 152 99 214 l52 112 -34 50 c-19 28 -41 50 -49 50 -8 -1 -70 -24 -137 -53z"/> <path d="M1772 2307 c-5 -7 -35 -60 -66 -119 -32 -60 -62 -108 -67 -108 -5 0 -9 -5 -9 -12 0 -6 3 -8 6 -5 4 4 55 -64 115 -151 59 -86 113 -157 119 -157 6 0 37 50 69 110 l58 110 -64 156 -65 156 -44 16 c-32 12 -45 13 -52 4z"/> <path d="M1385 2060 c-54 -115 -102 -210 -107 -210 -4 0 -8 -5 -8 -10 0 -6 4 -9 8 -8 5 2 35 -28 66 -67 32 -38 61 -71 65 -73 6 -2 192 327 210 370 2 7 -127 208 -135 208 -1 0 -45 -94 -99 -210z"/> <path d="M1016 2002 l-38 -91 74 -180 75 -181 68 144 68 145 -76 93 c-42 51 -89 108 -104 127 l-29 34 -38 -91z"/> <path d="M1627 2043 c-52 -90 -197 -364 -197 -372 0 -21 181 -231 198 -230 9 0 37 10 61 22 40 20 51 34 107 137 35 63 61 121 59 128 -4 12 -199 298 -215 315 -4 5 -10 5 -13 0z"/> <path d="M1945 1840 c-33 -61 -64 -110 -70 -110 -7 0 -6 -3 1 -8 5 -4 17 -18 26 -30 20 -29 17 -33 78 116 30 75 40 109 34 123 -7 15 -20 -1 -69 -91z"/> <path d="M1261 1798 c-5 -13 -34 -77 -65 -142 -31 -65 -55 -120 -54 -121 2 -2 36 -17 77 -34 85 -36 73 -43 140 83 l44 84 -62 76 c-34 42 -64 76 -67 76 -2 0 -8 -10 -13 -22z"/> <path d="M1853 1669 c-42 -71 -95 -171 -91 -173 1 -2 27 7 55 20 42 19 56 31 68 61 25 60 26 77 7 102 l-19 23 -20 -33z"/> <path d="M1410 1670 c0 -7 3 -10 7 -7 3 4 3 10 0 14 -4 3 -7 0 -7 -7z"/> <path d="M1394 1618 c-9 -18 -32 -60 -50 -94 l-34 -61 88 -37 c101 -42 106 -42 161 -17 l42 18 -91 112 c-50 61 -93 111 -95 111 -3 0 -12 -15 -21 -32z"/> <path d="M1610 1050 c0 -93 1 -100 20 -100 18 0 20 7 20 60 0 33 4 60 10 60 6 0 10 -27 10 -60 0 -53 2 -60 20 -60 18 0 20 7 20 64 0 67 -15 94 -45 82 -11 -4 -15 2 -15 24 0 23 -4 30 -20 30 -19 0 -20 -7 -20 -100z"/> <path d="M1980 1135 c0 -8 7 -15 15 -15 8 0 15 7 15 15 0 8 -7 15 -15 15 -8 0 -15 -7 -15 -15z"/> <path d="M850 1103 c5 -21 14 -64 20 -96 10 -51 14 -58 33 -55 18 3 24 16 39 88 21 105 21 100 4 100 -18 0 -22 -13 -31 -85 -9 -67 -19 -57 -30 28 -5 46 -10 57 -25 57 -15 0 -17 -5 -10 -37z"/> <path d="M1460 1045 l0 -95 45 0 c54 0 63 12 63 95 0 83 -9 95 -63 95 l-45 0 0 -95z m70 45 c0 -20 -5 -30 -15 -30 -10 0 -15 10 -15 30 0 20 5 30 15 30 10 0 15 -10 15 -30z m0 -90 c0 -20 -5 -30 -15 -30 -10 0 -15 10 -15 30 0 20 5 30 15 30 10 0 15 -10 15 -30z"/> <path d="M1883 1101 c-7 -10 -8 -22 -3 -27 5 -5 10 -34 12 -64 3 -48 6 -55 26 -58 15 -2 22 2 22 12 0 9 -4 16 -10 16 -5 0 -10 20 -10 45 0 25 5 45 10 45 15 0 12 19 -4 36 -19 19 -29 18 -43 -5z"/> <path d="M1009 1090 c-6 -4 -9 -34 -7 -71 l3 -64 43 -2 42 -2 0 74 0 73 -35 -1 c-19 -1 -40 -4 -46 -7z m51 -65 c0 -33 -4 -45 -15 -45 -11 0 -15 12 -15 45 0 33 4 45 15 45 11 0 15 -12 15 -45z"/> <path d="M1142 1088 c-7 -7 -12 -25 -12 -40 0 -24 5 -30 30 -34 17 -4 30 -12 30 -19 0 -20 -11 -24 -31 -12 -21 13 -34 5 -26 -18 4 -9 19 -15 41 -15 30 0 37 4 42 25 9 34 -1 53 -28 57 -25 3 -39 38 -15 38 9 0 17 -6 20 -12 4 -10 7 -10 17 -1 11 10 11 15 0 28 -15 18 -51 20 -68 3z"/> <path d="M1262 1028 l3 -73 43 -2 42 -2 0 75 c0 59 -3 74 -15 74 -12 0 -15 -13 -15 -60 0 -47 -3 -60 -15 -60 -12 0 -15 13 -15 60 0 47 -3 60 -15 60 -13 0 -15 -13 -13 -72z"/> <path d="M1761 1091 c-8 -5 -11 -30 -9 -72 l3 -64 43 -2 42 -2 0 74 0 73 -34 0 c-18 0 -38 -3 -45 -7z m49 -66 c0 -33 -4 -45 -15 -45 -11 0 -15 12 -15 45 0 33 4 45 15 45 11 0 15 -12 15 -45z"/> <path d="M1980 1025 c0 -60 3 -75 15 -75 12 0 15 15 15 75 0 60 -3 75 -15 75 -12 0 -15 -15 -15 -75z"/> <path d="M2060 1085 c-6 -7 -10 -39 -8 -72 l3 -58 43 -2 42 -2 0 73 0 72 -35 1 c-19 1 -39 -5 -45 -12z m50 -60 c0 -33 -4 -45 -15 -45 -11 0 -15 12 -15 45 0 33 4 45 15 45 11 0 15 -12 15 -45z"/> </g> </svg> 
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <NavLink to="/" className={"hover:underline hover:text-orange-700"}>
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <Link to="/about" className={"hover:underline hover:text-orange-700"}>
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4 ">
                                    <Link
                                        to="https://github.com/vasubhatia16"
                                        className={"hover:underline hover:text-orange-700"}
                                        
                                    >
                                        Github
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://linkedin.com/in/vasubhatia16" className={"hover:underline hover:text-orange-700"}>
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className={"hover:underline hover:text-orange-700"}>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className={"hover:underline hover:text-orange-700"}>
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                            Vasu Bhatia
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4 hover:text-blue-700"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-orange-700">
                            <svg
                                className="w-4 h-4 hover:text-blue-700"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-orange-700">
                            <svg
                                className="w-4 h-4 hover:text-blue-700"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-orange-700">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500 hover:text-orange-700">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}