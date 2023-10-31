"use client"
import { useState } from 'react'
import styles from './contactForm.module.css'
import {
  FaCheck,
  FaExclamation,
  FaXmark
} from 'react-icons/fa6'



export default function ContactForm() {
  const [custName, setCustName] = useState(null);
  const [custPhone, setCustPhone] = useState(null);
  const [iAgree, setIAgree] = useState(false);

  const handleCustNameChange = (e) => { setCustName(e.target.value) }
  const handleCustPhoneChange = (e) => { setCustPhone(e.target.value) }
  const handleIAgreeChange = () => { setIAgree(!iAgree) }

  const handleSubmit = () => {
    const form = document.querySelector('#form');
    const mgsFormMobile = document.querySelector('#mgsFormMobile');
    const errorMobile = document.querySelector('#mgsErrorMobile');
    const successMobile = document.querySelector('#mgsSuccessMobile');
    const mgsBtnMobile = document.querySelector('#mgsBtnMobile');

    const mgsDialogOverlay = document.querySelector('#mgsDialogOverlay')
    const errorDesktop = document.querySelector('#mgsErrorDesktop');
    const successDesktop = document.querySelector('#mgsSuccessDesktop');

    const data = [custName, custPhone, iAgree]

    if (!custName || !custPhone || iAgree === false) {
      // mobile
      mgsFormMobile.classList.add('flex')
      mgsFormMobile.classList.remove('hidden')
      errorMobile.classList.add('flex');
      errorMobile.classList.remove('hidden');
      mgsBtnMobile.innerHTML = '돌아가다';
      form.classList.add('hidden')

      // desktop
      document.body.classList.add('lg:max-h-screen')
      document.body.classList.add('lg:overflow-y-hidden')
      mgsDialogOverlay.classList.add('lg:block');
      errorDesktop.classList.add('flex');
      errorDesktop.classList.remove('hidden');
    }
    else if (custName && custPhone && iAgree === true) {
      // API SUBMIT


      // mobile
      mgsFormMobile.classList.add('flex')
      mgsFormMobile.classList.remove('hidden')
      successMobile.classList.add('flex');
      successMobile.classList.remove('hidden');
      mgsBtnMobile.innerHTML = '승인';
      form.classList.add('hidden')

      // desktop
      document.body.classList.add('lg:max-h-screen')
      document.body.classList.add('lg:overflow-y-hidden')
      mgsDialogOverlay.classList.add('lg:block');
      successDesktop.classList.add('flex');
      successDesktop.classList.remove('hidden');
    }
  }

  const handleReturn = () => {
    const form = document.querySelector('#form');
    const mgsFormMobile = document.querySelector('#mgsFormMobile');
    const errorMobile = document.querySelector('#mgsErrorMobile');
    const successMobile = document.querySelector('#mgsSuccessMobile');
    const mgsBtnMobile = document.querySelector('#mgsBtnMobile');

    const mgsDialogOverlay = document.querySelector('#mgsDialogOverlay')
    const errorDesktop = document.querySelector('#mgsErrorDesktop');
    const successDesktop = document.querySelector('#mgsSuccessDesktop');

    if (errorMobile.classList.contains('flex')) {
      // mobile
      mgsFormMobile.classList.remove('flex')
      mgsFormMobile.classList.add('hidden')
      errorMobile.classList.remove('flex');
      errorMobile.classList.add('hidden');
      mgsBtnMobile.innerHTML = '';
      form.classList.remove('hidden')

      // desktop
      document.body.classList.remove('lg:max-h-screen')
      document.body.classList.remove('lg:overflow-y-hidden')
      mgsDialogOverlay.classList.remove('lg:block');
      errorDesktop.classList.remove('flex');
      errorDesktop.classList.add('hidden');
    }
    else if (successMobile.classList.contains('flex')) {
      // mobile
      mgsFormMobile.classList.remove('flex')
      mgsFormMobile.classList.add('hidden')
      successMobile.classList.remove('flex')
      successMobile.classList.add('hidden')
      mgsBtnMobile.innerHTML = '';

      // desktop
      document.body.classList.remove('lg:max-h-screen')
      document.body.classList.remove('lg:overflow-y-hidden')
      mgsDialogOverlay.classList.remove('lg:block');
      successDesktop.classList.remove('flex');
      successDesktop.classList.add('hidden');

      // clear inputs
      document.querySelector('#custName').value = null;
      document.querySelector('#custPhone').value = null;
      document.querySelector('#iAgree').checked = false;
      setCustName(null)
      setCustPhone(null)
      setIAgree(false)
      form.classList.remove('hidden')
    }
  }

  return (
    <>
      <article className={styles.contactForm}>
        <div id="form" className={`${styles.form}`}>
          <div className={styles.formControl}>
            <input id="custName" type="text"
              placeholder='이름 (소속) 입력하기'
              className={`form-input ${styles.inputText}`}
              onChange={handleCustNameChange}
            />
          </div>

          <div className={styles.formControl}>
            <input id="custPhone" type="text"
              placeholder='연락처 입력하기'
              className={`form-input ${styles.inputText}`}
              onChange={handleCustPhoneChange}
            />
          </div>

          <div className={styles.formCheck}>
            <label htmlFor="iAgree">
              <input id="iAgree" type="checkbox"
                className={`form-checkbox ${styles.checkBox}`}
                onChange={handleIAgreeChange}
              />
              <span> 개인정보 수집 및 이용에 동의합니다. </span>
            </label>
          </div>

          <div className={styles.formButton}>
            <button onClick={handleSubmit}> 상담 예약 </button>
          </div>
        </div>

        <div id="mgsFormMobile" className={`hidden ${styles.mgsFormMobile} `}>
          <div id="mgsErrorMobile" className={`hidden ${styles.mgsErrorMobile}`}>
            {/* icon */}
            <div className={styles.iconXmarkMobile}>
              <FaXmark />
            </div>
            <h5> 이름과 연락처를 입력해 주세요! </h5>
          </div>

          <div id="mgsSuccessMobile" className={`hidden ${styles.mgsSuccessMobile}`}>
            <div className={styles.iconCheckMobile}>
              <FaCheck />
            </div>
            <h5>
              접수 완료 !  담당자가 24 시간 내에 <br />
              신속하게 연락 드리겠습니다  ^__^
            </h5>
          </div>

          <div className={`${styles.mgsButtonMobile} `}>
            <button id="mgsBtnMobile" onClick={handleReturn}> 돌아가다 </button>
          </div>
        </div>
      </article>

      {/* modal */}
      <article id="mgsDialogOverlay" className={`hidden ${styles.mgsDialogOverlay}`}>
        <div className={styles.mgsDialogContent}>
          <div id="mgsErrorDesktop" className={`hidden ${styles.mgsErrorDesktop}`}>
            <div className={styles.iconExclaDesktop}>
              <FaExclamation />
            </div>
            <h5> 이름과 연락처를 입력해 주세요! </h5>

            <div className={`${styles.mgsButtonDesktop} `}>
              <button className={styles.iconXmarkDesktop}
                onClick={handleReturn}>
                <FaXmark />
              </button>
            </div>
          </div>

          <div id="mgsSuccessDesktop" className={`hidden ${styles.mgsSuccessDesktop}`}>
            <div className={styles.iconCheckDesktop}>
              <FaCheck />
            </div>
            <h5>
              접수 완료!&nbsp;&nbsp;담당자가 24 시간 내에 신속하게 연락 드리겠습니다  ^__^
            </h5>

            <div className={`${styles.mgsButtonDesktop} `}>
              <button className={styles.iconXmarkDesktop}
                onClick={handleReturn}>
                <FaXmark />
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
