import React from 'react';
// import './header.css';  // Ensure the CSS file name matches the import

function Header() {
    return (
        <header className="header">
            <div className="header__logo">Logo</div>
            <nav className="header__nav">
                <a href="#about" className="header__link">About Us</a>
                <a href="#activeRecall" className="header__link">Active Recall</a>
                <a href="#spacedRepetition" className="header__link">Spaced Repetition</a>
            </nav>
            <div className="header__actions">
                <a href="/" className="header__icon">Home Icon</a>
                <button className="header__login">Login</button>
            </div>
        </header>
    );
}

export default Header;
