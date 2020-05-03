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

class Towers extends React.Component {

    render() {
        const url = 'url(/images/' + 'pillars.gif' + ' )';

		return (
            <Grommet full>

                <Box fill flex={false} direction='row-responsive'>

<Box fill background={url}></Box>
<Box fill background="black" direction='column' pad='xlarge'>

<h1>Pillars</h1>
<Text> Three 1x1x8ft pillars in a darkroom with particle effects projected on them. An array of microphones capture the monitor the noise level in the room and adjust the particle effects accordingly.</Text>


</Box>

                </Box>

</Grommet>

        );}


}

export default Towers ;
