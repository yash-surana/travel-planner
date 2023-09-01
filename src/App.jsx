import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import isNotEmptyNullOrUndefined from '../apis/checkPropsValue';
import { GET_USER_DETAILS } from '../apis/urls';

// Import components
import TripHome from '../components/trip';

export default function App() {
  const navigate = useNavigate();
  const { setToken, updateUserProfile, userID, token } = useUserContext();

  const getProfile = async (token) => {
    const response = await fetch(GET_USER_DETAILS, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      }),
    });
    if (!response.ok) {
      throw new Response('', {
        status: response.status,
        statusText: response.message,
      });
    } else {
      const res = await response.json();
      updateUserProfile(res);
    }
  };

  useEffect(() => {
    const accessToken = window.localStorage.getItem('access_token');
    async function fetchUserProfile() {
      isNotEmptyNullOrUndefined(accessToken)
        ? (setToken(accessToken),
          await getProfile(accessToken),
          window.localStorage.removeItem('access_token'))
        : token != undefined
        ? await getProfile(token)
        : navigate('/');
    }
    fetchUserProfile();
  }, []);

  return (
    <div className="m-0 p-0 h-screen w-full">
      <TripHome />
    </div>
  );
}
