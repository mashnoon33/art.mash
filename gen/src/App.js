import React, { Component } from 'react';
import {
  Box,
  Grommet,
  Text,
  ResponsiveContext,
} from 'grommet';
import {
  withRouter
} from 'react-router-dom'

const photo = [
  {
    name: "To Remember",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque feugiat lacus in elementum dignissim. Mauris vitae enim vitae lorem euismod suscipit. Suspendisse nec nisl odio. Fusce dapibus metus quis tincidunt feugiat. Aliquam turpis risus, sollicitudin nec dolor vitae, laoreet molestie tortor. Suspendisse hendrerit in diam ut maximus. In fermentum, lorem eu dictum fringilla, mauris nunc aliquam ante, at eleifend dolor diam ut diam. Sed elementum, lectus in fermentum hendrerit, velit enim elementum tellus, quis sollicitudin ante metus quis sem. Proin lobortis lacus ultricies sodales bibendum. ",
    code: "toremember",
    background: '6_mash.studio_toremember.jpg'
  },
  {
    name: "Specter",
    detail:
      "Nunc lobortis tortor eu arcu pharetra, id laoreet ligula efficitur. Etiam a justo sem. Quisque ac facilisis erat, nec feugiat sapien. Nunc aliquam ac justo consectetur interdum. Sed consectetur porttitor sem.",
    code: "specter",
    background: 'ibtesumMashnoon007_mash.studio_specter.png'
  },
  {
    name: "Quarentine",
    detail: "Maecenas feugiat ante eget magna lacinia, at condimentum neque ultrices. Fusce posuere fermentum pretium. Quisque suscipit ullamcorper augue. Aenean venenatis, leo malesuada iaculis pharetra, ipsum metus tincidunt nibh, vitae lobortis lorem purus eu mauris. Ut at ultricies nisl. Vestibulum finibus euismod est in aliquam. Sed cursus ultrices odio. Ut posuere elementum velit, a venenatis purus.",
    code: "q",
    background: 'IMG_9638_mash.studio_q.jpg'
  },
];



const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};



class App extends Component {
  state = {
    showSidebar: false,
  }
  render() {

    return (
      <Grommet theme={theme} full >
        <ResponsiveContext.Consumer>
          {size => (
            <Box fill background='dark-1' overflow={{ horizontal: 'hidden' }}>
            <Box fill  flex={false} background='#F0EAE8' direction='column-reverse' align='center' justify='center' animation='fadeIn'>
            <Box fill 
            justify='center' align='center'>

              <Text  size='19vh' color='dark-2' weight='bold' >

MASH          </Text>


              <Text  size='13vh' color='dark-2' >

                IBTESUM
            </Text>
            </Box>
          </Box>



              <Box fill flex={false}>
                {
                  photo.map(item => {
                    const url = 'url(/images/' + item.background + ' )';
                    return (
                      <Box style={{
                        WebkitBackgroundSize: 'fill',
                      
                      
                      }} fill justify='end' animation={{
                        type: 'slideUp',
                      }}  onClick={event =>  window.location.href='/' + item.code }>
                        
                         
                        <Box fill flex={false} >
                          
                        <Text size='15vw'  weight='bold' style={{
                          backgroundImage: url,
                          backgroundSize: '100% 100%',
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          color: 'transparent',
                        WebkitBackgroundSize:'cover'
                          
                        
                        
                        
                        
                        }}> {item.name}</Text>
                        
                        
                        </Box>
                             

                      </Box>


                    )
                  })
                }
                
                


                <Box fill direction='row-responsive'  >
                  {
                    photo.map(item => {
                      const url = 'url(/images/' + item.background + ' )';
                      return (
                        <Box fill justify='end' background={url} animation={{
                          type: 'slideUp',
                        }}  onClick={event =>  window.location.href='/' + item.code }
                        >
                          <Box height='30%' fill='horizontal' style={{
                            backdropFilter: 'blur(20px)'
                          }}>
                            <a style={{ color: "#fff", textDecoration: 'none' }} href={'https://art.mash.studio/' + item.code}>
                              <Box flex={false} fill='vertical' height='30%' margin={
                                {
                                  bottom: 'small',
                                  horizontal: 'small'

                                }
                              }>
                                <Text size='3vw' weight='bold'> {item.name}</Text>
                                <Box width='50%'>
                                </Box>
                              </Box>
                            </a>
                          </Box>
                        </Box>


                      )
                    })
                  }

                </Box>
              </Box>


            </Box>
          )}
        </ResponsiveContext.Consumer>
      </Grommet>
    );
  }
}

export default withRouter(App);
