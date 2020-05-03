import React from "react";

import {
	Box,
	Button,


	Grommet,
	Text,
	Paragraph,
	ResponsiveContext,
} from "grommet";

import {

	Instagram,
	DocumentPdf,
	Linkedin,
	Contact,


} from "grommet-icons";

import Masonry from "react-masonry-component";
import MetaTags from "react-meta-tags";

class Panels extends React.Component {

    render() {
        const url = 'url(/images/' + 'panels.gif' + ' )';

		return (
            <Grommet full>

                <Box fill flex={false} direction='row-responsive'>

<Box fill background={url}></Box>
<Box fill background="black" direction='column' pad='xlarge'>

<h1>Panels</h1>
<Text> An array of 15 4''x8' panels mounted on a frame with servo motors controlling them. An ultrasonic motor feeds the Arduino microcontroller board the audience's location and that information is translated into individual panel's rotational angle.</Text>


</Box>

                </Box>

</Grommet>

        );}


}

export default Panels ;
