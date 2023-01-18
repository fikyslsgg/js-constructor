
import image from './assets/image.png'
import {ImageBlock, TitleBlock, TextBlock, ColumnsBlock} from './classes/blocks'

export const model = [
  new TitleBlock('',{
    tag:'h2',
    styles: {
      // background: 'red',
      // color: '#fff',
      // padding: '1.5rem',
      // 'text-align':'center'
    }
  }),

  new TextBlock('',{
    styles: {
      // background: 'yellow',
      // padding: '1rem',
      // 'text-align':'center',
      // 'font-weight':'bold'
    }
  }),

  // new ColumnsBlock(['Приложение на чистом JavaScript, без испоьзования библиотек',
  //                       'Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс',
  //                       'JavaScript - это просто, интересно. Научись создавать любые UI своими руками'],
  //                       {
  //                         styles:{
  //                           background: 'green',
  //                           padding: '2rem',
  //                           color:"#fff",
  //                           'font-weight':'bold'
  //                         }
  //                       }),
              
  new ImageBlock('', {
    styles:{
      // padding:'2rem 0',
      // display: 'flex',
      // 'justify-content':'center'
    },
    imageStyles:{
      // width:"500px",
      // height: "auto"
    },
    // alt:'Это картинка'
  })]
