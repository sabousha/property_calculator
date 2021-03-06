import React, { Component } from "react";

class OperatingExpenses extends Component {
  render() {
    return (
      <form>
        <h3>Monthly Operating Expenses</h3>
        <div className="row">
          <div className="col-md-6 text-right">Utilities:</div>
          <input
            className="from-control col-md-6"
            type="number"
            name="utilities"
            value={this.props.stateProp.utilities}
            onChange={this.props.onClick}
          />
        </div>

        <div className="row">
          <div className="col-md-6 text-right">Property Tax:</div>
          <input
            className="from-control col-md-6"
            type="number"
            name="propertyTax"
            value={this.props.stateProp.propertyTax}
            onChange={this.props.onClick}
          />
        </div>

        <div className="row">
          <div className="col-md-6 text-right">Insurance:</div>
          <input
            className="from-control col-md-6"
            type="number"
            name="insurance"
            value={this.props.stateProp.insurance}
            onChange={this.props.onClick}
          />
        </div>

        <div className="row">
          <div className="col-md-6 text-right">Maintenance:</div>
          {/* <select value={this.props.stateProp.paymentFreqPerYear} 
                            onChange={this.props.stateProp.handlePaymentFreqChange}>
                        <option value={'%'}>Percenteage</option>
                        <option value={'$'}>Dollar Amount</option>
                    </select> */}
          <input
            className="from-control col-md-6"
            type="number"
            name="maintenance"
            value={this.props.stateProp.maintenance}
            onChange={this.props.onClick}
          />
        </div>
      </form>
    );
  }
}

export default OperatingExpenses;
