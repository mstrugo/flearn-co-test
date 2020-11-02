import './Styles/app.css';
import { Header, Form, Message } from './Components';

function App() {
  return (
    <main role="main">
      <Header />

      <article className="content--centered content--fixed-max-width">
        <h1 className="text--white">
          Learn with the best!
          <br />
          Learn with Flearn Co!
        </h1>
        <section className="flex bg-white content--padded-sm">
          <Form />
          <Message />
        </section>
      </article>
    </main>
  );
}

export default App;
