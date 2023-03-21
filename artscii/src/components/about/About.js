import './About.css'
import { Title } from '../components'

function About() {
    return (
        <div className="about-container">
            <div className="about-content">
                <p>
                    Introducing Asciiart, our web app utilizes Dezgo's text-to-image API to generate images, which can then be converted into ASCII art.
                </p>
                <p>
                    Our responsive and user-friendly interface allows for easy input of text that will run through a stable diffusion model to generate a image.  
                    <a id='info-link' href='https://en.wikipedia.org/wiki/Stable_Diffusion'>Click here</a> to learn more about stable diffusion!
                </p>
                <p>
                    Give Asciiart a try and watch as your words come to life in the most unique and visually appealing way possible!
                </p>
            </div>
            <div className='about-footer'>
                <Title asciiArt={art} />
            </div>
        </div>
    )
};

const art = [
"      ,'``.._   ,'``.                             ",
"     :,--._:)\\,:,._,.:                            ",
"     :`--,''   :`...';\\                           ",
"      `,'       `---'  `.                         ",
"      /                 :                         ",
"     /                   \\                        ",
"   ,'                     :\\.___,-.               ",
"  `...,---'``````-..._    |:       \\              ",
"    (                 )   ;:    )   \\  _,-.       ",
"     `.              (   //          `'    \\      ",
"      :               `.//  )      )     , ;      ",
"    ,-|`.            _,'/       )    ) ,' ,'      ",
"   (  :`.`-..____..=:.-':     .     _,' ,'        ",
"    `,'\\ ``--....-)='    `._,  \\  ,') _ '``._     ",
" _.-/ _ `.       (_)      /     )' ; / \\ \\`-.'    ",
"`--(   `-:`.     `' ___..'  _,-'   |/   `.)       ",
"    `-. `.`.``-----``--,  .'                      ",
"      |/`.\\`'        ,',');                       ",
"          `         (/  (/                        "
].join('\n');

export default About;
