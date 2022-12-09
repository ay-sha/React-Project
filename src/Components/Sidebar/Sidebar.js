import React, {useState} from 'react';
import plusIcon from '../../assets/plus.png';
import './Sidebar.css';

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", " #EEB5BD", "#b693fd", "#e4ee91" ,"#7CB7E5" ,"#93F393","#f4978e"];

  const [listOpen, setListOpen] = useState(false);

return (
    <div className="sidebar">
      <img src={plusIcon} alt="Add" onClick={() => setListOpen(!listOpen)} />
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => props.addNote(item)}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;