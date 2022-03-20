import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export default function CreateComment() {

  Swal.fire({
    title: 'How old are you?',
    icon: 'question',
    input: 'range',
    inputLabel: 'Your age',
    inputAttributes: {
      min: 0,
      max: 5,
      step: 0.5
    },
    inputValue: 3
  })
}
