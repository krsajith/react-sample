
// import styles from './router-spinner.module.css';

import { useRouterState } from "@tanstack/react-router";

// export function RouterSpinner() {
//   return (
//     <div className={styles['container']}>
//       <h1>Welcome to RouterSpinner!</h1>
//     </div>
//   );
// }

// 


function Spinner({ show, wait }) {
  return (
    <div
      className={`inline-block animate-spin px-3 transition ${
        (show ?? true)
          ? `opacity-100 duration-500 ${wait ?? 'delay-300'}`
          : 'duration-500 opacity-0 delay-0'
      }`}
    >
      ⍥
    </div>
  );
}

function RouterSpinner() {
  const isLoading = useRouterState({ select: (s) => s.status === 'pending' })
  return <Spinner show={isLoading} />
}

export default RouterSpinner;
