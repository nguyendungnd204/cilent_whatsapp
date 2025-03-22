import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2023 My App. All rights reserved.</p>
            <nav>
                <ul>
                    <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="/terms-of-service">Terms of Service</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;