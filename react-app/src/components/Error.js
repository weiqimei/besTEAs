import { NavLink } from 'react-router-dom';
import './Error.css'

function Error() {
  return (
    <div className='something-went-wrong'>
      <h1 className='error-message'>Error</h1>
      <div className='error-subtext'>Something went wrong</div>
      <NavLink to={`/bobaShops`}>
        <button className='go-back-to-boba-shops'>Go Back to Boba Shops</button>
      </NavLink>
    </div>
  )
}

export default Error;
