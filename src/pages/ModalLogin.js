import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import Api from '../utils/Api'
import Token from '../utils/Token'
import App from '../App';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
function ModalLogin({setLogined}) {
  const navi = useNavigate()
  let loginID = ''
  useEffect(() => {
    Swal.fire({
      icon: 'info',
      // iconHtml: '<img src="https://maxst.icons8.com/vue-static/landings/animated-icons/icons/dumbbell/dumbbell.json">',
      title: 'Fit Box와 함께하세요!',
      html:
      '지금 바로 <b>신나고 재미있게!</b> ' +
      '<br/>여러 사람들과 함께 운동을 즐겨보세요~' +
      '<br/>전문가의 코칭까지 받아볼 수 있는 기회!',
      input: 'email',
      inputPlaceholder: 'Enter your email address',
      inputAttributes: {
        autocapitalize: 'off'
      },
      cancelButtonText: '취소',
      showCancelButton: true,
      confirmButtonText: '이메일 주소로 함께하기!',
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const result = await Api.checkEmail(login)
          loginID = login;
          return result;
        } catch {
          // Swal.showValidationMessage(
          //   `존재하지 않는 회원입니다`
          // )
          const { value: formValues } = await Swal.fire({
            title: '존재하지 않는 회원입니다',
            input:'password',
            inputLabel:'비밀번호를 입력해 주세요!',
            html:
              `메일주소 ${login} 으로 가입합니다!<br/><br/>`+
              '가입자 분의 성함을 입력해 주세요!'+
              '<input id="swal-input1" class="swal2-input">',
            focusConfirm: false,
            preConfirm: (password) => {
              const result = [
                login,
                document.getElementById('swal-input1').value,
                password,
              ]
              Api.signUp(...result).then(() => {
                window.location.href = '/'
              }).catch(() => {
                alert ('로그인 실패')
              })
              return false;
            }
          })
          
          if (formValues) {
            Swal.fire(JSON.stringify(formValues))
          }
        }
  
        /**
         * return Api.checkEmail(login)
        .then(response => {
          if (response.data.result.data === null) {
            throw new Error(response.statusText)
          }
          loginID = login;
          return response.data.result.data
        })
        .catch(error => {
          Swal.fire({
            icon: 'warning',
            title: '존재하지 않는 회원입니다',
            html: '지금바로 가입하시겠습니까?',
            showConfirmButton: true,
            confirmButtonText: '이메일 주소로 함께하기!',
            preConfirm: () => {
              return [document.getElementById('root')]
            },
            allowOutsideClick: () => !Swal.isLoading()
          })
        })
         */
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: '비밀번호를 입력해주세요!',
            input: 'password',
            inputPlaceholder: 'Enter your password',
            inputAttributes: {
              maxlength: 12,
              autocorrect: 'off',
              autocapitalize: 'off'
            },
            showCancelButton: true,
            cancelButtonText: '취소',
            confirmButtonText: '로그인',
            showLoaderOnConfirm: true,
            preConfirm: async (password) => {
              try {
                const result = await Api.signIn(loginID, password)
                const accessToken = result.data?.result?.data?.accessToken;
                if (accessToken) {
                  Token.setToken(accessToken)
                  setLogined(true)
                  Swal.mixin({
                    position: 'top-end',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    icon: 'success',
                    title: '로그인에 성공하였습니다!',
                    timer: 1500
                  })
                  navi("/")
                }
                return result;
              } catch {
                Swal.showValidationMessage(
                  `비밀번호가 일치하지 않습니다!`
                )
              }
            }
            })
        }
      })
  }, [])
  
  return (
    <div>

    </div>
  )
}

export default ModalLogin;