import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from './ViewItem.scss';
import classNames from 'classnames/bind';
import InPage from './../InPage/InPage';

const cx = classNames.bind(styles);

const axios = require('axios');

function ViewItem({children, image, subtitle, viewitem, viewid, viewpin, checkAdd}) {
  const location = useLocation();

  const [select, setSelect] = useState(false);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [array, setArray] = useState([]);

  const [arrayTrue, setArrayTrue] = useState(false);
  const [apicheck, setApicheck] = useState(false);

  const [ star, setStar ] = useState('');
  const [ratecheck, setRatecheck] = useState(false);

  const handleStar = () => {
    window.$('.starRev span').click(function(){
      console.log(star);
      window.$(this).parent().children('span').removeClass('on');
      window.$(this).addClass('on').prevAll('span').addClass('on');
      const starId = window.$(this).attr('id');
      console.log(starId);
      setStar(starId);
    });
  }

  const onCheck = (e) => {
    console.log(e.target.name+"_"+e.target.id);
    console.log(e.target.id);
    if(e.target.name === 'select1') {
      setFirst(e.target.id);
    }
    else if(e.target.name === 'select2') {
      setSecond(e.target.id);
    }
    else{
      alert("오류")
    }
  }

  const handleClick = () => {
    window.scrollTo(0, 0);
    setSelect(true);
    if(apicheck == true) {
      alert("이미 설문에 응답하셨습니다.");
    }
  }

  const handleBack = (e) => {
    e.preventDefault();

    if(first === 0 || second === 0 || star == ''){
      alert("다시 한번 확인해주세요.")
    } else{
      setSelect(false);

      axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/answer`, {
        id: viewid,
        pin: viewpin,
        sub_name: viewitem,
        answer: [first, second],
      })
      .then(function (response) {
        console.log(response.data.check);
        if(response.data.check == true) {
          axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/rate`, {
            id: viewid,
            pin: viewpin,
            sub_name: viewitem,
            rate: star
          })
          .then(function (response) {
            console.log(response.data.check);
          })
          .catch(function (error) {
            console.log(error);
          });

          axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/sendelement`, {
            id: viewid,
            pin: viewpin,
            sub_name: viewitem,
          })
          .then(function (response) {
            console.log(response.data.check);
          })
          .catch(function (error) {
            console.log(error);
          });
        } else {
          alert("이 설문에 참여할 수 없습니다.");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

      setApicheck(true);

      checkAdd();
    }
  }

  return(
    <div>
      <div className={cx('viewitem-back')} onClick={handleClick}>
        <div className={cx('viewitem-title')}>{children}</div>
        <div>
          <img src={image}/>
        </div>
      </div>
      { (select == true && apicheck != true) &&
        <div>
          <div className={cx('viewitem-opacity')}></div>
          <div className={cx('inpage')}>
            <InPage onBack={handleBack} value={children} image={image} subtitle={subtitle} onCheck={onCheck} handleStar={handleStar} viewpin={viewpin} viewid={viewid}/>
          </div>
        </div>
      }
    </div>
  );
}

export default ViewItem;
