import React from 'react';
import Back from '../../ui/Back.jsx';

const Article = () => {

   return (
      <div className='container'>
         <Back />
         <article className='article'>
            <h3 className='article-header'>Почему не рассматриваются заявки с жалобами на нарушение Правил игры?</h3>
            <p className='article-content'>
               <p className='article-text'>После введения функционала «Пожаловаться» не рассматриваются заявки, созданные в Центр поддержки пользователей о нарушении Правил игры по следующим пунктам:</p>
               <h4 className='article-numbered-header'>«Оскорбления и провокации»</h4>
               В данный пункт входит:
               <ul className='article-list'>
                  <li className='article-item'>использование ненормативной лексики и оскорбление собеседников, применение унизительных кличек и прозвищ по расовому, национальному, религиозному либо половому признаку, а также провоцирование собеседника к их использованию;</li>
                  <li className='article-item'>клевета, размещение заведомо ложной информации об Игре, Администрации, Модераторах или Пользователях;</li>
                  <li className='article-item'>угрозы реальной расправы в отношенииили представителей Администрации Проекта. Все виды соглашения.</li>
               </ul>
               <h4 className='article-numbered-header'>«Неинформативные сообщения»</h4>
               В данный пункт входит:
               <ul className='article-list'>
                  <li className='article-item'>размещение информации (сообщения, фразы, символов и пр.), направленной на отвлечение Пользователей от темы беседы (флуд);</li>
                  <li className='article-item'>все виды рекламных сообщений, в частности ссылки на интернет-ресурсы.</li>
               </ul>
               <p className='article-text'>Также не рассматриваются следующие заявки, созданные в Центр поддержки пользователей о нарушении Правил игры:</p>
               <h4 className='article-numbered-header'>«Раскрытие позиций союзников»</h4>
               <h4 className='article-numbered-header'>«Выталкивание союзника»</h4>
               <h4 className='article-numbered-header'>«Неспортивное поведение»</h4>
               <h4 className='article-numbered-header'>«Повреждение союзников»</h4>
            </p>
         </article>
      </div>
   );
};

export default Article;
