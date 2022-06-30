import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar_wrapper">
      <div className="logo" />
      <div className="sidebar_items">
        <div className="sidebar_item">
          <div className="item">
            <div className="icon1" />
            <h4 className="item_name">Итоги</h4>
          </div>
          <div className="pick"></div>
        </div>
        <div className="sidebar_item">
          <div className="item">
            <div className="icon2" />
            <h4 className="item_name">Заказы</h4>
          </div>
          <div className="pick"></div>
        </div>
        <div className="sidebar_item">
          <div className="item">
            <div className="icon3" />
            <h4 className="item_name">Сообщения</h4>
          </div>
          <div className="pick"></div>
        </div>
        <div className="sidebar_item">
          <div className="item">
            <div className="icon4" />
            <h4 className="item_name">Звонки</h4>
          </div>
          <div className="pick"></div>
        </div>
        <div className="sidebar_item">
          <div className="item">
            <div className="icon5" />
            <h4 className="item_name">Контрагенты</h4>
          </div>
          <div className="pick"></div>
        </div>
        <div className="sidebar_item">
          <div className="item">
            <div className="icon6" />
            <h4 className="item_name">Документы</h4>
          </div>
          <div className="pick"></div>
        </div>
        <div className="sidebar_item">
          <div className="item">
            <div className="icon7" />
            <h4 className="item_name">Исполнители</h4>
          </div>
          <div className="pick"></div>
        </div>
        <div className="sidebar_item">
          <div className="item">
            <div className="icon8" />
            <h4 className="item_name">Отчёты</h4>
          </div>
          <div className="pick"></div>
        </div>
        <div className="sidebar_item">
          <div className="item">
            <div className="icon9" />
            <h4 className="item_name">База знаний</h4>
          </div>
          <div className="pick"></div>
        </div>
        <div className="sidebar_item">
          <div className="item">
            <div className="icon10" />
            <h4 className="item_name">Настройки</h4>
          </div>
          <div className="pick"></div>
        </div>
      </div>
      <div className="buttons">
          <div className="btn">
              <h4 className="add_btn">Добавить заказ</h4>
              <div className="icon11"/>
          </div>
          <div className="btn">
              <h4 className="pay_btn">Оплата</h4>
              <div className="icon12"/>
          </div>

      </div>
    </div>
  );
};

export default Sidebar;
