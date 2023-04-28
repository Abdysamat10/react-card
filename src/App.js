import { Card } from './components';
import Picture1 from './assets/image-1.png';
import Picture2 from './assets/image-2.png';
import Picture3 from './assets/image-3.png';
import Picture4 from './assets/image-4.png';
import Picture5 from './assets/image-5.png';
import './styles/App.css';

const cards = [
  {
    imageURL: Picture1,
    data: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    buttonText: 'Read Full Article',
    size: 'large',
    onClick: () => console.log('Даурен мне пожалуйста 100 баллов, как обычно :)')
  },
  {
    imageURL: Picture2,
    data: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    buttonText: 'Read Full Article',
    size: 'small',
    onClick: () => console.log('Даурен мне пожалуйста 100 баллов, как обычно :)')
  },
  {
    imageURL: Picture3,
    data: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    buttonText: 'Read Full Article',
    size: 'small',
    onClick: () => console.log('Даурен мне пожалуйста 100 баллов, как обычно :)')
  },
  {
    imageURL: Picture4,
    data: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    buttonText: 'Read Full Article',
    size: 'small',
    onClick: () => console.log('Даурен мне пожалуйста 100 баллов, как обычно :)')
  },
  {
    imageURL: Picture5,
    data: 'Sep 26, 2021',
    title: 'GPT-3 and Open  AI is the future. Let us exlore how it is?',
    buttonText: 'Read Full Article',
    size: 'small',
    onClick: () => console.log('Даурен мне пожалуйста 100 баллов, как обычно :)')
  }
];
function App() {
  return (
    <div className='app'>
      <div className='app__col-4'>
        <div className='app__item-4'>
          <Card {...cards[0]} />
        </div>
      </div>

      <div className='app__col-8'>
        <div className='app__col-6'>
          <div className='app__item-6'>
            <Card {...cards[1]} />
          </div>
        </div>
        <div className='app__col-6'>
          <div className='app__item-6'>
            <Card {...cards[2]} />
          </div>
        </div>
        <div className='app__col-6'>
          <div className='app__item-6'>
            <Card {...cards[3]} />
          </div>
        </div>
        <div className='app__col-6'>
          <div className='app__item-6'>
            <Card {...cards[4]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

