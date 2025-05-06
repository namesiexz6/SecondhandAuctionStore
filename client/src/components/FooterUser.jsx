import React from "react";

const FooterUser = () => (
    <footer style={{
        background: "linear-gradient(90deg, #4e54c8 0%, #8f94fb 100%)",
        color: "#fff",
        padding: "32px 0 16px 0",
        textAlign: "center",
        fontFamily: "Segoe UI, Arial, sans-serif",
        boxShadow: "0 -2px 16px rgba(78,84,200,0.1)"
    }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px" }}>
            <h2 style={{ margin: 0, fontWeight: 700, fontSize: 28, letterSpacing: 1 }}>Secondhand Auction Store</h2>
            <p style={{ margin: "12px 0 24px 0", fontSize: 16 }}>
                ซื้อ-ขายของมือสองออนไลน์อย่างปลอดภัยและง่ายดาย
            </p>
            <div style={{ marginBottom: 16 }}>
                <a href="https://www.facebook.com/HadafeeSudlho" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px", fontSize: 22, textDecoration: "none" }}>
                    <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="https://line.me" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", margin: "0 10px", fontSize: 22, textDecoration: "none" }}>
                    <i className="fab fa-line"></i> Line
                </a>
                <a href="mailto:support@auctionstore.com" style={{ color: "#fff", margin: "0 10px", fontSize: 22, textDecoration: "none" }}>
                    <i className="fas fa-envelope"></i> Email
                </a>
            </div>
        </div>
        <div style={{ fontSize: 14, opacity: 0.8 }}>
            © {new Date().getFullYear()} Secondhand Auction Store. All rights reserved.
        </div>
    </footer>
);

export default FooterUser;