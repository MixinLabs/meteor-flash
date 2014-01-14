Handlebars.registerHelper('flash', function (id) {

  id = (typeof(id) === 'string' ? id : null);
  var flash = Flash.get(id);

  if (!flash) {
    return '';
  }

  var type        = flash[0],
      msg         = flash[1],
      profile     = Flash.config.profile,
      classes     = profile.classes,
      classesLen  = classes.length,
      attrs       = profile.attributes,
      closeButton = profile.closeButton,
      classesStr  = '',
      attrStr     = '',
      openTag, closeTag, tmpl, i, key, val;


  for (i = 0; i < classesLen; i++) {
    classesStr += classes[i] + ' ';
  }
  classesStr += profile.statePrefix + type;

  for (key in attrs) {
    if (attrs.hasOwnProperty(key)) {
      val = attrs[key];
      attrStr += key;
      if (val !== '' || val !== null) {
        attrStr += '="' +val+ '"'
      }
      attrStr += ' ';
    }
  }

  openTag  = '<' +profile.tag+ ' ' +attrStr+ ' class="' +classesStr+ '">';
  closeTag = '</' + profile.tag + '>';

  tmpl  = openTag;
  tmpl += msg;
  tmpl += closeButton || '';
  tmpl += closeTag;

  return new Handlebars.SafeString(tmpl);
});