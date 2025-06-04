

import React, { useState, useContext } from 'react';
import Input from '../../components/inputs/Input';
import AuthLayout from '../../components/layouts/AuthLayout';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { useNavigate, Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import { UserContext } from '../../context/UserContext';
import ProfilePhotoSelector from '../../components/inputs/ProfilePhotoSelector';

// Upload image helper function

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const res = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  console.log("Image upload response:", res);
    console.log("Image upload response:", res.data);
    // If response is a string URL (not an object), return it as imageUrl
    const imageUrl = typeof res.data === "string" ? res.data : res?.data?.imageUrl || "";
   
    return { imageUrl };
  } catch (error) {
    console.error("Image upload failed:", error);
    return { imageUrl: "" };
  }
};

// const uploadImage = async (file) => {
//   const formData = new FormData();
//   formData.append('image', file);

//   try {
//     const res = await axiosInstance.post(API_PATHS.IMAGE.UPLOAD_IMAGE, formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     console.log("Image upload response:", res.data);
//     return res.data;
//   } catch (error) {
//     console.error("Image upload failed:", error);
//     return { imageUrl: "" };
//   }
// };
console.log("🚀 Signup form submitted");

  const handleSignUp = async (e) => {
    e.preventDefault();
    let profileImageUrl = "";

    if (!fullName) {
      setError('Please enter your name');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setError('Please enter the password');
      return;
    }

    setError('');

    try {
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageUrl,
      });

      const { token, user } = response.data;
  console.log("Signup token:", token);
      console.log("Profile image URL:", profileImageUrl);
      console.log("API response:", response.data);
      console.log("User context update function:", updateUser);

      // if (token) {
      //   localStorage.setItem('token', token);
      //   updateUser(user);
      //   navigate('/dashboard');
      // }
      if (token) {
  console.log("Signup token:", token); // 👈 Logs the token
  localStorage.setItem('token', token);
  updateUser(user);
  navigate('/dashboard');
} else {
  console.log("No token received after signup.");
}
// if (token) {
//   localStorage.setItem('token', token);
//   localStorage.setItem('user', JSON.stringify(user)); // <-- persist user
//   updateUser(user); // should update context too
//   navigate('/dashboard');
// }

    } catch (error) {
      console.error('Signup error:', error);
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John"
              type="text"
            />
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@example.com"
              type="text"
            />
            <div className="col-span-2">
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 Characters"
                type="password"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

          <button type="submit" className="btn-primary mt-4">
            SIGN UP
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already have an account?{' '}
            <Link className="font-medium text-primary underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
