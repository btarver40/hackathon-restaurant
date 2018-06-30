import React from 'react'
import { Container, Divider, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

const About = () => (
 <div> 
    <Grid>
      <Grid.Column mobile={16} tablet={8} computer={16}>
        <MainHeader></MainHeader>
      <AboutTitle>ABOUT THE PIE HOLE</AboutTitle>
      </Grid.Column>
      <Container>
      <Divider hidden/>
      <Headerr>OUR STORY</Headerr>
    <Paragraph>Slices from $2.25 to $2.85 of the best pizza this side of the Mississippi. Oh yeah, did we mention we're open REALLY late?!
    Also: whole pies, carry out, and delivery with UberEats
    We carry an excellent selection of bottled sodas and beers:
    Stewarts, Jackson Hole, Jones.
    Uinta, Four Plus, Wasatch, Squatters, and domestic bottles, and $1 PBR cans!
    </Paragraph>
    <Divider hidden/>
    <LoremParagraph>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    </LoremParagraph>
    </Container>
    </Grid>
</div>
)


const MainHeader = styled.div`
background-image: url(https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e813bc9e93c2b7ede92476a3eddf3606&auto=format&fit=crop&w=800&q=60); 
background-size: cover;
background-position: center;
background-repeat: no-repeat; 
height: 550px;
text-align: center;
display: flex;
overflow: scroll;
` 
const AboutTitle = styled.h1`
position: absolute;
left: 26%;
top: 30%;
text-align: center;
padding-top: 20px;
font-size: 60px;
color: white;
`

const Headerr = styled.h1`
text-align: center;
padding-top: 20px;
font-size: 45px;
`

const Paragraph = styled.h2`
text-align: center;
font-family: "Libre Baskerville", Palatino, serif;
`
const LoremParagraph = styled.h3`
text-align: center;
font-family: "Libre Baskerville", Palatino, serif;
`

export default About