# Flash

### Flexible Flash messages for Meteor

**Version**: `0.1.0`

#### Features

- Automatically detects CSS Framework (Bootstrap, Foundation) and styles flash messages accordingly
- If [IronRouter](https://github.com/EventedMind/iron-router) is present, flash messages will be cleared on page-change (otherwise, you will need to implement this logic yourself)
- Multiple profile support. Comes with three profiles out-of-the-box
	- **bootstrap** - Styling for Bootstrap CSS Framework
	- **foundation** - Styling Zurb Foundation
	- **basic** - Unstyled flash-messages for easy customisation
	- *Create your own*
- Delayed flash message clearing (disabled by default)

#### Install
`mrt add flash`


#### Set flash message

`Flash.set(id, message)` - Same as calling `Flash.warning(id, message)`.

**id** *(optional, defaults to `__default__`)*  - assigns an id to a message. Helpful for multiple flash messages on the same page.

**message** - Flash message

`Flash.warning(id, message)`

`Flash.success(id, message)`

`Flash.info(id, message)`

`Flash.danger(id, message)`

#### Template helpers

Simply use `{{flash id}}` helper to display flash message. **id** parameter is optional, defaults to `__default__`.

#### Clear flash message

`Flash.clear()` - clear all flash messages.

`Flash.clear(id)` - clear flash message with specific id.

Alternatively, it is possible for a message to clear out itself after a certain period of time. By default, this is disabled. To enable this, specify time (in milliseconds), e.g.: `Flash.config.timeout = 5000`. The message will be cleared after 5 seconds.

#### Switching profile

Switching profile allows to choose the presentation of flash messages.

It comes with three profiles: Bootstrap, Foundation and Basic.

It tries to detect if either Bootstrap or Foundation are present in the webapp and switches the profile for you.

Alternatively, you can create your own profile, e.g.:

    Flash.profiles.myprofile = {
      tag: 'div',
      closeButton: '<a href="#" class="close">&times</a>',
      classes: ['myflash', 'panel'],
      statePrefix: 'myflash-',
      attributes: { "data-myflash": ''}
    };

To switch profile manually, call `Flash.switchProfile(profile_name)`.

**tag** - flash message element HTML tag.

**closeButton** - if `null`, close-button will not be inserted. Otherwise, provide html code for your button.

**classes** - list of css classes.

**statePrefix** - prepends specified text to a class that identifies the state of a flash message. For example, when calling `Flash.success` it will generate a CSS class like so `statePrefix + "success"`

**attributes** - a map of element HTML attributes.
