/* eslint-disable import/no-extraneous-dependencies */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './src/polyfills';

window.ENV_TEST = true;

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });
