import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


 export default function ModalInputEx(){

  const input = 'd'

  const { value: formValues } = Swal.fire({
    title: '존재하지 않는 회원입니다',
    inputLabel:'비밀번호를 입력해 주세요!',
    input:'password',
    html:
      `${input} 이 맞습니까?<br/><br/>`+
      '가입자 분의 성함을 입력해 주세요!'+
      '<input id="swal-input1" class="swal2-input">',
    focusConfirm: false,
    preConfirm: (password) => {
      return [
        password,
        document.getElementById('swal-input1').value
      ]
    }
  })
  
  if (formValues) {
    Swal.fire(JSON.stringify(formValues))
  }

}
