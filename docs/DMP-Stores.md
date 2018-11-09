# Stores

All stores are located in `fe-react/src/app/stores` directory.

## List of stores
There are 8 stores at the moment:
- bookingRoomStore
- dropdownStore
- oktaAuthStore
- roomRateCalendarStore
- sessionStore
- toolTipStore
- topNavFilterStore
- uiStore

There is also `store.js` file there which exports 5 main stores:

```javascript
export {
	uiStore,
	oktaAuthStore,
	sessionStore,
	bookingRoomStore,
	roomRateCalendarStore
}
```

## Shape of store class

```javascript
import { observable, action } from 'mobx';

class ExampleStore {
  @observable variable1 = true;
  @observable variable2 = false;
  // ...

  constructor() {
    // ...
  }

  // Methods
  exampleStoreMethod() {
    // ...
  }
  // ...

  // Actions
  @action exampleStoreAction() {
    // ...
  }
  // ...

}
const exampleStore = new ExampleStore();

export default exampleStore
```

## Usage

Stores are used in chunks and passed to components like below:

```javascript
import { render } from 'react-dom';
import uiStore from 'stores/UiStore';
import oktaAuthStore from 'stores/OktaAuthStore';

const stores = { uiStore, oktaAuthStore };

render(<Component {...stores} {...props}/>, node);
```
