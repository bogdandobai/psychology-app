import * as React from 'react';
import {KeyboardAvoidingView, Platform, View} from 'react-native';
import {AddUserForm} from "@src/components";

import styles from './AddUserStyle'
import {Button, Layout} from "@ui-kitten/components";
import {Metrics} from "@src/themes";

export const AddUser = () => {

    const onAddUser = () => {

    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.flex}
        >
            <View style={styles.backgroundGraphic}/>
            <View style={styles.form}>
                <AddUserForm/>
            </View>
            <Layout style={styles.buttonWrapper}>
                <Button style={{borderRadius: Metrics.horizontal._16, backgroundColor: 'rgb(213,191,187)', borderWidth:0}} size={'giant'} onPress={onAddUser}>ADAUGĂ CLIENT</Button>
            </Layout>
        </KeyboardAvoidingView>
    );
};



