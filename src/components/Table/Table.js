import React, { useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";

const tokken = "testtoken";
const apiUrl = "https://api.skilla.ru/mango/getList";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${tokken}`,
  },
});

const Table = () => {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [requestError, setRequestError] = useState();
  const [filter, setFilter] = useState(calls);
  const fetchData = async () => {
    try {
      setLoading(true);
      const { results, total_rows } = (await authAxios.post()).data;
      setCalls(results);
      setFilter(results);
    } catch (err) {
      setRequestError(err.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const filterCalls = (type) => {
    const updateList = calls.filter((x) => x.in_out == type);
    setFilter(updateList);
  };

  return (
    <form className="table_wrapper">
      {loading && <span className="loading">Loading...</span>}
      <div className="header">
        <div className="date">Среда, 13 окт</div>
        <div className="statistics_block">
          <div className="new_calls stat">
            <div className="stats_top">
              <h5>Новые звонки</h5>
              <h5 className="calls_stats">20 из 30 шт</h5>
            </div>
            <div className="calls_stats_line"></div>
            <div className="calls_stats_line_color"></div>
          </div>

          <div className="talks_count stat">
            <div className="stats_top">
              <h5>Качество разговоров</h5>
              <h5 className="talks_stats">40%</h5>
            </div>
            <div className="talks_stats_line"></div>
            <div className="talks_stats_line_color"></div>
          </div>

          <div className="orders stat stat">
            <div className="stats_top">
              <h5>Конверсия в заказ</h5>
              <h5 className="order_stats">67%</h5>
            </div>
            <div className="order_stats_line"></div>
            <div className="order_stats_line_color"></div>
          </div>
        </div>
        <div className="user_block">
          <div className="search_icon" />
          <select className="user_select">
            <option value="value1">ИП Сидорова Александра Михайловна</option>
            <option value="value2">ИП Сидорова Александра Михайловна</option>
            <option value="value3">ИП Сидорова Александра Михайловна</option>
          </select>
          <div className="user_icon" />
          <select className="profile_select"></select>
        </div>
      </div>
      <div className="underHeader_menu_wrapper">
        <div className="balance_wrapper">
          <h5 className="balance">Баланс:</h5>
          <h5 className="balance_count">272 ₽</h5>
          <div className="balance_add_btn"></div>
        </div>
        <div className="calendar">
          <div className="calendar_body">
            <div className="arrow_left" />
            <div className="calendar_icon" />
            <h5 className="calendar_days">3 дня</h5>
            <div className="arrow_right" />
          </div>
        </div>
      </div>
      <div className="table">
        <div className="table_top_bar">
          <div className="search_bar">
            <div className="search_icon" />
            <input
              className="search_input"
              type="tel"
              placeholder="Поиск по звонкам"
            />
          </div>
          <div className="filter_bar">
            <div className="clear_filters">
              <div className="clear">Сбросить фильтры</div>
              <div className="clear_icon"></div>
            </div>
            <select
              className="filter_select"
              onChange={(e) => {
                filterCalls(e.target.value);
              }}
            >
              <option value=" ">Все типы</option>
              <option value=" 1 ">Входящие</option>
              <option value=" 0 ">Исходящие</option>
            </select>
            <select className="filter_select">
              <option value="all-workers">Все сотрудники</option>
            </select>
            <select className="filter_select">
              <option value="clients">Все клиенты</option>
              <option value="new_clients">Новые клиенты</option>
              <option value="any">Все исполнители</option>
              <option value="app">Через приложение</option>
            </select>
            <select className="filter_select">
              <option value="from_site">С сайта</option>
              <option value="yandex">yandex номер</option>
              <option value="google">google номер</option>
              <option value="empty">Без источника</option>
            </select>
            <select className="filter_select">
              <option value="outcoming">Все оценки</option>
              <option value="outcoming">Распознать</option>
            </select>
            <select className="filter_select">
              <option value="errors">Все ошибки</option>
              <option value="">Приветствие</option>
              <option value="">Имя</option>
              <option value="">Цена</option>
              <option value="">Скидка</option>
              <option value="">Предзаказ</option>
              <option value="">Благодарность</option>
              <option value="">Стоп слова</option>
            </select>
          </div>
        </div>
      </div>
      <div className="call_list">
        <div className="call_list_header">
          <div className="call_list_header_top">
            <div className="top_type">Тип</div>
            <div className="top_time">Время</div>
            <div className="top_person">Сотрудник</div>
            <div className="top_number">Звонок</div>
            <div className="top_source">Источник</div>
            <div className="top_rate">Оценка</div>
            <div className="top_duration">Длительность</div>
          </div>
        </div>
        {filter.map((call) => {
          let arr = call.date.split(" ");
          let time = arr[1].split(":");
          let time1 = time[0] + ":" + time[1];
          return (
            <div className="list">
              <div className="row_element" key={call.id}>
                <div className={`top_type${call.in_out}`}>{}</div>
                <div className="top_time_list">{time1}</div>
                <div className="top_person_list">{}</div>
                <div className="top_number_list">
                  +{call.partner_data.phone}
                </div>
                <div className="top_source">{call.source}</div>
                <div className="top_rate_list">{call.status}</div>
                <div className="top_duration_list">{`${call.time} мин`}</div>
              </div>
            </div>
          );
        })}
      </div>
    </form>
  );
};

export default Table;
