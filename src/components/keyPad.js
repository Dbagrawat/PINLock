import React from "react";

export default function keyPad(props) {
    const padLayout = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "Clear",
        "0",
        "Unlock",
    ];
    return (
        <ul className="keypad">
            {padLayout.map((keypad, index) => (
                <li
                    className="dial"
                    value={keypad}
                    key={index}
                    onClick={props.handleKeypad}
                >
                    {keypad}
                </li>
            ))}
        </ul>
    );
}
