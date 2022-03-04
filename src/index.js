import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

class NavBar extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      content: [
        { id: 1, description: "<iframe src='https://docs.google.com/presentation/d/e/2PACX-1vQk7pm5KJzdmnDjD_Sb0xazdp4C3JqxcvlQK20E7_ysn_aeJCOqgMPSNFRXGKbxjz3s0sHC2duVUPq_/embed?start=false&loop=false&delayms=3000' frameborder='20' width='1440' height='839' allowfullscreen='true' mozallowfullscreen='true' webkitallowfullscreen='true'></iframe>" },
        { id: 2, description: "<iframe src='https://sadasystems.looker.com/embed/public/Bfb9hHS8j7YRJGVjnpgB4TQPJPWNTYkr' width='700' height='448' frameborder='0'></iframe>" },
        { id: 3, description: "<ul><iframe src='https://sadasystems.looker.com/embed/public/5nXGKhrMPc8NDQKbvFJy7yYFk4wNc89b' width='700' height='448' frameborder='0'></iframe></ul>, <ul><iframe src='https://sadasystems.looker.com/embed/public/cGkzwhpdvRp8hMP4D8thfwyzWF2qwGNX' width='700' height='448' frameborder='0'></iframe></ul>,<ul><iframe src='https://sadasystems.looker.com/embed/public/HyCtPJ7FTdbdmbGcGSccgjswRMMkwnKy' width='700' height='448' frameborder='0'></iframe></ul>" },
        { id: 4, description: "<ul><iframe src='https://sadasystems.looker.com/embed/public/MZwB8xzp8tNMYHPJk3tP44BfZgRtTv9v' width='700' height='448' frameborder='0'></iframe></ul>, <ul><iframe src='https://sadasystems.looker.com/embed/public/CF9d6kGy8xC4mVFgZxRDqDhRNJrPymWP' width='700' height='448' frameborder='0'></iframe></ul>,<ul><iframe src='https://sadasystems.looker.com/embed/public/gWXJkvJXDC9ckn297pYmVyHTpC7ZzqYQ' width='700' height='448' frameborder='0'></iframe></ul>, <ul><iframe src='https://sadasystems.looker.com/embed/public/mf3mrFqTTrZN99wGbtr3kKyB3Cj8TKMW' width='700' height='490' frameborder='0'></iframe></ul>" },
        { id: 5, description: "<ul><iframe src='https://sadasystems.looker.com/embed/public/rdMGty4bfsTDNMPNbWDqXQvhxNcB2w4X' width='700' height='448' frameborder='0'></iframe>,<ul><iframe src='https://sadasystems.looker.com/embed/public/2jZfvbMmXVCC6P4chGBSZQNJVgyZd3fb' width='700' height='448' frameborder='0'></iframe></ul>" }],
  
        listItems: [
        { id: 1, name: 'Home', active: false },
        { id: 2, name: 'Workforce', active: false },
        { id: 3, name: 'Gender', active: false },
        { id: 4, name: 'Racial Representation', active: false },
        { id: 5, name: 'Leadership Representation', active: false }],

      body: null });_defineProperty(this, "showContentHandler",






    id => {
      const body = { ...this.state.body };
      this.state.content.map(item => {
        if (item.id == id) {
          this.setState({ body: item.description });
        }
      });

      const listItems = [...this.state.listItems];
      for (let item of listItems) {
        item.active = false;
      }

      const listIndex = this.state.listItems.findIndex(item => {
        return item.id === id;
      });
      const listItem = {
        ...this.state.listItems[listIndex] };

      listItem.active = true;
      listItems[listIndex] = listItem;
      this.setState({ listItems: listItems });
    });_defineProperty(this, "showSideDrawer",

    elename => {
      let element = document.getElementById(elename);
      element.className === 'NavList' ? element.className += ' responsive' : element.className = 'NavList';
    });}componentDidMount() {this.showContentHandler(1);}

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "NavList", id: "NavBar" },
      this.state.listItems.map(item => {
        return /*#__PURE__*/(
          React.createElement("a", { onClick: () => this.showContentHandler(item.id), key: item.id, href: "#", className: item.active ? 'active' : '' }, item.name));
      }), /*#__PURE__*/
      React.createElement("a", { className: "icon", onClick: () => this.showSideDrawer("NavBar"), href: "#" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-bars" }))), /*#__PURE__*/

      React.createElement("div", { className: "contentDivClass", dangerouslySetInnerHTML: { __html: this.state.body } })));



  }}



class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(NavBar, null)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));