import * as React from 'react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, theme } from '@src/themes';
import { View } from 'react-native';
import createStore from '../store/CreateStore';
import Api from '@src/services/api';
import { Provider } from 'react-redux';
import { RootContainer } from '@src/containers';

const { store } = createStore();
Api.getInstance();

const App = () => {
    return (
        <View style={{flex:1}}>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider
                {...eva}
                customMapping={mapping}
                theme={{ ...eva.light, ...theme }}
            >
                <Provider store={store}>
                    <RootContainer />
                </Provider>
            </ApplicationProvider>
        </View>
    );
};

export default App;
