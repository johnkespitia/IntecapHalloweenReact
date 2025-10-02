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
        const divi = this.state.dia/this.state.mes;
    }

    setMes = (e) =>{
        const newMes = e.target.value;
        this.setState({ mes: newMes });
    }
// Lifecycle methods 
// se ejecuta una sola vesz al moentarse el componente
    componentDidMount() {
        console.log('MyInput mounted');
    }

    shouldComponentUpdate(nextProps, nextState) {
        this.state.dia == nextState.dia && this.state.mes == nextState.mes
        // console.log('MyInput should update?');
        // return false; // no se actualiza
        return true; // si se actualiza
    }
// se ejecuta cada vez que el estado del componente se actualiza
    componentDidUpdate() {
        console.log('MyInput updated');
    }

    componentDidCatch(error, info) {
        console.log('MyInput caught an error ', error);
    }

    componentWillUnmount() {
        console.log('MyInput will unmount');
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('MyInput getSnapshotBeforeUpdate');
        return null;
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
            {/* <NotFound /> */}
            <h2>Fecha: {this.state.dia} / {this.state.mes}</h2>
        </div>;
    }
}

// const NotFound = () => {
//     throw new Error('I am a forced error');
//     return <div>Not Found</div>;
// }   

export default MyInput;