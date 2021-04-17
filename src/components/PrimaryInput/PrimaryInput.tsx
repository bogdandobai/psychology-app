import * as React from 'react'
import {Icon, Input, Text} from "@ui-kitten/components";
import {Pressable, StyleSheet} from "react-native";
import {Colors, Metrics} from "@src/themes";
import {MutableRefObject, useState} from "react";

interface Props {
    value: string
    onChangeText: (value:string) => void;
    placeHolder: string
    validator?: (value: string) => boolean;
    secureTextEntry?: boolean
    setSecureTextEntry?:(secureTextEntry: boolean) => void
    password?: boolean
    icon?: string
    onSubmitEditing?: () => void;
}

export const PrimaryInput =  React.forwardRef(
  (props: Props, ref: MutableRefObject<any>) => {
    const [status, setStatus] = useState('danger');

    const onChangeText = (value: string) => {
        if(!props.validator){
            props.onChangeText(value);
            return;
        }
        if(!props.validator(value)){
            setStatus("warning")
        } else {
            setStatus("basic")}
        props.onChangeText(value);
    }

    const onBlur = () => {
        if(!props.validator){
            return null;
        }
        if(props.validator(props.value)){
            setStatus("success")
        }else{
            setStatus('danger')
        }
    }


    const toggleSecureEntry = () => {
        props.setSecureTextEntry(!props.secureTextEntry);
    };

    const renderIcon = (iconProps) => {
        if (props.password===true) {
            return (
                <Pressable onPress={toggleSecureEntry}>
                    <Icon {...iconProps} name={props.secureTextEntry ? 'eye-off' : 'eye'}/>
                </Pressable>
            )
        } else
        if(!props.icon){
            return null;
        }else {
            return (
                <Icon {...iconProps} name={props.icon}/>
            )
        }
    }

    const onSubmitEditing = () => {
        props.onSubmitEditing && props.onSubmitEditing();
    }

    return(
        <Input
            ref={ref}
            onBlur={onBlur}
            autoCapitalize={"none"}
            status={status}
            style={styles.padding}
            label={() => <Text style={{paddingBottom:Metrics.vertical._10
            }} category={"s1"}>{props.placeHolder}</Text>}
            size={"medium"}
            value={props.value}
            onChangeText={onChangeText}
            secureTextEntry={props.secureTextEntry}
            accessoryRight={renderIcon}
            onSubmitEditing={onSubmitEditing}
            // keyboardType={"phone-pad"}
        />
    )
})

const styles = StyleSheet.create({
    padding: {
        paddingVertical: Metrics.vertical._8,
        backgroundColor: '#fdfaef',
        borderColor: Colors.brown
    },
})
