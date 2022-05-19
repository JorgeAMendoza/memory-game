import whiteLogo from '../../assets/logo-white.svg';

const GameStart = () => {
  return (
    <div>
      <header>
        <img src={whiteLogo} alt="title header" />
      </header>

      <main>
        <section>
          <h3>Select Theme</h3>
          <div>
            <button>Numbers</button>
            <button>Icons</button>
          </div>
        </section>

        <section>
          <h3>Number of Players</h3>
          {[1, 2, 3, 4].map((num) => (
            <button key={num}>{num}</button>
          ))}
        </section>

        <section>
          <div>
            <button>4x4</button>
            <button>6x6</button>
          </div>
        </section>

        <button>Start Game</button>
      </main>
    </div>
  );
};

export default GameStart;
