// Function to validate props passed to the Player componeont. Throws errors for Player to catch
let validModes = ['image', 'ascii']

function validateDisplayManagerProps (props) {
    if (!props.displayMode){
        throw new Error('No displayMode sent to component!')
    }

    if (!validModes.includes(props.displayMode)) {
        throw new Error('Invalid Display Type');
    }

    if (!props.src) {
        throw new Error('No src sent to component!')
    }
}

export {validModes, validateDisplayManagerProps}