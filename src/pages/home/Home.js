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

const theme = {
	global: {
		edgeSize: {
			xxlarge: "230px",
		},
		font: {
			family: "Roboto",
			size: "14px",
			height: "20px",
		},
		colors: {
			brand: "#666169",
			border: {
				dark: "rgba(255,255,255,0.07)",
				light: "rgba(0,0,0,0.07)",
			},
		},
	},

	paragraph: {
		medium_custom: {
			size: "18px",
			height: "24px",
			maxWidth: "899px",
		},
	},

	components: {
		p: {
			component: "Paragraph",
			props: { size: "18px" },
		},
	},
	text: {
		xxxlarge: {
			size: "40px",
			height: "40px",
		},
		gigantic: {
			size: "110px",
			height: "110px",
			maxWidth: "816px",
		},
	},
};

const photo = [
	{
		name: "Towers",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat lacus in elementum dignissim. Mauris vitae enim vitae lorem euismod suscipit. Suspendisse nec nisl odio. Fusce dapibus metus quis tincidunt feugiat. Aliquam turpis risus, sollicitudin nec dolor vitae, laoreet molestie tortor. Suspendisse hendrerit in diam ut maximus. In fermentum, lorem eu dictum fringilla, mauris nunc aliquam ante, at eleifend dolor diam ut diam. Sed elementum, lectus in fermentum hendrerit, velit enim elementum tellus, quis sollicitudin ante metus quis sem. Proin lobortis lacus ultricies sodales bibendum. ",
		code: "towers",
		medium: "Sculpture",
		background: 'pillars.gif',date : "2017", tags: "#Minimalism #Projection #Audio"

	},
	{
		name: "To Remember",
		detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat lacus in elementum dignissim. Mauris vitae enim vitae lorem euismod suscipit. Suspendisse nec nisl odio. Fusce dapibus metus quis tincidunt feugiat. Aliquam turpis risus, sollicitudin nec dolor vitae, laoreet molestie tortor. Suspendisse hendrerit in diam ut maximus. In fermentum, lorem eu dictum fringilla, mauris nunc aliquam ante, at eleifend dolor diam ut diam. Sed elementum, lectus in fermentum hendrerit, velit enim elementum tellus, quis sollicitudin ante metus quis sem. Proin lobortis lacus ultricies sodales bibendum. ",
		code: "toremember",
		medium: "Photography",
		background: '10_mash.studio_toremember.jpg',date : "2018-Present", tags: "#Portrait #Collage #College"

	},
	{
		name: "Specter",
		detail:
			"Nunc lobortis tortor eu arcu pharetra, id laoreet ligula efficitur. Etiam a justo sem. Quisque ac facilisis erat, nec feugiat sapien. Nunc aliquam ac justo consectetur interdum. Sed consectetur porttitor sem.",
		code: "specters",
		medium: "Photography",

		background: 'ibtesumMashnoon012_mash.studio_specter.png'    ,date : "2020", tags: "#Portrait #Landscape #Experimental"

	},
	{
		name: "Quarantine",
		detail: "Maecenas feugiat ante eget magna lacinia, at condimentum neque ultrices. Fusce posuere fermentum pretium. Quisque suscipit ullamcorper augue. Aenean venenatis, leo malesuada iaculis pharetra, ipsum metus tincidunt nibh, vitae lobortis lorem purus eu mauris. Ut at ultricies nisl. Vestibulum finibus euismod est in aliquam. Sed cursus ultrices odio. Ut posuere elementum velit, a venenatis purus.",
		code: "q",
		medium: "Photography",
		background: 'IMG_9638_mash.studio_q.jpg'    ,date : "2020-present", tags: "#Portrait #Landscape #Nature"

	},
	{
		name: "Panels",
		detail: "Maecenas feugiat ante eget magna lacinia, at condimentum neque ultrices. Fusce posuere fermentum pretium. Quisque suscipit ullamcorper augue. Aenean venenatis, leo malesuada iaculis pharetra, ipsum metus tincidunt nibh, vitae lobortis lorem purus eu mauris. Ut at ultricies nisl. Vestibulum finibus euismod est in aliquam. Sed cursus ultrices odio. Ut posuere elementum velit, a venenatis purus.",
		code: "panels",
		medium: "Sculpture/Robotics",
		background: 'panels.gif'    ,date : "2020", tags: "#Robotics #Motion Tracking"

	},
];
class Home extends React.Component {
	constuctor() {
		this.routeChange = this.routeChange.bind(this);
	}

	routeChange() {
		let path = "google.com";
		this.props.history.push(path);
	}

	Projects = () => (
		<ResponsiveContext.Consumer>
			{size => (
				<Box
					pad={{
						left:
							size === "large"
								? "300px"
								: size === "medium"
									? " 300px"
									: "small",
						right: (size === "large") | (size === "medium") ? "180px" : "small",
					}}
					fill
					background='#e9e4ed'
					justify='center'
				>
					<Box
						pad={{ top: "10px", bottom: "20px" }}
						fill='horizontal'
						tag='header'
					>
						<Box
							gridArea='header'
							justify='start'
							align='center'
							direction='row'
							margin={{
								vertical: "15px",
								left: "8px",
							}}
						>
							<Text weight='Bold' color='#666169' size='25px' />
						</Box>
					</Box>
					

					<Masonry>
						{
							photo.map(item => {
								const url = 'url(/images/' + item.background + ' )';
								return (
									<Box
										background={url}
										onClick={() =>  window.location.href='/' + item.code }
										border
										height='400px'
										elevation='xxsmall'
										round='small'
										direction='column'
										margin='small'

										justify='center'
										width='300px'
										fill={size === "small" ? "horizontal" : ""}
									>
										<Box fill
											pad='medium'
											round='small'


										>
											<Box fill='vertical' >
											

												
											</Box>
											
										</Box>
										<Box 							pad='medium'
 flex={false} round='small' style={{
													backdropFilter: 'blur(20px)'
												}}>


													<Text color='white' weight='bold' size='25px'>
														{item.name}
								</Text>{" "}
													<Box direction='row' flex={false} gap='xsmall'>
														<Text size='small' color='status-error'>
{item.medium}									</Text>
														<Text size='small' color='light-3'>{item.date}</Text>
													</Box>
													<Text color='light-4' size='small'>{item.tags}</Text>
												</Box>
									</Box>
								);
							}
							)
						}
					</Masonry>
				</Box>
			)}
		</ResponsiveContext.Consumer>
	);

	render() {
		return (
			<div
				style={{
					backgroundColor: "#e9e4ed",
				}}
			>
				<Grommet full theme={theme}>
					<Box fill align='center' justify='center'>
						<MetaTags>
							<title>Mash Ibtesum </title>
							<meta
								name='description'
								content='A SOFTWARE ENGINEER & ARTIST BASED IN NEW YORK WORKING AT THE
							INTERESCTION OF ART AND TECHNOLOGY. I MAKE PRETTY THINGS THAT TRY
							TO TACKLE BIG PROBLEMS!'
							/>
							<meta property='og:title' content='Mash Ibtesum' />
						</MetaTags>
						<Box
							pad={{ horizontal: "xlarge" }}
							direction='column'
							justify='center'
						>
							<Text
								color='#9f98a3'
								weight='bold'
								size='xxlarge'
								margin={{ left: "5px" }}
							>
							</Text>
							<Text color='#666169' size='gigantic' weight='bold'>
								Mash Ibtesum
							</Text>
							<Paragraph
								color='#666169'
								size='medium_custom'
								weight=''
								margin={{ left: "5px" }}
							>
								I am a software engineer & artist based in New York. I love
								working at the intersection of art and technilogy.
							</Paragraph>
							<Box
								fill='horizontal'
								gap='medium'
								direction='row'
								margin={{ left: "5px" }}
							>
								<Button>
									<a href='mailto: ibtesumm@carleton.edu'>
										<Contact color='#666169' />{" "}
									</a>
								</Button>
								<Button>
									<a href='https://www.instagram.com/art_school_boyfriend/'>
										<Instagram color='#666169' />{" "}
									</a>
								</Button>
								{/* <Button>
								<Instagram color='#666169' />{" "}
							</Button> */}
								<Button>
									<a href='https://www.linkedin.com/in/mashny'>
										<Linkedin color='#666169' />{" "}
									</a>
								</Button>
								<Button>
									<a href='Resume_Mash.pdf'>
										<DocumentPdf color='#666169' />{" "}
									</a>
								</Button>
							</Box>
						</Box>
					</Box>

					{/* 
				
				New Section

				*/}
					{/* <Box
					pad={{ horizontal: "xlarge" }}
					fill
					background='#e9e4ed'
					direction='row-responsive'
					gap='xlarge'
				>
					<Box>
						<Paragraph
							color='#666169'
							size='medium_custom'
							weight=''
							margin={{ left: "5px" }}
						>
							I AM A JUNIOR @CARLETON COLLEGE, EXPECTED TO GRADUATE IN 2021,
							STUDYING COMPUTER SCIENCE AND STUDIO ART! I LOVE PLAYING WITH
							CUTTING EDGE MOBILE & WEB TECHNOLOGIES, MACHINE LEARNING &
							COMPUTER VISION.
						</Paragraph>
					</Box>

					<Paragraph color="#78737a">TECHNOLOGIES I ♥️ RIGHT NOW:</Paragraph>

					<Box />
				</Box> */}

					<this.Projects />
				</Grommet>
			</div>
		);
	}
}

export default Home;
