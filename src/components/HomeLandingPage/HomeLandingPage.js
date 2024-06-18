import './HomeLandingPage.css';

export default function Home() {
  return (
    <main className="App">
      <header className="App-header">
        <h1>We build <em>amazing</em> <br />web <span id='hero-experiences-style'>experiences</span>.</h1>
        <p>
          You're looking at a work in progress. 🤚🏽🛑
        </p>
        <p Style='font-size: 0.8rem'><em>We'll be up soon...</em></p>
      </header>
      <section>
        <h2>What do we do?</h2>
        <p>
          I'm a full-stack software developer that builds everything on the web, from simple websites to complex web apps. I'm passionate about making the web accessible to people and businesses of all kinds. We live in a time where it's more important than ever to have a digital showcase for what makes you different. 
        </p>
      </section>
    </main>
  );
}