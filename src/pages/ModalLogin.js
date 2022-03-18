import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function ModalLogin() {

  Swal.fire({
    icon: 'info',
    title: 'Fit Box와 함께하세요!',
    html:
    '지금 바로 <b>신나고 재미있게!</b>, ' +
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
    preConfirm: (login) => {
      return fetch(`/api.${login}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          Swal.showValidationMessage(
            `이메일 주소가 일치하지 않습니다!`
          )
        })
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
          preConfirm: (login) => {
            return fetch(`/api.${login}`)
              .then(response => {
                if (!response.ok) {
                  throw new Error(response.statusText)
                }
                return response.json()
              })
              .catch(error => {
                Swal.showValidationMessage(
                  `Request failed: ${error}`
                )
              })
          }
            }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    icon: 'success',
                    title: '로그인에 성공하였습니다!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                }
              })
      }
    })
}

export default ModalLogin;
