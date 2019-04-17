import React, {Component} from 'react';
import {View} from 'react-native';
import Dialog from "react-native-dialog";

export default class NewUser extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <View>
                <Dialog.Container visible={this.props.visible}>
                    <Dialog.Title>Account delete</Dialog.Title>
                    <Dialog.Description>
                        Do you want to delete this account? You cannot undo this action.
                    </Dialog.Description>
                    <Dialog.Button label="Cancel" onPress={this.props.dismiss}/>
                    <Dialog.Button label="Delete" />
                </Dialog.Container>
            </View>
        )
    }
}