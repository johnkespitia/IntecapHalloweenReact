import React from 'react';
class MyInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dia: '31',
            mes: '10'
        };
    }

    setDia = (e) => {
        const newDia = e.target.value;
        this.setState({ dia: newDia });
    }

    setMes = (e) =>{
        const newMes = e.target.value;
        this.setState({ mes: newMes });
    }

    render() {
        return <div>
            <label>Dia: </label>
            <input type="number" 
                min={1} 
                max={31} 
                defaultValue={this.state.dia} 
                onChange={this.setDia} />
            <br />
            <label>Mes: </label>
            <input type="number" min={1} max={12} defaultValue={this.state.mes} 
                onChange={this.setMes} />
            <br />
            <h2>Fecha: {this.state.dia} / {this.state.mes}</h2>
        </div>;
    }
}

export default MyInput;