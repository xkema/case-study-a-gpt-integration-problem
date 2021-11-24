// an always|auto-enabled gpt mock object that enabled by a global flag "window['H0rWrXR3crg']['gptMockEnabled']" or a search param "?mock=1" or "?mock=true"
if((window['H0rWrXR3crg'] && window['H0rWrXR3crg']['gptMockEnabled'] === true)  || window.location.search.split(/[?&]/).findIndex((queryParam) => /^mock=(?:true|1)$/.test(queryParam)) !== -1) {
  // a reference to the page slots
  const __slots = [];
  // "pubads_impl_***.js" library may evaluate this mock with non-mock objects if, mock module is enabled but there is no ad blocker usage
  const gptMock = {
    cmd: {
      push: (callback) => {
        callback.call();
      }
    },
    defineSlot: (adUnitPath, size, div) => {
      const slot = {
        addService: () => {},
        getAdUnitPath: () => adUnitPath,
        getSlotElementId: () => div,
        __size: size
      };
      __slots.push(slot);
      return slot;
    },
    pubads: () => {},
    enableServices: () => {},
    display: (divOrSlot) => {
      const slot = __slots.find(slot => slot.getSlotElementId() === divOrSlot);
      // override slot size if input is malformed or it is not a simlified size input
      if(!(
        Array.isArray(slot.__size)
        && slot.__size.length === 2
        && Number.isInteger(slot.__size[0])
        && slot.__size[0] > 0
        && Number.isInteger(slot.__size[1])
        && slot.__size[1] > 0
      )) {
        slot.__size = 'unexpected_size';
      }
      const slotElement = document.createElement('div');
      slotElement.style.cssText = `display: flex; flex-direction: column; justify-content: center; margin: 0 auto; background-color: blue; min-height: 50px;`;
      if(slot.__size !== 'unexpected_size') {
        slotElement.style.cssText += `width: ${slot.__size[0]}px; height: ${slot.__size[1]}px;`;
      }
      // create and append info texts
      [
        slot.getAdUnitPath(),
        slot.__size,
        slot.getSlotElementId()
      ].forEach((infoItem) => {
        const slotInfoElement = document.createElement('span');
        slotInfoElement.innerText = `${infoItem.toString()}`;
        slotElement.insertAdjacentElement('beforeEnd', slotInfoElement);
      });
      // insert mock slot
      document.querySelector(`#${divOrSlot}`).insertAdjacentElement('beforeEnd', slotElement);
    }
  };
  // replace "googletag" object with mock
  window.googletag = gptMock;
}
