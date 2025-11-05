import React from "react";
import s from './Download.module.css'

export const Download = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/docs/Shunkova_Svetlana.pdf";
        link.download = "Shunkova_Svetlana.pdf";
        link.click();
    };

    return (
        <button className={s.downloadItem}
                onClick={handleDownload}
        >
            <svg className={s.downloadIcon} id="Layer_1" viewBox="0 0 512 512" data-name="Layer 1">
                <linearGradient id="GradientFill_1" gradientUnits="userSpaceOnUse" x1="256" x2="256" y2="512">
                    <stop offset="0" stop-color="#1fbbee"/>
                    <stop offset="1" stop-color="#4764af"/>
                </linearGradient>
                <path
                    d="m256 0c-141.159 0-256 114.841-256 256s114.841 256 256 256 256-114.841 256-256-114.841-256-256-256zm0 480c-123.514 0-224-100.486-224-224s100.486-224 224-224 224 100.486 224 224-100.486 224-224 224zm-63.575-205a16 16 0 0 1 22.627-22.627l24.948 24.949v-136.807a16 16 0 0 1 32 0v136.807l24.948-24.948a16 16 0 0 1 22.627 22.626l-52.262 52.261a16 16 0 0 1 -22.626 0zm199.217 96.484a16 16 0 0 1 -16 16h-239.284a16 16 0 0 1 0-32h239.284a16 16 0 0 1 16 16.001z"
                    fill="url(#GradientFill_1)"/>
            </svg>
            <span className={s.downloadText}>Download SV</span>
        </button>
    );
};

