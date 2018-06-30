import React, { Component } from 'react';
// import { Header } from 'semantic-ui-react';
import { Container, Divider, Grid } from 'semantic-ui-react';
import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
        <Grid.Column mobile={16} tablet={8} computer={16}>
        <MainHeader></MainHeader>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={16}>
        <Headerr>THE PIE HOLE PIZZERIA</Headerr>
        </Grid.Column>
        <Container>
          <Divider hidden/>
          <Paragraph>
            Amazing pizza, open all day and late night for your pizza needs!<br/>What We Do: Pizza By the Slice!...We also do whole pies, bread stix, and salads
          </Paragraph>
          <Divider hidden/>
          <ImageContainer>
          <Preview picture={'https://images.unsplash.com/photo-1507273026339-31b655f3752d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3befe2072b0c78855d51065cc2465f3d&auto=format&fit=crop&w=668&q=80'}/>
          <Preview picture={'https://i.pinimg.com/564x/07/f8/d6/07f8d6f6fe828745c0dd1f8de31a5cce.jpg'}/>
          <Preview picture={'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=86c8c1fd5e9e5b384696472a095c42ac&auto=format&fit=crop&w=800&q=60'}/>
          </ImageContainer>
          <Divider hidden/>
          <MainParagraph>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.<br/> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
          </MainParagraph>
          <Divider hidden/>
        </Container>
        </Grid>
      </div>
    )
  }
}



const MainHeader = styled.div`
background-image: url(https://images.unsplash.com/photo-1511516412963-801b050c92aa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f23e22ac67f9dd47c1471491abfdda84&auto=format&fit=crop&w=800&q=60); 
background-size: cover;
background-position: center center;
background-repeat: no-repeat; 
height: 550px;
text-align: center;
display: flex;
overflow: scroll;
` 

const Preview = styled.div`
background-image: url(${props => props.picture});
background-size: cover;
background-position: center center;
background-repeat: no-repeat; 
height: 350px;
width: 350px;
text-align: center;
display: flex;
overflow: scroll;
margin: 0 5px;
`
const ImageContainer = styled.div`
display: flex;
flex-direction: row;

`

const Headerr = styled.h1`
text-align: center;
padding-top: 20px;
`

const Paragraph = styled.h1`
text-align: center;
font-family: "Didot 24 A","Didot 24 B"", "Book Antiqua", Palatino, serif;
`

const MainParagraph = styled.p`
text-align: center;
font-family: "Didot 24 A","Didot 24 B"", Palatino, serif;
padding-top: 80px;
font-size: 25px;
`

const Photo = styled.div`
background-image: url(https://images.unsplash.com/photo-1511445905762-94360cdeeae6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=21c59e583d3cc45faaa9ec4e5b279b3a&auto=format&fit=crop&w=1650&q=80);
display: flex;
background-size: cover;
background-position: center center;
background-repeat: no-repeat; 
align-content: center;
justify-content: center;
height: 600px;
width: auto;
overflow: scroll;
`
export default Home;

// url(https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=efe01df2ebde79714be88d560479c9c7&auto=format&fit=crop&w=800&q=60);