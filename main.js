/*
    LiveG Contributors Hub

    Copyright (C) LiveG. All Rights Reserved.

    https://opensource.liveg.tech/contributors
    Licensed by the LiveG Open-Source Licence, which can be found at LICENCE.md.
*/

import * as astronaut from "https://opensource.liveg.tech/Adapt-UI/astronaut/astronaut.js";

export var HomePage = astronaut.component("HomePage", function(props, children) {
    return Page(props) (
        Section (
            Container({attributes: {"aui-justify": "middle"}}) (
                Heading({level: 1, styles: {fontSize: "rem"}}) (
                    BrandWordmark(_("livegContributorsHub")) (
                        Text(_("livegContributorsHub_wordmark"))
                    )
                ),
                Paragraph() (_("livegContributorsHub_tagline"))
            )
        )
    );
})

export var MainScreen = astronaut.component("MainScreen", function(props, children) {
    var homePage = HomePage({showing: true}) ();

    return Screen(props) (
        Header (
            Text(_("livegContributorsHub"))
        ),
        PageMenu (
            PageMenuButton({page: homePage}) (_("home"))
        ),
        homePage
    );
});