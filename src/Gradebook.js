import { useState } from 'react';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Searchbar from './Searchbar';

import booker_svg from './booker.svg';
import table_svg from './table.svg';
import search_zelda_z_svg from './search_zelda_z.svg';
import search_clapping_out_svg from './search_clapping_out.svg';
import search_half_notes_svg from './search_half_notes.svg';

function Gradebook() {
  const [current_svg, set_table_svg] = useState(table_svg);

  const setTable = (search) => {
    if (search === 'zelda z') {
      set_table_svg(search_zelda_z_svg);
    } else if (search === 'half notes') {
      set_table_svg(search_half_notes_svg);
    } else if (search === 'clapping out rhythm') {
      set_table_svg(search_clapping_out_svg);
    } else {
      set_table_svg(table_svg);
    }
  }

  return (
    <div>
      <Navbar />
      <div className="columns">
        <div id="sidebar" className="column is-narrow">
          <Sidebar />
        </div>
        <div className="column">
          <div className="section">
            <div className="columns">
              <div className="column">
                <img id="booker" src={booker_svg} />
              </div>
              <div className="column is-4">
                <Searchbar setTable={setTable} />
              </div>
            </div>
            <div id="table-container" className="block">
              <img id="table" src={current_svg} />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Gradebook;