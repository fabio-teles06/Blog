import React from "react";

import './styles.css'

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}