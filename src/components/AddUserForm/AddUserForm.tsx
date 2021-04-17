import * as React from 'react';
import {Datepicker, Layout, Text} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import { Metrics } from '@src/themes';
import {PrimaryInput} from "@src/components";
import {useState} from "react";

const useInputState = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);
    return { value, onChangeText: setValue };
};

export const AddUserForm = () => {
    const nameInput = useInputState();
    const phoneInput = useInputState();
    const emailInput = useInputState();
    const cnpInput = useInputState();
    const [date, setDate] = useState(new Date());

    return (
        <Layout style={styles.flex}>
            <PrimaryInput {...nameInput} placeHolder={'NUME'}/>
            <PrimaryInput {...phoneInput} placeHolder={'NUMAR DE TELEFON'}/>
            <PrimaryInput {...emailInput} placeHolder={'EMAIl'}/>
            <PrimaryInput {...cnpInput} placeHolder={'CNP'}/>
            <Datepicker
                style={{paddingVertical: Metrics.vertical._8}}
                label={() => <Text category={"s1"}>{"DATA NASTERII"}</Text>}
                date={date}
                onSelect={nextDate => setDate(nextDate)}
            />
        </Layout>
    );
};

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        marginHorizontal: Metrics.horizontal._24,
        padding: Metrics.horizontal._24,
        borderRadius: Metrics.horizontal._16,
    },
    padding: {
        paddingHorizontal: Metrics.horizontal._24,
        backgroundColor:'white'
    },
    buttonWrapper:{
        backgroundColor:'white',
        paddingHorizontal: Metrics.horizontal._48
    },
    title: {
        alignSelf:'center'
    }
});
