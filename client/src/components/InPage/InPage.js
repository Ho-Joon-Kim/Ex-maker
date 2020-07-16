import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from './InPage.scss';
import classNames from 'classnames/bind';
import InPageList from './../InPageList/InPageList';

const cx = classNames.bind(styles);

const InPage = ({ onBack, value, image, subtitle, userid, pinnum, onCheck, handleStar, viewpin, viewid }) => {
  const [ envlists, setEnvLists ] = useState([
    {
      question:'1. 과학적 문제해결력',
      text:
      `기후변화에 대한 이해를 바탕으로 인포그래픽의 주제 및 담겨야하는 내용을 충실하게 다루었는가?
      기후변화의 개념, 미래 전망, 영향 등에 대한 과학적이면서도 새로운 스토리로 풀어갔는가?`,
      id: 1
    },
    {
      question: '2. 산출물의 완성도',
      text:
      `캠페인에 사용 시 기후변화 대응에 대한 긍정적인 파급효과를 가져오는 작품인가?
      주제에 대한 내용을 요약하고 이미지와 함께 제시하여 정보를 효율적으로 전달하였는가?`,
      id: 2
    },
  ]);

  const [ teclists, setTecLists ] = useState([
    {
      question: '1. 과학적 문제해결력',
      text:
      `제시한 문제상황에 대한 실현 가능한 해결방안으로서 적정기술을 고안하였는가?
      적정기술의 문화적, 자연적, 지역적, 경제적 제약조건을 잘 반영하였는가?`,
      id: 1
    },
    {
      question: '2. 과학적 탐구설계 능력',
      text:
      `정보수집/처리 능력을 바탕으로 제시한 문제상황의 쟁점을 과학적으로 탐구하여 원인을 분석하고, 문제 해결방안을 과학적으로 창의적으로 다양한 측면을 모색하여 적정기술을 디자인하였는가?`,
      id: 2
    },
  ]);

  return(
    <div className={cx('in-back')}>
      <div className={cx('in-bar')}></div>
      <div className={cx('in-contents')}>
        <div className={cx('in-title')}>
          <input className={cx('in-title-text')} value={value} readOnly/>
          <input className={cx('in-submit')} onClick={onBack} type="submit" value="확인"/>
        </div>
        <hr className={cx('in-top-line')}/>
        <div className={cx('in-list')}>
          <InPageList lists={viewpin == "tZJRc" ? envlists : teclists} image={image} subtitle={subtitle} onCheck={onCheck} handleStar={handleStar}/>
        </div>
        <hr className={cx('in-bottom-line')}/>
      </div>
    </div>
  );
}

export default InPage;
