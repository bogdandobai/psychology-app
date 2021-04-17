import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {useState} from "react";
import {Metrics} from "@src/themes";
import {PrimaryInput} from "@src/components";
import {validateEmail, validatePassword} from "@src/transforms/utils";

interface Props {
    onSetEmail: (email:string) => void;
    onSetPassword: (password:string) => void;
}

export const LoginForm = (props: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const onSetEmail = (value: string) => {
        setEmail(value);
        props.onSetEmail(value);
    }

    const onSetPassword = (value: string) => {
        setPassword(value);
        props.onSetPassword(value);
    }

    return(
        <View style={styles.padding}>
            <View style={styles.padding}>
                <PrimaryInput
                    value={email}
                    onChangeText={onSetEmail}
                    placeHolder={"EMAIL"}
                    validator={() => true}
                    icon={'person-outline'}
                />
                <View style={{height:Metrics.vertical._20}}/>
                <PrimaryInput
                    value={password}
                    password={true}
                    onChangeText={onSetPassword}
                    placeHolder={"PAROLA"}
                    validator={validatePassword}
                    secureTextEntry={secureTextEntry}
                    setSecureTextEntry={setSecureTextEntry}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    padding: {
        paddingVertical: Metrics.vertical._32,
    },
})
