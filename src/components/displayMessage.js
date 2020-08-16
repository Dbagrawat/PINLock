import React from "react";

export default function displayMessage({ attempt, message }) {
    return (
        <>
            {attempt === 1 || attempt === 2
                ? message.incorrectentry
                : attempt === 3
                ? message.toomanyattempts
                : " "}
        </>
    );
}
