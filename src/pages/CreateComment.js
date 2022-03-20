import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function CreateComment() {
  Swal.fire({
    title: '댓글을 남겨주세요!',
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
            `댓글을 입력해주세요!`
          )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
  })
}
