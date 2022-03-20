import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function CreateMessage() {
  Swal.fire({
    title: '보내실 내용을 작성해주세요!',
    icon: 'success',
    input: 'textarea',
    preConfirm: (create) => {
      return fetch(`/api.${create}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(response.statusText)
          }
          return response.json()
        })
        .catch(error => {
          Swal.showValidationMessage(
            `내용을 작성 해주세요!`
          )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
  })
}