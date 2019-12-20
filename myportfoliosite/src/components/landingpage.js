import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Black&clotheType=Hoodie&clotheColor=Heather&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
                    alt="avatar"
                    className="avatar-img"/>

                    <div className="banner-text">
                        <h1>SWAT Team Developer</h1>
                        <hr/>

                    <p>Bootstrap | JavaScript | React | NodeJS | Python</p>
                    
                    <div className="social-links">

                        {/* LinkedIn */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                           <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>

                        {/* Github */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                           <i className="fa fa-github-square"  aria-hidden="true" />
                        </a>
    
                    </div>


                    </div>
                    </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Landing;