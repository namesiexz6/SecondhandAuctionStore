import React from "react";

const FooterUser = () => (
    <footer style={{
        background: "linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)",
        color: "#fff",
        padding: "32px 0 16px 0",
        textAlign: "center",
        fontFamily: "Segoe UI, Arial, sans-serif",
        boxShadow: "0 -2px 16px rgba(78,84,200,0.1)",
        width: "100%",
        bottom: 0,
    }}>
        <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            flexWrap: "wrap",
            marginBottom: 16
        }}>
            {/* Facebook */}
            <a
                href="https://www.facebook.com/HadafeeSudlho"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 18
                }}
                title="Facebook: HadafeeSudlho"
            >
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" style={{width: 40 }} />
                <span>
                    Facebook<br />
                    <span style={{ fontSize: 13, color: "#e0e0e0" }}>Hadafee Mudo</span>
                </span>
            </a>

            {/* Gmail */}
            <a
                href="mailto:nattiehadafee@gmail.com"
                style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 18
                }}
                title="Email: nattiehadafee@gmail.com"
            >
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="Gmail" style={{width: 50 }} />
                <span>
                    Gmail<br />
                    <span style={{ fontSize: 13, color: "#e0e0e0" }}>nattiehadafee@gmail.com</span>
                </span>
            </a>

            {/* Instagram */}
            <a
                href="https://www.instagram.com/_dfee__/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 18
                }}
                title="Instagram: nattiehadafee"
            >
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" style={{ width: 40}} />
                <span>
                    Instagram<br />
                    <span style={{ fontSize: 13, color: "#e0e0e0" }}>@_dfee__</span>
                </span>
            </a>

            {/* GitHub */}
            <a
                href="https://github.com/namesiexz6/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: "#fff",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    fontSize: 18
                }}
                title="GitHub: namesiexz6"
            >
                <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" style={{ width: 40}} />
                <span>
                    GitHub<br />
                    <span style={{ fontSize: 13, color: "#e0e0e0" }}>namesiexz6</span>
                </span>
            </a>
        </div>
        <div style={{ fontSize: 14, opacity: 0.8 }}>
            © {new Date().getFullYear()} Bid to Wear Store. All rights reserved.
        </div>
    </footer>
);

export default FooterUser;