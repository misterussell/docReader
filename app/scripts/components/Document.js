import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      confirmScreen: false,
      read: false,
    };
  },
  render() {
    let checkText;
    let modal;
    //modal element rendering
    if (this.state.confirmScreen === true) {
      modal = (
        <div className="wash">
          <div className="formContainer">
            <span>Are you sure you read this?</span>
            <form className="confirm">
              <input type="button" className="confirmButton" name="confirm" value="Confirm" onClick={this.confirmClick}/>
              <input type="button" name="cancel" className="cancelButton" value="Cancel" onClick={this.cancelClick}/>
            </form>
          </div>
        </div>
      );
    } else modal = '';
    //text rending for span next to checkbox
    if (this.state.read === true) {
      checkText = "Read";
    } else checkText = 'Mark as Read';
    //main element rendering
    return (
      <main>
        <aside ref="modal">{modal}</aside>
        <div className="doc">
          <h1>Chaucer</h1>
          <article>{this.props.doc}</article>
          <form className="read">
            <span>{checkText}</span><input type="checkbox" ref="check" value="" onClick={this.checkClick}/>
          </form>
        </div>
      </main>
    );
  },
  checkClick(e) {
    if (this.refs.check.checked) {
      this.setState({confirmScreen: true});
    } else {
      this.setState({confirmScreen: false});
    }
  },
  confirmClick(e) {
    e.preventDefault();
    this.setState({read: true});
    this.refs.check.disabled = true;
    this.setState({confirmScreen: false});
  },
  cancelClick(e) {
    this.refs.check.checked = false;
    this.setState({confirmScreen: false});
  }
});
