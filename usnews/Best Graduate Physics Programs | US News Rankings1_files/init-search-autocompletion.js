define(["jquery"],function($){"use strict";var initAutocomplete=function($input){var settings={};settings.responseFormat=$input.data("usnResponseFormat"),settings.serviceUrl=$input.data("usnAutocompleteUrl"),settings.paramName=$input.data("usnParamName"),settings.minChars=$input.data("usnMinChars"),settings.ignoreNumbers=$input.data("usnIgnoreNumbers"),$input.usnAutocomplete&&$input.usnAutocomplete({responseFormat:settings.responseFormat,ignoreNumbers:settings.ignoreNumbers,autocompleteOptions:{serviceUrl:settings.serviceUrl,paramName:settings.paramName,minChars:settings.minChars}})};return function(formSelector){var $form=$(formSelector),$programField=$("select[name=program]",$form),$nameField=$("input[name=name]",$form),originalUrl=$nameField.data("usn-autocomplete-url"),onProgramChanged=function(){$nameField.data("usn-autocomplete-url",originalUrl+"?program="+$programField.val()),$nameField.autocomplete&&$nameField.autocomplete()&&$nameField.autocomplete().dispose(),initAutocomplete($nameField)};$programField.on("change",onProgramChanged),onProgramChanged()}});