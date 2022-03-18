import { useState } from 'react'
import CheckEmail from '../utils/CheckEmail'
//responseEN status 4xx 22
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isInputed, setIsInputed] = useState(false)
  
  const login = () => {
    // 이메일 유효성 체크
    // 그 이메일 가지고 api 호출 <<-
    // 안되있으면 회원가입으로
    // 되있으면 -> 비밀번호를 입력받아서 그걸로 또 확인 -> 로그인
    setIsInputed(true)

  }
  const emailHandler = e => {
    setEmail(e.target.value)
  }
  return (
    <div>
      <div className="mb-3" style={
        {
          "paddingTop" : "100px"
        }
      }>
        <div>
          <input type="text" className="form-control" placeholder="email 주소" value={email} onChange={emailHandler}/>
        </div>
        <div>

        </div>
        <div>
          <button type="button" className="btn btn-danger" onClick={login}>로그인</button>
        </div>
      </div>

    </div>
  )
}
export default Login
