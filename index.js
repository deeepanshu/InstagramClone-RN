import {AppRegistry} from 'react-native';
import Amplify from 'aws-amplify';

import App from './src/App';
import config from './src/aws-exports';
import {name as appName} from './app.json';

Amplify.configure(config);

AppRegistry.registerComponent(appName, () => App);
