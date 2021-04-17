import { Button, Card, Modal, Text, Icon } from '@ui-kitten/components';
import React from 'react';
import styles from './ModalToasterStyle';
import { theme } from '@src/themes';
import { View } from 'react-native';

interface Props {}

interface State {
  visible: boolean;
  title: string;
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export class ModalToaster extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      title: '',
      message: '',
      type: 'success',
      onClose: () => {},
    };
  }

  onShow = (
    title: string,
    message: string,
    onClose: () => void,
    type: 'success' | 'error' = 'success',
  ) => {
    this.setState({ visible: true, title, message, type, onClose });
  };

  onDismiss = () => {
    this.setState({ visible: false }, () => this.state.onClose());
  };

  render() {
    const isError = this.state.type === 'error';
    const isSuccess = this.state.type === 'success';

    return (
      <Modal
        visible={this.state.visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => this.setState({ visible: true })}
      >
        <Card disabled={true} style={styles.container}>
          <View style={styles.iconContainer}>
            {isError && (
              <Icon
                name={'alert-circle-outline'}
                fill={theme['color-danger-500']}
              />
            )}
            {isSuccess && (
              <Icon
                name={'alert-circle-outline'}
                style={styles.icon}
                fill={theme['color-success-500']}
              />
            )}
          </View>

          <Text category={'h5'} style={styles.title}>
            {this.state.title}
          </Text>
          <Text category={'p1'}>{this.state.message}</Text>
          <Button onPress={this.onDismiss} style={styles.button}>
            INCHIDE
          </Button>
        </Card>
      </Modal>
    );
  }
}
