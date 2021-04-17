import * as React from 'react';
import {View, ViewStyle} from 'react-native';
import {forwardRef, MutableRefObject, ReactNode, useImperativeHandle, useState} from 'react';
import Modal from 'react-native-modal';
import {Button, Icon, Text} from '@ui-kitten/components';

import styles from './ModalBoxStyle';
import {Metrics} from "@src/themes";

interface Props {
  children?: ReactNode | ReactNode[];
  hideFooter?: boolean;
  title?: string;
  renderHeaderComponent?: () => ReactNode;
  renderFooterComponent?: () => ReactNode;
  loading?: boolean;
  containerStyle?: ViewStyle;
}

const ButtonIcon = (params) => (
  <Icon {...params} name={'close'} />
);

export const ModalBox =  forwardRef(
  (props: Props, ref: MutableRefObject<any>) => {
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(ref, () => ({
      showModal: onShow,
      hideModal: onHide,
    }));

    const onHide = () => {
      setIsVisible(false);
    }

    const onShow = () => {
      setIsVisible(true);
    }


    const renderTitle = () => {
      if (!props.title) {
        return null;
      }
      return (
        <View style={styles.header}>
          <Text numberOfLines={1} category={'h3'}>{props.title}</Text>
        </View>
      );
    };

    const renderHeaderComponent = () => {
      if (!props.renderHeaderComponent) {
        return null;
      }
      return props.renderHeaderComponent();
    };

    const renderFooter = () => {
      if(props.renderFooterComponent){
        return props.renderFooterComponent();
      }
      if(props.hideFooter){
        return;
      }
      return(
        <Button
          onPress={onHide}
          accessoryRight={ButtonIcon}
        />
      )
    }


    return (
      <Modal
        onBackdropPress={onHide}
        coverScreen={true}
        isVisible={isVisible}
        style={styles.modal}
        avoidKeyboard={true}
        useNativeDriver={true}
        hideModalContentWhileAnimating={true}
      >
        <View
          style={{ ...styles.container, ...props.containerStyle }}>
          {renderHeaderComponent()}
          {renderTitle()}
          <View style={{paddingVertical: Metrics.vertical._10}}>
            {props.children}
          </View>
          <View style={{paddingVertical: Metrics.vertical._10}}>
            {renderFooter()}
          </View>
        </View>
      </Modal>
    );
  })
