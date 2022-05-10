import { useState } from 'react';

function Searchbar({ setTable }) {
  const [text, setText] = useState('');

  const handleTyping = (e) => {
    e.preventDefault();
    setText(e.target.value);
    const search = e.target.value.toLowerCase().trim();
    setTable(search);
  };

  return (
    <div id="searchbar">
      <p className="control has-icons-left">
        <input className="input is-rounded is-fullwidth" type="text" placeholder="Search by student" value={text} onChange={handleTyping} />
        <span className="icon is-small is-left">
          &#128269;
        </span>
      </p>
    </div>
  );
}

export default Searchbar;