import React from 'react';

const FormRadio = ({ items, onClick, value, label }) => {
    return (
        <div>
            <div style={styles.label} >{label}</div>
            <div style={styles.radioContainerItems} >
                {
                    items.map((item, index) => {
                        const radioStyle = value && item.value === value
                            ? styles.radioSelected
                            : styles.radio

                        return (
                            <div key={index} style={styles.radioContainer} >
                                <div style={radioStyle} onClick={() => onClick(item.value)}  >
                                    &nbsp;
                            </div>
                                <span style={styles.label} >{item.label}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

FormRadio.defaultProps = {
    items: [], // exp: {label:'', value:'' }
    value: '',
    label: '',
    onClick: value => { }
}

const styles = {
    radioContainerItems: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    radioContainer: {
        display: 'flex',
        marginRight: '10px',
    },
    radio: {
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        background: '#fff',
        border: 'solid 2px #1d598d',
        cursor: 'pointer'
    },
    radioSelected: {
        width: '25px',
        height: '25px',
        borderRadius: '50%',
        background: '#377bb5',
        border: 'solid 2px  #1d598d',
        cursor: 'pointer'
    },
    label: {
        marginBottom:'5px',
        marginLeft:'5px'
    }
}

export default FormRadio