import React from 'react';

export class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timer = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    tick() {
        this.setState({
            date: new Date()
        });
    }
    render() {
        return <h1>{this.state.date.toLocaleTimeString()}</h1>;
    }
}
export default Clock;