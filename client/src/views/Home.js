import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InsertButton } from '../components/InsertButton';
import { Header } from '../components/Header';
import { Task } from '../components/Task';
import { TaskHeader } from '../components/TaskHeader';
import { InsertModal } from '../components/InsertModal';
import { createContext } from "react";
import { DelModal } from '../components/DelModal';
import { UpdateModal } from '../components/UpdateModal';

export const InsertContext = createContext();
export const DelContext = createContext();
export const UpdateContext = createContext();

export const Home = () => {
  const [data, setData] = useState([]);
  const [insert, setInsert] = useState('none');
  const [del, setDel] = useState({element: undefined, display: 'none'});
  const [update, setUpdate] = useState({element: undefined, display: 'none'});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:8080/tasks`);
      const json = await response.data;
      setData(json)
    }
    fetchData();
  }, [data]);

  return (
    <InsertContext.Provider value={[insert, setInsert]}>
      <DelContext.Provider value={[del, setDel]}>
        <UpdateContext.Provider value={[update, setUpdate]}>
          <div className="row w-100 justify-content-center m-0">
            <InsertModal />
            <DelModal />
            <UpdateModal />
            <div className="col-8 text-center mt-3">
              <Header type={1}>Tasks Manager 2.0</Header>
              <div className="row mt-5 justify-content-center">
                <div className="text-start mb-2 d-flex flex-row justify-content-between">
                  <Header type={5}>TODO List</Header>
                  <InsertButton />
                </div>
                <ul>
                  <TaskHeader />
                  {data && data.map((el) => 
                    (<Task key={el._id} person={el.name} task={el.task} isCompleted={el.isCompleted} element={el}/>)
                  )}
                </ul>
              </div>
            </div>

          </div>
        </UpdateContext.Provider>
      </DelContext.Provider>
    </InsertContext.Provider>
  );
};


