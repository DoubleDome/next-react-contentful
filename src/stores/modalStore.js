import { action, observable } from 'mobx';

class ModalStore {
  @observable
  visible = false;

  @observable
  modalId = null;

  @action
  hide = () => {
    this.visible = false;
  };

  @action
  show = modalId => {
    this.modalId = modalId;
    this.visible = true;
  };
}

export default ModalStore;
