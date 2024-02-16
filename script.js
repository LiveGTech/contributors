/*
    LiveG Contributors Hub

    Copyright (C) LiveG. All Rights Reserved.

    https://opensource.liveg.tech/contributors
    Licensed by the LiveG Open-Source Licence, which can be found at LICENCE.md.
*/

import * as $g from "https://opensource.liveg.tech/Adapt-UI/src/adaptui.js";
import * as astronaut from "https://opensource.liveg.tech/Adapt-UI/astronaut/astronaut.js";

window.$g = $g;

astronaut.unpack();

import * as main from "./main.js";

$g.waitForLoad().then(function() {
    return $g.l10n.selectLocaleFromResources({
        "en_GB": "locales/en_GB.json"
    });
}).then(function(locale) {
    window._ = function() {
        return locale.translate(...arguments);
    };

    $g.theme.setProperty("primaryHue", "200");
    $g.theme.setProperty("primarySaturation", "100%");
    $g.theme.setProperty("primaryLightness", "55%");
    $g.theme.setProperty("secondaryHue", "200");
    $g.theme.setProperty("secondarySaturation", "100%");
    $g.theme.setProperty("secondaryLightness", "40%");

    $g.theme.setProperty("primaryUIText", "black");
    $g.theme.setProperty("secondaryUIText", "black");

    $g.sel("title").setText(_("livegContributorsHub"));

    astronaut.render(main.MainScreen({showing: true}) ());
});