import React from "react";
import { Link } from "react-router-dom";

const About = () => {

  return (
    <section className="container helpHght">
      <div className="text-center">
        <div className="">
          <h1 className="large text-primary">About Us</h1>
          <h2 className="">We are a group of positive individuals and look at things on the bright side.</h2><br />
          <p>
            As you read this we hope to open your mind and heart to the good things in life and know if your going through
            things, we hope this site could be a light in your darkness. We are all developers and while most companies have developers to build
            we are proud to say from the President of the company to the accountant, we all have coding experience.
          </p><br />
          <h2>
            Below is our team of
           </h2>
{/* Joshua About */}
        <div className="container centerMe">
          <div class="flex-grid">
            <div class="col">
              <div class="flip-card">
                <h2>
                <Link to="profile/5ecedb3715afeb58d0da5872" target="_blank">Joshua Gray</Link>
                </h2>
                  <div class="flip-card-inner">
                    <div class="flip-card-front">
                      <img class="imgAB" src="https://avatars0.githubusercontent.com/u/55989066?s=460&u=9f8274d80c3f6bd7849ec8dd4ea22ce0ee0bba34&v=4" alt="Joshua-Grey" />
                    </div>
                      <div class="flip-card-back">
                <h3>Architect & Engineer</h3>
                <strong><p className="aboutFlipBack">We love that guy</p></strong>
                <p>I would rather be hated for who I am, than loved for who I am not.</p>
                <a href="https://github.com/Joshiba26" target="_blank"><img src="https://lh3.googleusercontent.com/proxy/04S0PPcCy-JAz3tyzhNAP8aUUv6g4KS7VgI-r07R7FObhG72PgpsLgulPV7g7dD0e3LvpX_Xpq4pXAxkTehjTfwh9bvTKkzA1NR1Cw" alt="Joshua-Grey" /></a>
              </div>
            </div>
          </div>
    </div>
  <div class="col"></div>
  <div class="col"></div>
</div>
{/* Nelson About */}
          </div>
          <div className="container centerMe">
          <div class="flip-card ">
          <h2>
          <Link to="profile/5ecedb6d4ee8653887291044" target="_blank">Nelson Chaves</Link>
          </h2>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="imgAB" src="https://avatars1.githubusercontent.com/u/55574734?s=460&v=4" alt="Nelson-Chaves" />
              </div>
              <div class="flip-card-back">
              <h3>Engineer & Backend</h3>
                <strong><p className="aboutFlipBack">I'm Cool</p></strong>
                <p>Work hard play hard.</p>
                <a href="https://github.com/nelsonchaves" target="_blank"><img src="https://lh3.googleusercontent.com/proxy/04S0PPcCy-JAz3tyzhNAP8aUUv6g4KS7VgI-r07R7FObhG72PgpsLgulPV7g7dD0e3LvpX_Xpq4pXAxkTehjTfwh9bvTKkzA1NR1Cw" alt="Nelson-Chaves" /></a>
              </div>
            </div>
          </div>
          </div>
{/* Justin About */}
<div className="container centerMe">
          <div class="flip-card ">
            <h2>
            <Link to="profile/5ed04968e8546f5e2cbf3dfb" target="_blank">Justin Harris</Link>
          </h2>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="imgAB" src="https://avatars2.githubusercontent.com/u/55962297?s=460&u=cc21587c51614db5c9db6860190b0a2e2a96e246&v=4" alt="Justin" />
              </div>
              <div class="flip-card-back">
                <h3>Fullstack</h3>
                <strong><p className="aboutFlipBack">Be Greatfull</p></strong>
                <p>Be gratefull of what you have and don't worry about what you don't</p>
                <a href="https://github.com/jharristech" target="_blank"><img src="https://lh3.googleusercontent.com/proxy/04S0PPcCy-JAz3tyzhNAP8aUUv6g4KS7VgI-r07R7FObhG72PgpsLgulPV7g7dD0e3LvpX_Xpq4pXAxkTehjTfwh9bvTKkzA1NR1Cw" alt="Justin" /></a>
              
              </div>
            </div>
          </div>
          </div>
{/* Jeb Profile */}
          <div className="container centerMe">
          <div class="flip-card ">
            <h2>
            <Link to="profile/5ecedc2815afeb58d0da5873" target="_blank">Jeb Brant</Link>
          </h2>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="imgAB" src="https://avatars3.githubusercontent.com/u/55933461?s=460&u=0bea4a90c8bc05e19c5048aebfc51e4a6d659cd2&v=4" alt="Jeb" />
              </div>
              <div class="flip-card-back">
                <h1>Architect & Engineer</h1>
                <strong><p className="aboutFlipBack">I have lots of Good News</p></strong>
                <p>I can do this all day.</p>
                <a href="https://github.com/Lassojeb" target="_blank"><img src="https://lh3.googleusercontent.com/proxy/04S0PPcCy-JAz3tyzhNAP8aUUv6g4KS7VgI-r07R7FObhG72PgpsLgulPV7g7dD0e3LvpX_Xpq4pXAxkTehjTfwh9bvTKkzA1NR1Cw" alt="Jeb" /></a>
                
              </div>
            </div>
           </div>
          </div>
{/* Charles Profile */}
          <div className="container centerMe">
          <div class="flip-card ">
            <h2>
            <Link to="profile/5ecedfb615afeb58d0da5874" target="_blank">CharlesB8</Link>
          </h2>
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img class="imgAB" src="https://avatars3.githubusercontent.com/u/54374358?s=460&v=4" alt="Charles" />
              </div>
              <div class="flip-card-back">
                <h3>Engineer & Backend</h3>
                <strong><p className="aboutFlipBack">Great things will happen</p></strong>
                <p>This is the way</p>
                <a href="https://github.com/CharlesB8" target="_blank"><img src="https://lh3.googleusercontent.com/proxy/04S0PPcCy-JAz3tyzhNAP8aUUv6g4KS7VgI-r07R7FObhG72PgpsLgulPV7g7dD0e3LvpX_Xpq4pXAxkTehjTfwh9bvTKkzA1NR1Cw" alt="Charles" /></a>
              </div>
            </div>
           </div>
          </div>
         </div>
       </div>
    </section>
  );
};
export default About;
// jh about
