import Head from "next/head";
import Image from "next/image";
import { FormEvent, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter()
  const { user, register } = useAuth()
  console.log(user)

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault()

    if (email.trim() === '') {
      setEmailError("Email is required");
      return;
    }

    if (password.trim() === '') {
      setPasswordError("Password is required");
      return;
    }

    if (confirmPassword.trim() === '') {
      setConfirmPasswordError("Please confirm your password");
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError("Please make sure your passwords match");
      return;
    }

    try {
      await register(email, password);
      setSuccessMessage("You have been successfully registered!");
      setTimeout(() => {
        setSuccessMessage("Successfully Registered");
        router.push("/login");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container-fluid"
      style={{ backgroundImage: "url('/bg.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Head>
        <title> REESMS </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className="row">
        <div className="col-sm-6 col-md-5 m-auto">
          <div className="card mb-52 mt-32" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}>
            <div className="card-body my-32 mx-16 ">
              <Image
                src="/logo.png"
                className="h-32 w-32 border border-transparent rounded-full absolute top-0 end-0"
                alt="logo.png"
                width={200}
                height={200}
                style={{ marginTop: "1rem", marginRight: "1rem" }}
              />
              <div className="d-flex justify-content-center">
                <Image
                  src="/user-icon.png"
                  className="img-thumbnail border border-white w-24 h-24"
                  alt="user-icon.png"
                  width={300}
                  height={300}
                />
              </div>

              <div className="fs-1 d-flex justify-content-center fw-bold">
                Register
              </div>

              <form onSubmit={handleRegister}>
                <div className="input-group mt-5 d-flex align-items-center">
                  <div className="input-group-text bg-white border-secondary border-end-0">
                    <i className="bi bi-envelope"></i>
                  </div>

                  <input
                    className="form-control border border-dark border-start-0"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {emailError && (
                  <div className="text-danger text-center mt-1 ">{emailError}</div>
                )}

                <div className="input-group mt-3 d-flex align-items-center">
                  <div className="input-group-text bg-white border-secondary border-end-0">
                    <i className="bi bi-lock"></i>
                  </div>
                  <input
                    className="form-control border border-dark border-start-0"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {passwordError && (
                  <div className="text-danger text-center mt-1 ">{passwordError}</div>
                )}

                <div className="input-group mt-3 d-flex align-items-center">
                  <div className="input-group-text bg-white border-secondary border-end-0">
                    <i className="bi bi-lock"></i>
                  </div>
                  <input
                    className="form-control border border-dark border-start-0"
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>

                {confirmPasswordError && (
                  <div className="text-danger text-center mt-1 ">{confirmPasswordError}</div>
                )}

                <div>
                  <button
                    type="submit"
                    className="btn btn-success mt-5 w-100 border border-dark rounded-pill">
                    Register
                  </button>
                </div>
              </form>

              {successMessage && (
                <div className="text-success text-center fs-4 mt-3">{successMessage}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
