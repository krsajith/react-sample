
import styles from './login.module.css';


export function Login() {
  function login(){
      console.log('hello');
      keycloak.login();
  }
  return (
    <div className={styles['container']}>
              <button 
          onClick={() => login()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </button>
    </div>
  );
}

export default Login;



