import React from 'react';
import ReactDOM from 'react-dom';
import {BigNumber} from 'bignumber.js';

class Converter extends React.Component {

    handleChange(e) {
        let money = new BigNumber(e.target.value).times(this.props.currency.rate);
        this.props.onMoneyChange(money);
    }

    handleBuy() {
        this.props.onBuy(this.props.money);
    }

    render() {
        let moneyNow=new BigNumber(this.props.money / this.props.currency.rate);

        return (
            <fieldset>
                <legend>
                    {this.props.currency.name}
                </legend>
                <input type="number" value={moneyNow.toFixed(3)}
                       onChange={(e) => this.handleChange(e)}/>
                <input type="button" value="付款" onClick={() => this.handleBuy()}/>
            </fieldset>
        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            money: 0,
            hint: <h1>yeah</h1>
        }
    }

    onBuy = (money) => {
        let hint = null;

        if (money >= 10) {
            hint = <h1>购买成功!剩余{new BigNumber(money).minus(10).toNumber()}</h1>;
        } else {
            hint = <h1>钱不够,请加钱</h1>
        }

        this.setState({
            money: money,
            hint: hint
        })
    };

    onMoneyChange = (money) => {
        this.setState({
            money: money
        })
    };

    render() {
        return (
            <div>
                <h1>换算器</h1>
                <div>
                    <Converter currency={{name: "人民币", rate: 1}} money={this.state.money} onBuy={this.onBuy}
                               onMoneyChange={this.onMoneyChange}/>
                    <Converter currency={{name: "美元", rate: 6.7}} money={this.state.money} onBuy={this.onBuy}
                               onMoneyChange={this.onMoneyChange}/>
                    <Converter currency={{name: "日元", rate: 0.0607}} money={this.state.money} onBuy={this.onBuy}
                               onMoneyChange={this.onMoneyChange}/>
                    {this.state.hint}
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);