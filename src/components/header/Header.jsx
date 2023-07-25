import React, { useState } from 'react'
import './Header.css'

const Header = ({ mode, toggleMode }) => {
    const [isChecked, setIsChecked] = useState(!mode);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    console.log(isChecked);
    return (
        <>
            <nav className={`navbar bg-gray-300 dark:bg-slate-900 navbar-expand-lg bg-body-tertiary`}>
                <div className="container-fluid">
                    <a className="navbar-brand dark:text-white" href="#">DANISH</a>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="toggleSwitch"
                            className="hidden"
                            checked={isChecked}
                            onChange={handleToggle}
                            onClick={toggleMode}
                        />
                        <label htmlFor="toggleSwitch" className="flex items-center cursor-pointer">
                            <div className="relative">
                                <div className={`w-10 h-6 ${!mode ? 'bg-blue-500' : 'bg-gray-400'} rounded-full shadow-inner`}></div>
                                <div
                                    className={`dot absolute w-4 h-4 top-[4px] left-[4px] bg-white rounded-full shadow ${!mode ? "translate-x-4 " : "translate-x-0"
                                        } transition`}
                                ></div>
                            </div>
                            <div className="ml-3 dark:text-white text-gray-700 font-medium">{!mode ? 'Enable Light' : 'Enable Dark'}</div>
                        </label>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header