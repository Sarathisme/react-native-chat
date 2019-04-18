import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input, ListItem} from 'react-native-elements';
import styles from '../stylesheets/NewUser';
import store from '../reducers/Store';
import UserController from '../controllers/UserController';

export default class NewUser extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        this.getUsers = this.getUsers.bind(this);
        this.chatWithUser = this.chatWithUser.bind(this);
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'steelblue',
            textColor: 'white'
        },
        headerTitle: <Text style={styles.title}>Add User</Text>,
    };

    async getUsers(query) {
        const response = await UserController.getUsersByQuery(store.getState().user.id, query);
        this.setState({
            users: response.results
        });
    }

    chatWithUser(data) {
        this.props.navigation.navigate("Conversation", {name: data.name, photo: data.photo, id: data.id});
    }

    render() {
        return(
            <View>
                <Input style={styles.input} placeholder="Enter a username" shake={true} onChangeText={this.getUsers}/>
                <View>
                    {this.state.users.map((user, i) =>
                        <ListItem
                            key={i}
                            leftAvatar={{source: {uri: user.photo}}}
                            title={user.name}
                            subtitle={user.email}
                            onPress={() => this.chatWithUser(user)}
                        />
                    )}
                </View>
            </View>
        )
    }
}