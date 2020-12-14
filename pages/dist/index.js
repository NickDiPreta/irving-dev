"use strict";
exports.__esModule = true;
var Header_1 = require("../components/Header");
var home_1 = require("../styles/home");
var RevolvingText_1 = require("../components/RevolvingText");
var Subtitle_1 = require("../components/Subtitle");
var StaticText_1 = require("../components/StaticText");
var framer_motion_1 = require("framer-motion");
var react_1 = require("react");
var Navbar_1 = require("../components/Navbar");
var FeaturedIn_1 = require("../components/FeaturedIn");
var OverviewBlock_1 = require("../components/OverviewBlock");
var InvestorsBlock_1 = require("../components/InvestorsBlock");
var AdjectiveBlock_1 = require("../components/AdjectiveBlock");
var Footer_1 = require("../components/Footer");
var Home = function () {
    var metaTitle = 'Perch Credit';
    var _a = framer_motion_1.useCycle('Rent', 'Netflix', 'Hulu', 'Spotify', 'Apple Music', 'Amazon'), text = _a[0], cycleText = _a[1];
    var _b = react_1.useState(true), show = _b[0], setShow = _b[1];
    var handleCycle = function () {
        cycleText();
        setShow(true);
        setTimeout(function () {
            setShow(false);
        }, 1500);
    };
    react_1.useEffect(function () {
        handleCycle();
    }, []);
    return (React.createElement("div", null,
        React.createElement(Header_1.Header, { title: metaTitle }),
        React.createElement("main", null,
            React.createElement("style", { jsx: true }, home_1.main),
            React.createElement(Navbar_1.Navbar, null),
            React.createElement("div", { className: "blockOne" },
                React.createElement("div", { className: "left-one" },
                    React.createElement(StaticText_1.StaticText, { lineOne: "Build credit with", lineTwo: "" }),
                    React.createElement(framer_motion_1.AnimatePresence, { onExitComplete: function () { return handleCycle(); } }, show && React.createElement(RevolvingText_1["default"], { text: text })),
                    React.createElement(Subtitle_1.Subtitle, { text: "Use recurring expenses to boost your credit score instantly with Perch." }),
                    React.createElement("img", { src: "/static/app-store-logo.png" })),
                React.createElement("div", { className: "right-one" })),
            React.createElement("div", { className: "blockTwo" },
                React.createElement(OverviewBlock_1.OverviewBlock, { image: "/static/icons-oc-setup.png", text: "Quick & Easy Setup", subtext: "Start your credit building journey in as little as 5 minutes" }),
                React.createElement(OverviewBlock_1.OverviewBlock, { image: "/static/icons-oc-credit.png", text: "Automate credit building", subtext: "Increase your score month to month without changing your lifestyle" }),
                React.createElement(OverviewBlock_1.OverviewBlock, { image: "/static/icons-oc-secure.png", text: "Keep all your information safe", subtext: "We secure all sensitive information using 256-bit encryption" })),
            React.createElement(FeaturedIn_1.FeaturedIn, null),
            React.createElement("div", { className: "blockThree" },
                React.createElement("div", { className: "left-two" }),
                React.createElement("div", { className: "right-two" },
                    React.createElement(StaticText_1.StaticText, { lineOne: "Build credit with", lineTwo: "subscriptions" }),
                    React.createElement(Subtitle_1.Subtitle, { text: "Perch allows you to build your credit using your recurring expenses like Netflix, Hulu, Spotify, and Apple Music" }))),
            React.createElement("div", { className: "blockFour" },
                React.createElement("div", { className: "left-three" },
                    React.createElement(StaticText_1.StaticText, { lineOne: "Build credit with", lineTwo: "rent" }),
                    React.createElement(Subtitle_1.Subtitle, { text: "Report up to 24 months of past rent payments to instantly increase your score." })),
                React.createElement("div", { className: "right-three" })),
            React.createElement(InvestorsBlock_1.InvestorsBlock, null),
            React.createElement("div", { className: "SFF-Block" },
                React.createElement("span", null, "Safe. Fast. Free."),
                React.createElement(AdjectiveBlock_1.AdjectiveBlock, null)),
            React.createElement(Footer_1.Footer, null))));
};
exports["default"] = Home;
