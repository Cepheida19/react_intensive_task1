
import './App.css';
import React, { Component } from 'react';
import Inputs from './components/Inputs';
import Textareas from './components/Textareas';
import Buttons from './components/Buttons';

class App extends React.Component {
  render(){
    return (
      <div className='container'>
        <div className='wrap'>
          <div className='no'>text</div>
            <h2>Создание анкеты</h2>
            <form className='form'>

              <Inputs type="text" name="name" placeholder="ваше имя" text="Имя:"/>

              <Inputs type="text" name="lastname" placeholder="ваша фамилия" text="Фамилия:"/>

              <Inputs type="date" name="date" text="Дата рождения:"/>
            
              <Inputs type="tel" name="phone" placeholder="+79999999999" text="Телефон:" maxlength="12" minlength="11"/>

              <Inputs type="url" name="site" placeholder="https://example.com" text="Сайт:"/>

              <Textareas type="text" name="info" placeholder="расскажите о себе" text="О себе:" 
                rows="7" cols="39" maxlength="273"/>

              <Textareas type="text" name="stack" placeholder="ваш стек" text="Стек технологий:" 
                rows="7" cols="39" maxlength="273"/>

              <Textareas type="text" name="project" placeholder="ваш последний проект" text="Описание последнего проекта:" 
                rows="7" cols="39" maxlength="273"/>

              <Buttons type="submit" text="Сохранить"/>

              <Buttons type="reset" text="Отмена"/>

          </form>
        </div>
      </div>
    )
  }
}

export default App;
