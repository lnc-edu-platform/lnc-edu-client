import {
  Field,
  Form,
  LoginButton,
  LoginCard,
  LoginPageFrame,
} from './LoginPage.styles.js';

export function LoginPage() {
  return (
    <LoginPageFrame>
      <LoginCard>
        <div>
          <h1>로그인</h1>
          <p>계정 정보를 입력해 주세요.</p>
        </div>

        <Form>
          <Field>
            <span>이메일</span>
            <input type="email" placeholder="name@example.com" />
          </Field>
          <Field>
            <span>비밀번호</span>
            <input type="password" placeholder="비밀번호" />
          </Field>
          <LoginButton type="button">로그인</LoginButton>
        </Form>
      </LoginCard>
    </LoginPageFrame>
  );
}
