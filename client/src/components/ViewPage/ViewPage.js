import React, { useState, useEffect} from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import styles from './ViewPage.scss';
import classNames from 'classnames/bind';
import ViewList from './../ViewList/ViewList';

import _1반1조 from './../../image/environment/1-1-1조.png';
import _1반2조 from './../../image/environment/1-1-2조.png';
import _1반3조 from './../../image/environment/1-1-3조.png';
import _1반4조 from './../../image/environment/1-1-4조.png';
import _1반5조 from './../../image/environment/1-1-5조.png';
import _2반1조 from './../../image/environment/1-2-1조.png';
import _2반2조 from './../../image/environment/1-2-2조.png';
import _2반3조 from './../../image/environment/1-2-3조.png';
import _2반4조 from './../../image/environment/1-2-4조.png';
import _2반5조 from './../../image/environment/1-2-5조.png';
import _3반1조 from './../../image/environment/1-3-1조.png';
import _3반2조 from './../../image/environment/1-3-2조.png';
import _3반3조 from './../../image/environment/1-3-3조.png';
import _3반4조 from './../../image/environment/1-3-4조.png';
import _3반5조 from './../../image/environment/1-3-5조.png';
import _4반1조 from './../../image/environment/1-4-1조.png';
import _4반2조 from './../../image/environment/1-4-2조.png';
import _4반3조 from './../../image/environment/1-4-3조.png';
import _4반4조 from './../../image/environment/1-4-4조.png';
import _4반5조 from './../../image/environment/1-4-5조.png';

import __1반1조 from './../../image/technology/1-1-1조.png';
import __1반2조 from './../../image/technology/1-1-2조.png';
import __1반3조 from './../../image/technology/1-1-3조.png';
import __1반4조 from './../../image/technology/1-1-4조.png';
import __1반5조 from './../../image/technology/1-1-5조.png';
import __2반1조 from './../../image/technology/1-2-1조.png';
import __2반2조 from './../../image/technology/1-2-2조.png';
import __2반3조 from './../../image/technology/1-2-3조.png';
import __2반4조 from './../../image/technology/1-2-4조.png';
import __2반5조 from './../../image/technology/1-2-5조.png';
import __3반1조 from './../../image/technology/1-3-1조.png';
import __3반2조 from './../../image/technology/1-3-2조.png';
import __3반3조 from './../../image/technology/1-3-3조.png';
import __3반4조 from './../../image/technology/1-3-4조.png';
import __3반5조 from './../../image/technology/1-3-5조.png';
import __4반1조 from './../../image/technology/1-4-1조.png';
import __4반2조 from './../../image/technology/1-4-2조.png';
import __4반3조 from './../../image/technology/1-4-3조.png';
import __4반4조 from './../../image/technology/1-4-4조.png';
import __4반5조 from './../../image/technology/1-4-5조.png';

const cx = classNames.bind(styles);

const axios = require('axios');

const ViewPage = () => {
  let history = useHistory();
  const location = useLocation();

  const [ final, setFinal ] = useState(true);
  const [ envlists, setEnvLists ] = useState([
    {
      id:1,
      title: '1.5! 지구가 녹아내린다',
      image: _1반1조,
      text: '지구 평균 기온(1.5도)에 의한 해수면 상승의 문제'
    },
    {
      id:2,
      title: '나비효과',
      image: _1반2조,
      text: '인간의 욕심으로 올라간 1.5도 기온 상승으로 인하여 생긴일을 비유적으로 표현하여 경각심을 불러 일으키기 위해'
    },
    {
      id:3,
      title: 'DSM 24',
      image: _1반3조,
      text:
      `교사 작성
      <그림으로 표현> 쓰레기 등으로 더워지는 지구 표현
      <인포그래픽에 담긴 내용> 온실효과 줄이기 위한 방법 제시`
    },
    {
      id:4,
      title: '당신이 먹은 소고기로 1.5도가 무너집니다',
      image: _1반4조,
      text: '과도한 목축과  그로인한 메탄가스 발생으로 이산화탄소 증가 -> 지구 온난화 '
    },
    {
      id:5,
      title: '해수면 상승에서 살아남기',
      image: _1반5조,
      text: '해수면 상승에 대해 경각심을 주기 위해서'
    },
    {
      id:6,
      title: '제목없음1',
      image: _2반1조,
      text: '설명없음'
    },
    {
      id:7,
      title: '날씨, 뭔가 이상하지 않으세요?',
      image: _2반2조,
      text: '지구온난화 현상과 기상이변의 관계'
    },
    {
      id:8,
      title: '플라스틱 클리너',
      image: _2반3조,
      text: '우리가 자주 사용하며 무심코 버리는 일회용품 중 하나인 플라스틱. 하지만 이 플라스틱은 몇 백 년 동안 이나 썩지않는다고 한다. 또한, 해양 생물들이 플라스틱에 의해 많은 죽음을 당한다는 기사를 접하고  플라스틱이 어떻게 처리되는지, 생물에게 어떤 영향을 주는지, 그리고 우리의 환경에 어떤 영향을 줄 지 에 대하여 알아보기 위해 제작하게 되었습니다. '
    },
    {
      id:9,
      title: '인류의 "진화" 그 밑에는 무엇이 있는가',
      image: _2반4조,
      text: '설명없음'
    },
    {
      id:10,
      title: '제목없음2',
      image: _2반5조,
      text: '설명없음'
    },
    {
      id:11,
      title: '물이 차오르는 지구?!',
      image: _3반1조,
      text: '교사작성 (그림으로 표현) 지구온난화로 인해 해수면이 상승되는 것을 표현'
    },
    {
      id:12,
      title: '방구 뿡뿡 지구 활활',
      image: _3반2조,
      text: '설명없음'
    },
    {
      id:13,
      title: '지구는 훈연중',
      image: _3반3조,
      text: '설명없음'
    },
    {
      id:14,
      title: '기후변화',
      image: _3반4조,
      text: '설명없음'
    },
    {
      id:15,
      title: '매독 환주',
      image: _3반5조,
      text: '우리의 편리함에만 관심을 가져 정작 기온상승에 대한 관심을 가지지 못했고 그로 인해 생태계가 파괴되는 것을 막지 못했다는 것을 보여주기 위해서이다.'
    },
    {
      id:16,
      title: '올라가는 기온 살기 힘든 지구',
      image: _4반1조,
      text: '지구의 기온상승 때문에 생기는 문제점들이나 위험성을 확실하게 알려서 기온상승에 대한 경각심을 주기위해 제작'
    },
    {
      id:17,
      title: '지구의 온도가 올라가면?',
      image: _4반2조,
      text: '지구의 평균 온도 상승폭을 1.5℃이하로 하기 위함을 강조'
    },
    {
      id:18,
      title: 'Warning 1.5°c',
      image: _4반3조,
      text: '1.5도 이상으로 지구의 온도가 올라가지 않도록 세계가 노력하고 있지만 1.5도 이상으로 올라가게 되면 어떤 일이 생기는지 피해 상황을 보여줌으로써 심각성을 알리기 위함'
    },
    {
      id:19,
      title: '지구를 살릴 수 있는 온도',
      image: _4반4조,
      text: '지구가 1도가 오를때마다 일어나는 일을 서술함으로 지구 온난화의 심각성을 이야기 하였다.'
    },
    {
      id:20,
      title: '1.5도로 인해 녹아가는 지구',
      image: _4반5조,
      text: '기후변화가 일어나는 현재에도, 많은 사람들은 환경 파괴에 관한 일에는 관심이 없거나 알지를 못한다. 때문에 사람들의 이런 태도를 변화시킬 수 없을까 하는 생각으로 이해하기 편한 자료를 만들었다.'
    },

  ]);
  const [ teclists, setTecLists ] = useState([
    {
      id:1,
      title: '탈전기',
      image: __1반1조,
      text: '전기가 없고 습한 환경에서 젖은 옷 때문에 추위에 떠는 사람들을 위해 고안 하였다.'
    },
    {
      id:2,
      title: 'Refresh Energing',
      image: __1반2조,
      text: '전기부족에 시달리고 경제적 형편이 안 좋은 네팔 지역의 주민들에게 비상 전력을 제공하고자 만든 제품이다.'
    },
    {
      id:3,
      title: '빗물 정수기',
      image: __1반3조,
      text:
      '네팔 주민들에게 가장 큰 문제가 무엇일까 고민해보았는데 도출된 결과는 ‘물＇이였다 . 깨끗한 물을 쉽게 먹을 수 있는 방법에 대하여 생각해 보았다. 네팔의 우기에 비가 많이 오기 때문에 이를 잘 활용하여 빗물을 식수로 바꾸는 방법을 고안해내었다.'
    },
    {
      id:4,
      title: 'E-드럼',
      image: __1반4조,
      text: '11시간 정전으로 인하여 할 수 있는 일에 제한이 많다 . 이를 해결하기 위해 물을 뜨러 갈 때 필요한 큐드럼이 회전하여 가는 것 만으로 전기를 생산하고 탈부착하여 긴급한 응급상황이나 필요한 곳에 사용될 수 있도록 했다.'
    },
    {
      id:5,
      title: 'DE-SAVER',
      image: __1반5조,
      text: '부족한 전기 문제를 해결하기 위해 전력을 생산하는 기술을 만들었다. 네팔을 전기를 공급할 수 있는 방법이 많이 없기 때문에 저전력을 이용하여 불을 밝힐 수 있어야 한다'
    },
    {
      id:6,
      title: '매직필터(Magic Filter)',
      image: __2반1조,
      text: '네팔에 거주하는 Shiva와 같이 깨끗한 물을 얻지못하는 환경 속에 살고 있는 일부 계층을 위해 제작한다.'
    },
    {
      id:7,
      title: '네 팔 아니죠! 네 전신이 따뜻한 에어캡 텐트!!!',
      image: __2반2조,
      text: '시나리오 속 네팔에 난방시설이 확립되어 있지 않아 추운 밤을 지내며, 그것때문에 힘들어한다.이 문제를 해결하기 위해 중요한 조건을 난방을 할 때 전기를 쓰지 않고 간단하고 빠르게 쓸 수 있는 방법으로 A자형 텐트와 단열을 하기 위해 빛을 반사하는재질과 에어캡을 이용해 이중창의 원리로 간단한 텐트를 만들어 네팔사람들이 더빠르고 쉽게 쓸 수 있어 네팔의 환경에 적절하다고 생각한다.'
    },
    {
      id:8,
      title: '전기 생산 모빌',
      image: __2반3조,
      text: '전기 생산이 어려운 곳에 보다 쉽고 저렴한 가격으로 전기를 생산할 수 있게 하기 위함'
    },
    {
      id:9,
      title: '워터 벨트',
      image: __2반4조,
      text: '무거운 물통을 쉽게 나르기 위해서 제작'
    },
    {
      id:10,
      title: 'T - Pen',
      image: __2반5조,
      text: '(교사 작성) 전력 생산이 부족해 밤에 공부하기 어렵기에 전자기 유도 현상과 태양광 발전 원리를 이용해 전기를 생산할 수 있는 펜 제작'
    },
    {
      id:11,
      title: '워터 드롭',
      image: __3반1조,
      text: '(교사 작성) 물의 부족함, 정수되지 않은 물, 방치된 펌프 문제를 해결하기 위해 제작'
    },
    {
      id:12,
      title: 'Filter of Natural',
      image: __3반2조,
      text: '네팔 고산지대 사람들이 오염이 된 물을 마셔 질병에 걸리는 것을 예방함과 동시에 멀리 있는 우물에서 많은 양의 물을 쉽게 운반하도록 하기 위해 제작함'
    },
    {
      id:13,
      title: 'Double Check (더블 체크)',
      image: __3반3조,
      text: '네팔의 물 정수 시스쳄의 부족으로 인한 질병 등의 문제점을 해결하기 위해 만든 빗물 정수 시스템'
    },
    {
      id:14,
      title: '불타오르는 건조기',
      image: __3반4조,
      text: '여름에 아이들이 저체온증에 걸리는 이유가 땀이나 비에 젖은 옷때문에 몸에 온기를 빼앗기기때문이라는것을 듣고 옷이 젖더라도 빠르게 말려서 따뜻하게 해줄수 있게하기위해서 만들었다.'
    },
    {
      id:15,
      title: '마운틴 듀 (Mountain Dew)',
      image: __3반5조,
      text: '물이 부족한 네팔 사람들에게 이슬을 모아 물을 제공해 줌으로써 물 걱정을 하지 않아도 되는 생활을 만들고 싶었기 때문이다.'
    },
    {
      id:16,
      title: '워터 콜렉터',
      image: __4반1조,
      text: '햇빛을 막아주면서 물을 모을 수 있는 일석 이조의 효과를 볼 수 있다'
    },
    {
      id:17,
      title: '걸러걸러 다걸러',
      image: __4반2조,
      text: '정수 시설 부족으로 인해 오염된 물을 마실 수 밖에 없는 문제를 해결하기 위해 디자인'
    },
    {
      id:18,
      title: '화력발전 보일러',
      image: __4반3조,
      text: '네팔 사람들 대부분이 전기를 사용하지 못하는 상황과 일교차로 인해 얼어 죽는걸 방지하기 위해 개발하였다.'
    },
    {
      id:19,
      title: '데드리브스 배드',
      image: __4반4조,
      text: '네팔은 밤과 낮의 온도 격차가 크다. 때문에 사람들을 외부 온도에 대하여 보호하기 위해 생각하게 되었다.'
    },
    {
      id:20,
      title: '썬앤삼투압',
      image: __4반5조,
      text: '물과 전기를 구하기 힘든 문제상황에서 보다 더 손 쉽고 현지에서 구할 수 있는 재료로 만들 수 있는 적정기술이다. 삼투압이라는 과학기술을 이용하였다.'
    },
  ]);
  const [ viewId, setViewId ] = useState('');
  const [ viewPin, setViewPin ] = useState('');
  const [ num,setNum ] = useState(0);

  useEffect(() => {
    if (typeof (location.state) !== 'undefined' && location.state != null) {
      const { id, pin } = location.state;
      setViewId(id);
      setViewPin(pin);
    } else {
      // error handling, if message undefined
      setViewId("default");
      setViewPin("default");
    }
  }, []);

  const checkAdd = () => {
    setNum(num => num + 1);
    console.log(num);
  }

  const handleFinalSubmit = (e) => {
    e.preventDefault();

    if(num == 20) {
      axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/send`, {
        id: viewId,
        pin: viewPin
      })
      .then(function (response) {
        console.log(response.body.check);
      })
      .catch(function (error) {
        console.log(error);
      });

      setNum(0);

      history.push({
        pathname: '/',
        state: {
          final: final,
          pin: viewPin,
          id: viewId
        }
      });
    } else {
      alert("모든 설문을 마쳐주세요");
    }
  }

  const errorPage = () => {
    alert("잘못된 접근 방식입니다. 메인페이지로 돌아가시겠습니까?");
    history.push("/");
  }

  return (
    <div>
    { (viewPin == "lgibX" || viewPin == "tZJRc") ?
      <div className={cx('view-back')}>
        <div className={cx('view-header')}>
          <div className={cx('fixed-title')}>{viewPin == "tZJRc" ? "1학년 인포그래픽" : "적정 기술 디자인"}</div>
          <button onClick={handleFinalSubmit}>제출</button>
        </div>
        <div className={cx('view-main')}>
          <div className={cx('view-main-title')}>
            <div className={cx('view-bar')}></div>
            <input className={cx('view-main-title-name')} value={viewPin == "tZJRc" ? "1학년 인포그래픽" : "적정 기술 디자인"} readOnly/>
          </div>
          <div className={cx('view-list')}>
            <ViewList lists={viewPin == "tZJRc" ? envlists : teclists } viewid={viewId} viewpin={viewPin} checkAdd={checkAdd}/>
          </div>
        </div>
      </div>
      :
      <div className={cx('errorpage')} onMouseMove={errorPage}>
      </div>
    }
    </div>
  );
}

export default ViewPage;
