import React from 'react'

export default class BaseComponent extends React.Component {

    onChange = name => event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setPropertyInState({ ... this.state }, name, value)
    }

    onChangeValue = (name, value) => {
        this.setPropertyInState({ ... this.state }, name, value)
    }

    setPropertyInState = (properties, path, value) => {
        if (!path) return

        const parts = path.split('.');
        if (parts.length > 1) {
            for (let i = 0; i < parts.length - 1; i++) {
                if (!properties[parts[i]]) properties[parts[i]] = {};
                properties = properties[parts[i]];
            }
        }
        if (parts.length > 1) {
            properties[parts[parts.length - 1]] = value;
            this.setState({ [parts[0]]: properties })
        } else {
            this.setState({ [parts[0]]: value })
        }
    }
}