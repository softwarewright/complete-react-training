import React from 'react'
import Person from './Person/Person'

class People extends React.PureComponent {

    state = {}

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    // shouldComponentUpdate = (nextProps, nextState) => {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     return (
    //         this.props.people !== nextProps.people ||
    //         this.props.clicked !== nextProps.clicked ||
    //         this.props.changed !== nextProps.changed
    //     );
    // }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        console.log('[People.js] componentDidUpdate', snapshot);
    }

    componentWillUnmount = () => {
        console.log('[People.js] componentWillUnmount')
    }

    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        console.log('[People.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'}
    }

    render() {
        console.log('[People.js] rendering...')

        return this.props.people
            .map( ({ name, age, id }) => <Person 
                changed={(event) => this.props.changed(id, event)}
                click={() => this.props.clicked(id)}
                key={id} name={name} age={age} />)
    }
    
}

export default People;