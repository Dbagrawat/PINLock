import React from "react";
import MessageDisplay from "./displayMessage";
import { properties } from "../properties";

export default function passcode(props) {
    return (
        <div className="passcode">
            <input
                type="password"
                name="password"
                className="passcode"
                value={props.passcode}
                readOnly
            />
            <h3>
                <MessageDisplay
                    attempt={props.errorCount}
                    message={properties}
                />
            </h3>
        </div>
    );
}
