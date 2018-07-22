import React from 'react';
import ReactDOM from 'react-dom';


class ClickGame extends React.Component {
    constructor() {
        super();
        //初始一些状态值
        this.state = {
            count: 0,
            countDown: 3000
        }
    }

    //组件挂载后开始计时
    componentDidMount() {
        this.timer = this.beginCountDown();
    }

    //
    beginCountDown = () => {
        this.setState({
            count: 0,
            countDown: 3000
        });

        //倒计时的定时器
        return setInterval(() => {
            if (this.isTimeUp()) {
                clearInterval(this.timer);
                return
            }
            this.setState({
                countDown: this.state.countDown - 10
            })
        }, 10);
    };

    //判断倒计时时间是否结束
    isTimeUp() {
        return this.state.countDown <= 0;
    }

    //处理点击,每次点击计数+1
    handleClick = () => {
        if (this.isTimeUp()) {
            return
        }
        this.setState({
            count: this.state.count + 1
        })
    };

    //处理渲染
    render() {
        //渲染的时候进行判断是否继续倒计时,默认显示倒计时
        let hint = <h1>Count Down:{this.state.countDown / 1000}</h1>;
        if (this.isTimeUp()) {
            hint = (
                //如果倒计时结束了,就切换显示目前state中的count
                <div>
                    <h1>时间到了!您点击了{this.state.count}下,要重来吗?</h1>
                    <button onClick={this.beginCountDown}>点击重来</button>
                </div>
            )
        }

        let btnStyle = {
            width: 200,
            height: 200,
            backgroundColor: this.state.count % 2 === 0 ? "#f00" : "#0f0"
        };
        //render方法中return的是展示内容
        return (
            <div>
                <h1>{this.props.title}点击按钮以增加</h1>
                {hint}
                <button style={btnStyle}
                        onClick={this.handleClick}>点我增加:{this.state.count}</button>
            </div>
        )
    }
}

ReactDOM.render(
    <ClickGame title="开始玩游戏吧!"/>,
    document.getElementById('root'));
