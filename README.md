itemControlAPI
==============

Very simple API for controlling html items with enabling/disabling/activating/deactivating functionalities

###Example

```javascript
  var toolbar = new oojs.createToolbar('myToolbar');
  var toolbarItem = toolbar.items['0'];
  toolbarItem.disable();
  toolbarItem.enable();
  toolbarItem.activate();
```