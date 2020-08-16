import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";
import App from "./App";
import Keypad from "./components/keyPad";
import Passcode from "./components/passcode";
import DisplayMessage from "./components/displayMessage";

Enzyme.configure({ adapter: new Adapter() });

it("App component renders correctly ", () => {
    const wrapper = shallow(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it("KeyPad component renders correctly ", () => {
    const wrapper = shallow(<Keypad />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it("Passcode component renders correctly ", () => {
    const wrapper = shallow(<Passcode />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it("Message component renders correctly ", () => {
    const wrapper = shallow(<DisplayMessage />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

it("should render a password input", () => {
    const wrapper = shallow(<Passcode />);
    expect(wrapper.find('input[name="password"]').exists()).toBe(true);
});
