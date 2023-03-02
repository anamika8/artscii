// Function to validate props passed to the Player componeont. Throws errors for Player to catch

export function validateDisplayManagerProps (props) {
    let validModes = ['image', 'ascii']
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
